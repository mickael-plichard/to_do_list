import type {TaskId} from "./TaskId.type.ts";
import type {TaskStatus} from "./TaskStatus.type.ts";

export interface Task {
    readonly id: TaskId;
    readonly title: string;
    readonly status: TaskStatus;
    readonly createdAt: Date;
}