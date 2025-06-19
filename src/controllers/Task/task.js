import TaskService from '../../services/Task/task.js'

const getTaskRecords = (req, res) => {
  const result = TaskService.getTaskRecords();
  res.json(result);
}

const addTaskRecord = (req, res) => {
  const task = TaskService.addTaskRecord(req.body);
  res.status(201).json(task);
}

const putTaskRecord = (req, res) => {
  res.status(200).json(TaskService.putTaskRecord(req.body));
}

const deleteTaskRecord = (req, res) => {
  TaskService.deleteTaskRecord(parseInt(req.params.id));
  res.status(204).send();
}

export default {
    getTaskRecords,
    addTaskRecord,
    putTaskRecord,
    deleteTaskRecord
};