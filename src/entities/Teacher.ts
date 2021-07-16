import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    teacherId: Schema.Types.Number,
    name: Schema.Types.String,
    age: Schema.Types.Number
}, {
    timestamps: true
});

export const Teacher = mongoose.model('Teacher', teacherSchema);