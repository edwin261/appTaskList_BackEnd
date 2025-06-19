import { Router } from "express";
import TaskController from '../../controllers/Task/task.js'

const router = new Router();
router.get('/', TaskController.getTaskRecords)
.post('/', TaskController.addTaskRecord)
.put('/', TaskController.putTaskRecord)
.delete('/:id', TaskController.deleteTaskRecord);

export default router;