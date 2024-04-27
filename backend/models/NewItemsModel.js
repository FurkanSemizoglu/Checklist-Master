import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    checklistItems: [{
        type: String,
        required: true
    }]
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;


