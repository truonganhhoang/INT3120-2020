import { connect } from "react-redux";
import TaskListComponent from "../components/components/TaskListComponent";

const TaskItemContainer = connect()(TaskListComponent);
export default TaskItemContainer;