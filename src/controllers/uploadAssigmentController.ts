import { Student } from "@entities/Student";
import { Subject } from "@entities/Subject";

export class UploadAssignmentController {

    async getStudentById(studentId: string) {
        const [err, student] = await Student.findOne({ studentId }).exec();
        return !err ? student : null;
    }

    async getSubjectsByStudentId(id: String) {
        const [err, subjects] = await Subject.find({ student: { id } }).exec();
        return !err ? subjects : null;
    }
}