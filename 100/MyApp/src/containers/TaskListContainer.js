import { connect } from "react-redux";
import TaskListComponent from "../components/components/TaskListComponent";

const mapStateToProps = (state) => {
    return{
        tasks: !state.taskReducers ? [] : state.taskReducers
    }
};

const TaskListContainer = connect(mapStateToProps)(TaskListComponent);
export default TaskListContainer;