import type {TaskId} from "./TaskId.type.ts";
import type {Task} from "./Task.ts";
import type {TaskStatus} from "./TaskStatus.type.ts";

export class TaskFactoryService {
    static create(id: TaskId, title: string, now: Date = new Date()): Task {
        if(!title.trim()) {
            throw new Error("Title can't be empty");
        }
        return {
            id,
            title,
            status: "OPEN" as TaskStatus,
            createdAt: now,
        };
    }
}