import mongoose from 'mongoose';

const { Schema, Types } = mongoose;


const QuestionSchema = new Schema({
  question: String,
  category: String,
  favorite: { type: Number, default: 0 },
  answer1: String,
  answer2: String,
  answer3: String,
  result: String
});

QuestionSchema.statics = {
  createNew(question) {
    return this.create(question);
  },
  getAll(){
    return this.find().exec();
  }
}

export default mongoose.model('questions', QuestionSchema);
