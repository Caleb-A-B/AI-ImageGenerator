import mongoose from 'mongoose';

const Post = new mongoose.schema({
 name: { type: String},
 prompt: { type: String},
 photo: { type: String}
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;