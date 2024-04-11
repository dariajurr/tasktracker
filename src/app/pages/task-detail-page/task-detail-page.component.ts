import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TaskFormComponent } from 'src/app/components/task-form/task-form.component';
import { TaskItem } from 'src/core/interfaces/task.interface';
import { TaskService } from 'src/core/services/task.service';

@Component({
  selector: 'app-task-detail-page',
  standalone: true,
  imports: [
    RouterModule,
    MatIconModule,
    MatButtonModule,
    TaskFormComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './task-detail-page.component.html',
  styleUrl: './task-detail-page.component.scss',
})
export class TaskDetailPageComponent implements OnInit {
  id?: number;
  data: TaskItem | null = null;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _taskService: TaskService
  ) {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });
  }

  ngOnInit(): void {
    if (this.id) {
      this._taskService.getTaskById(this.id).subscribe((taskData) => {
        this.data = taskData || null;
      });
    }
  }
}
