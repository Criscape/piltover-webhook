import { Assignment } from "@entities/Assignment";
import { Item } from "@entities/Item";

export class calificarItemsController {

    private async getAssignmentById(assignmentId: string) {
        return await Assignment.findOne({ assignmentId }).exec();
    }

    async createItem(params: any) {
        return await Item.create(params);
    }

    async updateAssignmentGradeAndItems(assignmentId: string, grade: number, itemsId: string[]) {
        const assignment = await this.getAssignmentById(assignmentId).catch(err => console.log(err));
        if (assignment) {
            assignment.grade = grade;
        }
        for (let item of itemsId) {
            assignment.items.push(item);
        }
        return await assignment.save();
    }

    calcGradeFromItems(items: any[]) {
        const grades = items.map(item => item.grade * item.percentage);
        return grades.reduce((a,b) => (a + b), 0);
    }

    private validateOnlyNumbersAndDot(value: string) {
        return value.match(/^[0-9]*\.?[0-9]*$/);
    }

    private validateItemFormat(value: string) {
        return value.match(/^([A-Za-z0-9_])*\:[0-9]*\.?[0-9]*\;[0-9]*\.?[0-9]*$/);
    }

    async validateItems(itemsString: string, assignmentId: string) {
        const assignment = await this.getAssignmentById(assignmentId).catch(err => console.log(err));
        if (assignment) {
            if (itemsString.includes(',')) {
                const items = itemsString.split(',');
                const newItems = []
                for (let i in items) {
                    if (this.validateItemFormat(i)) {
                        const iSplit = i.split(':');
                        const iSplit2 = iSplit[1].split(';');
                        newItems.push({
                            assignment: assignment.id,
                            grade: parseFloat(iSplit2[0]).toFixed(1),
                            percentage: parseFloat(iSplit2[1]).toFixed(1),
                            title: iSplit[0]
                        });
                    } else {
                        return 0;
                    }
                }
                return newItems;
            } else if (this.validateItemFormat(itemsString)) {
                const iSplit = itemsString.split(':');
                const iSplit2 = iSplit[1].split(';');
                return [{
                    assignment: assignment.id,
                    grade: parseFloat(iSplit2[0]).toFixed(1),
                    percentage: parseFloat(iSplit2[1]).toFixed(1),
                    title: iSplit[0]
                }];
            } else if (this.validateOnlyNumbersAndDot(itemsString)) {
                return [{
                    assignment: assignment.id,
                    grade: parseFloat(itemsString).toFixed(1),
                    percentage: 1.0,
                    title: 'por defecto'
                }];
            } else {
                return 0;
            }
        }
    }
}