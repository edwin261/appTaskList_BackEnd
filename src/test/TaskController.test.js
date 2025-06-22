import express from "express"
import request from "supertest"
import taskController from "../controllers/Task/task.js";

const app = express();
app.use(express.json());

app.get('/task', taskController.getTaskRecords)
app.post('/task', taskController.addTaskRecord)
app.put('/task', taskController.putTaskRecord)
app.delete('/task/:id', taskController.deleteTaskRecord);

const taskRecord = [{
    id: 1,
    title: "Tarea prueba",
    estado: "Pendiente"
}]

describe("controller method 'addTaskRecord()'", () => {
    it("Crear un nuevo registro de tarea", async () => {
        const firstTaskRecord = taskRecord[0];
        const response = await request(app).post('/task').send(firstTaskRecord);
        expect(response.statusCode).toBe(201);
        expect(response.body).toStrictEqual(firstTaskRecord);
    });
});

describe("controller method 'getTaskRecords()'", () => {
    it("Obtener el listado de tareas creadas", async () => {
        const response = await request(app).get('/task');
        expect(response.statusCode).toBe(200);
        expect(response).not.toEqual(0);
    });
});

describe("controller method 'putTaskRecord()'", () => {
    it("editar un registro del listado de tareas creadas", async () => {
        const firstTaskRecord = taskRecord[0];
        firstTaskRecord.estado = "Completado";
        const response = await request(app).put('/task').send(firstTaskRecord);
        expect(response.statusCode).toBe(200);
        expect(response.body[0].estado).toBe("Completado");
    });
});

describe("controller method 'deleteTaskRecord()'", () => {
    it("eliminar un registro del listado de tareas creadas", async () => {
        const response = await request(app).delete('/task/1');
        expect(response.statusCode).toBe(204);
    });
});