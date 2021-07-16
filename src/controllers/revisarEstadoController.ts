import { Assignment } from "src/entities/Assignment";
import { Item } from "src/entities/Item";
import { Subject } from "src/entities/Subject";

export class revisarEstadoController {

    async getAssignmentById(assignmentId: string) {
        return await Assignment.findOne({ assignmentId }).exec();
    }

    async getSubjectById(subjectMongoId: string) {
        return await Subject.findById(subjectMongoId).exec();
    }

    async getItemById(itemMongoId: string) {
        return await Item.findById(itemMongoId).exec();
    }
}