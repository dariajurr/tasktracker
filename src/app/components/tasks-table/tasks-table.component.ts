import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TaskFilter, TaskItem, TaskTableFilter } from 'src/core/interfaces/task.interface';
import { TaskService } from 'src/core/services/task.service';
import { finalize, tap } from 'rxjs';
import { CommonModule, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { GetDisplayColumnNamePipe } from 'src/core/pipes/get-display-column-name.pipe';
import { GetDisplayNamePipe } from 'src/core/pipes/get-display-name.pipe';
import { GetFilterDisplayNamePipe } from 'src/core/pipes/get-filter-display-name.pipe';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSortModule,
    GetDisplayNamePipe,
    GetDisplayColumnNamePipe,
    GetFilterDisplayNamePipe,
    MatProgressSpinnerModule,
    MatDatepickerModule
  ],
  providers: [DatePipe, provideNativeDateAdapter(),
  ],
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrl: './tasks-table.component.scss',
})
export class TasksTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  
  displayedColumns: string[] = [
    'title',
    'deadline',
    'priority',
    'status',
    'performer',
  ];

  isLoading: boolean = true;
  tableData: TaskItem[] = [];
  taskTableFilters: TaskTableFilter[] = [];
  dataSourceFilters: MatTableDataSource<TaskItem> = new MatTableDataSource(this.tableData);

  private _status: string[] = [];
  private _performer: string[] = [];
  private _defaultValue: string = 'All';
  private _filterDictionary: Map<string, string> = new Map<string, string>();
  private _dataSource: MatTableDataSource<TaskItem> = new MatTableDataSource(this.tableData);
  

  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this._detTableData();
  }

  ngAfterViewInit(): void {
    this._dataSource.sort = this.sort;
  }


  applyTasksFilter(ob: MatSelectChange | MatDatepickerInputEvent<Date>, tasksfilter?: TaskTableFilter) {
    if (tasksfilter) {
      this._filterDictionary.set(tasksfilter.name, ob.value);
    } else {
      this._filterDictionary.set('deadline', ob.value.toISOString());
    }
    this.dataSourceFilters.filter = JSON.stringify(
      Array.from(this._filterDictionary.entries())
    );
  }

  private _getUniqueValue(array: string[]): string[] {
    return Array.from(new Set(array));
  }

  private _getFilterValue(array: TaskItem[], nameOfFilter: string): string[] {
    return [
      'All',
      ...this._getUniqueValue(
        array.map((taskItem) => taskItem[nameOfFilter as keyof TaskFilter])
      ),
    ];
  }

  private _setFiltersValue(): void {
    this.taskTableFilters.push({
      name: 'status',
      options: this._status,
      defaultValue: this._defaultValue,
    });

    this.taskTableFilters.push({
      name: 'performer',
      options: this._performer,
      defaultValue: this._defaultValue,
    });
  }

  private _setFilters(): void {
    this._setFiltersValue();
    this.dataSourceFilters.filterPredicate = function (record, filter) {
      const map = new Map(JSON.parse(filter));
      let isMatch = false;
      for (let [key, value] of map) {
        isMatch = value == 'All' || record[key as keyof TaskItem] == value;
        if (!isMatch) return false;
      }
      return isMatch;
    };
  }

  private _detTableData(): void {
    this._taskService
    .getTasks()
    .pipe(
      tap((res) => {
        this._status = this._getFilterValue(res, 'status');
        this._performer = this._getFilterValue(res, 'performer');
      }),
      finalize(() => (this.isLoading = false))
    )
    .subscribe((res) => {
      this.tableData = res;
      this._dataSource.data = res;
      this.dataSourceFilters = this._dataSource;
      this._setFilters();
    });
  }
}
