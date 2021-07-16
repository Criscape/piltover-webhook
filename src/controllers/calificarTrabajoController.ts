import { Assignment } from "@entities/Assignment";
import { Teacher } from "@entities/Teacher";

export class calificarTrabajoController {

    async getAssignmentById(assignmentId: string) {
        return await Assignment.findOne({ assignmentId }).exec();
    }

    async getTeacherById(teacherId: string) {
        return await Teacher.findOne({ teacherId }).exec();
    }
}