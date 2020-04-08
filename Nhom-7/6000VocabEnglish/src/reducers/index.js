import { combineReducers } from "redux";
import exams from "./exams";
import dataExam from "./dataExam";

export default combineReducers({
  exams,
  dataExam
});
