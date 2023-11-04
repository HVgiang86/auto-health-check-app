const { Task } = require('./task')
const taskList = new Map();

TaskActions = {
    addTask(task) {
        if (!taskList.has(task.task_id)) {
            taskList.set(task.task_id, task)
            return task
        }
        return null;
    },
    updateTask(task) {
        if (taskList.has(task.task_id)) {
            taskList.set(task.task_id, task)
            return task;
        }
        return null;
    },
    removeTask(task) {
        if (taskList.has(task.task_id)) {
            taskList.delete(task.task_id)
            return taskList.size;
        }
        return null;
    }
}

module.exports = {
    taskList,
    TaskActions
}