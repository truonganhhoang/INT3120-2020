import mongoose from 'mongoose';

const { Schema, Types } = mongoose;


const UserSchema = new Schema({
  username: String,
  password: String,
});

UserSchema.statics = {
  createUser(user){
    return this.create(user);
  },
  findUserByUsername(username){
    return this.findOne({"username": username}).exec(); 
  },
  findUserById(id){
    return this.findById(id).exec();
  }
}

UserSchema.methods = {
  verifyPassword(password) {
      return this.password === password;
  }
};

export default mongoose.model('users', UserSchema);
