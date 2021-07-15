import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject'
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: 'Student'
    },
    items: [
        { type: Schema.Types.ObjectId, ref: 'Item' }
    ],
    title: Schema.Types.String
}, {
    timestamps: true
});

export const Assignment = mongoose.model('Assignment', assignmentSchema);