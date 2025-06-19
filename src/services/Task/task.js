let taskRecords = [];

const getTaskRecords = () => {
  return taskRecords;
}

const addTaskRecord = (req) => {
  taskRecords.push(req);
  return req;
}

const putTaskRecord = (req) => {
  let index = taskRecords.findIndex(t => t.id === req.id);
  if (index > -1) {
    taskRecords[index] = req;
  }
  return taskRecords;
}

const deleteTaskRecord = (id) => {
  taskRecords = taskRecords.filter(task => task.id !== parseInt(id));
  return null;
}

export default {
    getTaskRecords,
    addTaskRecord,
    putTaskRecord,
    deleteTaskRecord
};