import { Assignment } from "src/entities/Assignment";
import { Teacher } from "src/entities/Teacher";

export class calificarTrabajoController {

    async getAssignmentById(assignmentId: string) {
        return await Assignment.findOne({ assignmentId }).exec();
    }

    async getTeacherById(teacherId: string) {
        return await Teacher.findOne({ teacherId }).exec();
    }
}