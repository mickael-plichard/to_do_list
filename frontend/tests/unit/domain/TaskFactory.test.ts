import { TaskFactoryService} from "../../../src/domain/TaskFactory.service";
import { TaskActions} from "../../../src/domain/TaskActions.service";
import { describe, it, expect } from "vitest";


describe("Task domain", () => {
    it("should create a task with OPEN status", () => {
        const task = TaskFactoryService.create("1", "Test task");
        expect(task.id).toBe("1");
        expect(task.title).toBe("Test task");
        expect(task.status).toBe("OPEN");
        expect(task.createdAt).toBeInstanceOf(Date);
    });

    it("should throw if title is empty", () => {
        expect(() => TaskFactoryService.create("1", "")).toThrow();
    });

    it("should toggle status", () => {
        let task = TaskFactoryService.create("1", "Test task");
        task = TaskActions.toggleStatus(task);
        expect(task.status).toBe("DONE");
        task = TaskActions.toggleStatus(task);
        expect(task.status).toBe("OPEN");
    });

    it("should update title", () => {
        let task = TaskFactoryService.create("1", "Old title");
        task = TaskActions.updateTitle(task, "New title");
        expect(task.title).toBe("New title");
    });

    it("should not allow empty title on update", () => {
        const task = TaskFactoryService.create("1", "Old title");
        expect(() => TaskActions.updateTitle(task, "")).toThrow();
    });
});
