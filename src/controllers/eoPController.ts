import { Student } from "@entities/Student";
import { Teacher } from "@entities/Teacher";

export class eoPController {

    async getStudentById(studentId: string) {
        return await Student.findOne({ studentId }).exec();
    }

    async getTeacherById(teacherId: string) {
        return await Teacher.findOne({ teacherId }).exec();
    }
}