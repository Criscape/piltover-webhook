import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    assignment: {
        type: Schema.Types.ObjectId,
        ref: 'Assignment'
    },
    grade: Schema.Types.Decimal128,
    percentage: Schema.Types.Decimal128,
    title: Schema.Types.String
}, {
    timestamps: true
});

export const Item = mongoose.model('Item', itemSchema);