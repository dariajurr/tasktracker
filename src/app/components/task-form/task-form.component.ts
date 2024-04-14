import { Component, Input, OnInit } from '@angular/core';

import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  PRIORITIES,
  PriorityType,
  PriorityWithNames,
} from 'src/core/interfaces/priority.interface';
import { STATUSES, StatusesWithNames, StatusType } from 'src/core/interfaces/status.interface';
import { TaskFormItem, TaskItem } from 'src/core/interfaces/task.interface';
import { TaskService } from 'src/core/services/task.service';
import { createTaskBodyDTO } from 'src/core/dto/create-task.transformer';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: 'auto' },
    },
    provideNativeDateAdapter(),
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent implements OnInit {
  @Input() id: number | undefined
  @Input() taskData: TaskItem | null = null;

  updateMode: boolean = false;
  editMode: boolean = false;

  taskForm: FormGroup<TaskFormItem> = this._fb.group<TaskFormItem>({
    title: this._fb.control<string>('', [Validators.required]),
    description: this._fb.control<string>('', [Validators.required]),
    deadline: this._fb.control<Date>(new Date(new Date().setHours(0,0,0,0)), [Validators.required]),
    priority: this._fb.control<PriorityType | null>(null, [Validators.required]),
    status: this._fb.control<StatusType | null>(null, [Validators.required]),
    performer: this._fb.control<string>('', [Validators.required]),
  });

  statuses: StatusesWithNames[] = STATUSES;
  priorities: PriorityWithNames[] = PRIORITIES;

  constructor(
    private _fb: NonNullableFormBuilder,
    private _taskService: TaskService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    if(!this.id) this.editMode = true;
    if (!this.editMode) this.taskForm.disable();
    if (this.taskData) this.taskForm.patchValue(this.taskData);
  }

  editTask(): void {
    this.updateMode = true;
    this.taskForm.controls.status.enable();
    this.taskForm.controls.performer.enable();
  }

  onSubmit(): void {
    if (this.updateMode) {

    }
    this._getFormAction
    if (this.updateMode) {
      this._taskService.updateTask(createTaskBodyDTO(this.taskForm.controls, this.id)).subscribe({
        next: () => {
          this.taskForm.reset();
          this._router.navigate(['/', 'tasks']);
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else {
      this._taskService.createTask(createTaskBodyDTO(this.taskForm.controls)).subscribe({
        next: () => {
          this.taskForm.reset();
          this._router.navigate(['/', 'tasks']);
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
      
  }

  private _getFormAction(): Observable<TaskItem[]> {
    if (this.updateMode) {
      return this._taskService.createTask(createTaskBodyDTO(this.taskForm.controls))
    } else {
      return this._taskService.updateTask(createTaskBodyDTO(this.taskForm.controls))
    }
  }
}
