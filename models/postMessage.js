import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: new Date()
    },
});

// postSchema.method("toJSON", function () {
//   const { __v, _id, ...object } = this.toObject();
//   object._id = _id;
//   return object;
// });

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;