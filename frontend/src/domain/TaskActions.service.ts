import type {Task} from "./Task.ts";

export class TaskActions {
    static toggleStatus(task: Task): Task {
        return {
            ...task,
            status: task.status === "OPEN" ? "DONE" : "OPEN",
        };
    }

    static updateTitle(task: Task, title: string): Task {
        if (!title.trim()) throw new Error("Missing title");
        return {...task, title};
    }
}