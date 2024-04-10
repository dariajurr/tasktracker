import { PriorityType } from "../interfaces/priority.interface";
import { StatusType } from "../interfaces/status.interface";
import { TaskFormItem, TaskItem } from "../interfaces/task.interface";

export const createTaskBodyDTO = (
    body: TaskFormItem,
  ): TaskItem => ({
    id: 0,
    title: body.title.value,
    description: body.description.value,
    deadline: body.deadline.value,
    priority: body.priority.value ?? PriorityType.MIDDLE,
    status: body.status.value ?? StatusType.CREATE,
    performer: body.performer.value
  });