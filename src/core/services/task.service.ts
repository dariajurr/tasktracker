import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../api.const';
import { TaskItem } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<TaskItem[]>(BASE_URL);
  }

  createTask(task: TaskItem) {
    return this.http.post<any[]>(`${BASE_URL}/tasks`, task);
  }

  updateTask(task: Partial<TaskItem>) {
    console.log('task: ', task);
    return this.http.patch<TaskItem[]>(BASE_URL, task);
  }
}