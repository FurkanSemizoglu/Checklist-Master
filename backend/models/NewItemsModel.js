import mongoose from 'mongoose';

const newChecklistItemsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    checklistItems: [{
        type: String,
        required: true
    }]
},{timestamps: true });

const ChecklistItem = mongoose.model('ChecklistItems', newChecklistItemsSchema);

export  {ChecklistItem};


