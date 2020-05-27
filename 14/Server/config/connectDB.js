import mongoose from 'mongoose';
import bluebird from "bluebird";

const connectDB = () => {
    mongoose.Promise = bluebird;
    let URI = `mongodb://127.0.0.1:27017/toeicTest`;
    return mongoose.connect(URI, {useNewUrlParser: true});
};

export default connectDB;