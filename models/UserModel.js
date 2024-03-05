import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Please enter first name'],
  },
  lastName: {
    type: String,
    required: [true, 'Please enter last name'],
  },
  username: {
    type: String,
    required: [true, 'Please enter username'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
  },
});

UserSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;

  return obj;
};

export default mongoose.model('User', UserSchema);
