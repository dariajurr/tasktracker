import {
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { TasksTableDataSource } from './tasks-table-datasource';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TaskItem } from 'src/core/interfaces/task.interface';
import { TaskService } from 'src/core/services/task.service';
import { finalize, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PRIORITY_TYPE_NAME } from 'src/core/interfaces/priority.interface';
import { PriorityNamePipe } from 'src/app/core/pipes/priority-name.pipe';
import { StatusNamePipe } from 'src/app/core/pipes/status-name.pipe';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    PriorityNamePipe,
    StatusNamePipe
  ],
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrl: './tasks-table.component.scss',
})
export class TasksTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TaskItem>;

  dataSource = new TasksTableDataSource();
  displayedColumns = ['name', 'deadline', 'priority', 'status', 'performer'];
  isLoading = true;
  priorityName = PRIORITY_TYPE_NAME

  constructor(private taskService: TaskService) {}

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.taskService
      .getTasks()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res) => {
        this.dataSource.data = res;
        this.table.dataSource = this.dataSource;
      });
  }
}
