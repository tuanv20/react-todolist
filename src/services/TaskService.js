import axios from 'axios' 

const REST_API_URL = 'http://54.174.4.148:8081/';
//const REST_API_URL = 'http://localhost:8081/'

class TaskService{
    getAllTasks(){
        return axios.get(REST_API_URL + "getTasks");
    }

    getAllCompletedTasks(){
        return axios.get(REST_API_URL + "getCompletedTasks");
    }

    getAllUnfinishedTasks(){
        return axios.get(REST_API_URL + "getUnfinishedTasks");
    }

    addTask(task){
        return axios.post(REST_API_URL + "addTask", {
            taskItem: task.taskItem,
            dueDate: task.dueDate,
            completeDate: task.completeDate,
            completed: task.completed
        })
    }

    deleteTask(id){
        return axios.delete(REST_API_URL + "deleteTask/" + id);
    }

    updateTask(id, task){
        return axios.put(REST_API_URL + "updateTask/" + id, {
            taskItem: task.taskItem,
            dueDate: task.dueDate,
            completeDate: task.completeDate,
            completed: task.completed
        })
    }

    dateToEpoch(date){
        return Date.parse(date);
    }

    EpochtoDate(epoch){
        return new Date(epoch).toLocaleDateString();
    }
}

export default new TaskService();