import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    assignment: {
        type: Schema.Types.ObjectId,
        ref: 'Assignment'
    },
    description: Schema.Types.String,
    comment: Schema.Types.String,
    grade: Schema.Types.Decimal128
}, {
    timestamps: true
});

export const Item = mongoose.model('Item', itemSchema);