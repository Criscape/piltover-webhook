import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject'
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: 'Student'
    },
    items: [
        { type: Schema.Types.ObjectId, ref: 'Item' }
    ],
    assignmentId: Schema.Types.Number,
    title: Schema.Types.String,
    url: Schema.Types.String,
    grade: Schema.Types.Decimal128
}, {
    timestamps: true
});

export const Assignment = mongoose.model('Assignment', assignmentSchema);