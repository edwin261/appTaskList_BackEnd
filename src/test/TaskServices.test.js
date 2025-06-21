import task from "../services/Task/task.js";

const taskRecord = [{
    id: 1,
    title: "Tarea prueba",
    estado: "Pendiente"
}]

describe("service method 'addTaskRecord()'", () => {
    it("Crear un nuevo registro de tarea", () => {
        const firstTaskRecord = taskRecord[0];
        const result = task.addTaskRecord(firstTaskRecord);
        expect(result).toEqual(firstTaskRecord);
    });
});

describe("service method 'getTaskRecords()'", () => {
    it("Obtener el listado de tareas creadas", () => {
        const result = task.getTaskRecords();
        expect(result).toEqual(taskRecord);
    });
});

describe("service method 'putTaskRecord()'", () => {
    it("editar un registro del listado de tareas creadas", () => {
        const firstTaskRecord = taskRecord[0];
        firstTaskRecord.estado = "Completado";
        const result = task.putTaskRecord(firstTaskRecord);
        expect(result).toEqual(taskRecord);
    });
});

describe("service method 'deleteTaskRecord()'", () => {
    it("eliminar un registro del listado de tareas creadas", () => {
        const result = task.deleteTaskRecord(1);
        expect(result).toEqual(null);
    });
});