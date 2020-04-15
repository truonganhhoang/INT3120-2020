import mongoose from 'mongoose';
import bluebird from "bluebird";

const connectDB = () => {
    mongoose.Promise = bluebird;
    let URI = `mongodb://localhost:27017/toeicTest`;
    return mongoose.connect(URI, {useNewUrlParser: true});
};

export default connectDB;