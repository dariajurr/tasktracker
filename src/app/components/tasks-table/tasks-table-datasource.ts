import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { TaskItem } from 'src/core/interfaces/task.interface';
import { PriorityType } from 'src/core/interfaces/priority.interface';
import { StatusType } from 'src/core/interfaces/status.interface';



const EXAMPLE_DATA: TaskItem[] = [
  { id: 1, title: 'Hydrogen', description: '', deadline: new Date(), priority: PriorityType.LOW, status: StatusType.CREATE, performer: 0 },
];

export class TasksTableDataSource extends DataSource<TaskItem> {
  data: TaskItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  connect(): Observable<TaskItem[]> {
    if (this.paginator && this.sort) {
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  disconnect(): void {}

  private getPagedData(data: TaskItem[]): TaskItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }


  private getSortedData(data: TaskItem[]): TaskItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.title, b.title, isAsc);
        // case 'deadline': return compare(a.deadline, b.deadline, isAsc);
        case 'priority': return compare(a.priority, b.priority, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        case 'performer': return compare(a.performer, b.performer, isAsc);
        // case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
