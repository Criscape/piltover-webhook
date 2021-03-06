import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    studentId: Schema.Types.Number,
    name: Schema.Types.String,
    age: Schema.Types.Number
}, {
    timestamps: true
});

export const Student = mongoose.model('Student', studentSchema);