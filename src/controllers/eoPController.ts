import { Student } from "src/entities/Student";
import { Teacher } from "src/entities/Teacher";

export class eoPController {

    async getStudentById(studentId: string) {
        return await Student.findOne({ studentId }).exec();
    }

    async getTeacherById(teacherId: string) {
        return await Teacher.findOne({ teacherId }).exec();
    }
}