import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../api.const';
import { TaskItem } from '../interfaces/task.interface';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tasks$ = new BehaviorSubject<TaskItem[]>([]);

  get tasks$() {
    return this._tasks$.asObservable().pipe(filter((res) => !!res));
  }

  constructor(private http: HttpClient) {}

  getTasks(): Observable<TaskItem[]> {
    return this.http
      .get<TaskItem[]>(BASE_URL)
      .pipe(tap((res) => this._tasks$.next(res)));
  }

  getTaskById(id: number): Observable<TaskItem> {
    return this.http.get<TaskItem>(BASE_URL + id);
  }

  createTask(task: TaskItem) {
    return this.http.post<TaskItem[]>(BASE_URL, task);
  }

  updateTask(task: Partial<TaskItem>) {
    return this.http.patch<TaskItem[]>(BASE_URL, task);
  }
}
