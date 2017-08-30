import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;
const UserSchema = new Schema({
  name: { type: String },
});

export default Mongoose.model('User', UserSchema);
