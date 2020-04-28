import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from "./ActionTypes";

let newTaskId = 0;

// action them task
export const addNewTask = (inputTaskName) => {
    return {
        type: ADD_NEW_TASK,
        taskId: newTaskId++,
        taskName: inputTaskName
    };
}

// action bam vao doi trang thai

export const toggleTask = (taskId) => {
    return {
        type: TOGGLE_ONE_TASK,
        taskId: taskId,
    };
}