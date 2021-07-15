import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    teachers: [
        { type: Schema.Types.ObjectId, ref: 'Teacher' }
    ],
    students: [
        { type: Schema.Types.ObjectId, ref: 'Student' }
    ],
    name: Schema.Types.String,
    credits: Schema.Types.Number
}, {
    timestamps: true
});

export const Subject = mongoose.model('Subject', subjectSchema);