import { Assignment } from "../entities/Assignment";
import { Student } from "../entities/Student";
import { Subject } from "../entities/Subject";

export class subirTrabajoController {

    async getStudentById(studentId: string) {
        return await Student.findOne({ studentId }).exec();
    }

    async getSubjectById(subjectId: string) {
        return await Subject.findOne({ subjectId }).exec();
    }

    private generateAssignmentId() {
        return Math.floor(Math.random() * 100000000);
    }

    async createAssignment(studentMongoId: string, subjectMongoId: string, title: string, url: string) {
        return await Assignment.create({
            subject: subjectMongoId,
            student: studentMongoId,
            assignmentId: this.generateAssignmentId(),
            title,
            url
        });
    }
}