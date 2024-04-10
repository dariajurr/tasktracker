import { Component, Input, OnInit } from '@angular/core';

import {
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
} from 'src/core/interfaces/priority.interface';
import { STATUSES, StatusType } from 'src/core/interfaces/status.interface';
import { TaskFormItem } from 'src/core/interfaces/task.interface';
import { TaskService } from 'src/core/services/task.service';
import { createTaskBodyDTO } from 'src/core/dto/create-task.transformer';
import { Router } from '@angular/router';

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
  @Input() editMode: boolean = false;

  taskForm = this.fb.group<TaskFormItem>({
    title: this.fb.control<string>('', [Validators.required]),
    description: this.fb.control<string>('', [Validators.required]),
    deadline: this.fb.control<Date>(new Date(), [Validators.required]),
    priority: this.fb.control<PriorityType | null>(null, [Validators.required]),
    status: this.fb.control<StatusType | null>(null, [Validators.required]),
    performer: this.fb.control<number | null>(null, [Validators.required]),
  });

  statuses = STATUSES;
  priorities = PRIORITIES;

  constructor(
    private fb: NonNullableFormBuilder,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.editMode) this.taskForm.disable();
  }

  onSubmit(): void {
    this.taskService
      .createTask(createTaskBodyDTO(this.taskForm.controls))
      .subscribe({
        next: (res) => {
          this.taskForm.reset();
          this.router.navigate(['/', 'tasks']);
        },
        error: (err) => {
          console.error(err);
        },
      });
  }
}
