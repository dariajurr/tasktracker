import { FormControl } from '@angular/forms';
import { PriorityType } from './priority.interface';
import { StatusType } from './status.interface';

export interface TaskItem {
  id: number;
  title: string;
  description: string;
  deadline: Date;
  priority: PriorityType;
  status: StatusType;
  performer: string;
}

export interface TaskFormItem {
  title: FormControl<string>;
  description: FormControl<string>;
  deadline: FormControl<Date>;
  priority: FormControl<PriorityType | null>;
  status: FormControl<StatusType | null>;
  performer: FormControl<string>;
}

export interface TaskFilter extends Pick<TaskItem, 'status' | 'performer'> {}

export interface TaskTableFilter {
  name: string;
  options: string[];
  defaultValue: string;
}
