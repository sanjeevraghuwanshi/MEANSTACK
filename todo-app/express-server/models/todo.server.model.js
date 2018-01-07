import mongoose, {
    Schema
} from "mongoose";

var schema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },

    fullName: String,
    todoText: String
});

export default mongoose.model('Todo', schema);