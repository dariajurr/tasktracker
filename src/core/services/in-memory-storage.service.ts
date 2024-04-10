import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { TaskItem } from '../interfaces/task.interface';

@Injectable()
export class InMemoryStorageService implements InMemoryDbService {
  createDb() {
    const data = {
      tasks: []
    };
    return data;
  }

  genId(tasks: TaskItem[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
  }

  get(reqInfo: RequestInfo): Observable<Response> {
    if (reqInfo.collectionName === 'tasks') {
      const tasks = localStorage.getItem('tasks');
      if (tasks) {
        const items = JSON.parse(tasks);
        return reqInfo.utils.createResponse$(() => {
          return {
            body: items,
            status: 200
          }
        });
      }
    }
    return reqInfo.utils.createResponse$(() => {
      return {
        status: 400,
        body: 'Bad request',
      };
    });
  }

  post(reqInfo: RequestInfo): Observable<Response> {
    if (reqInfo.collectionName === 'tasks') {
      const body = reqInfo.utils.getJsonBody(reqInfo.req);
      let tasks = localStorage.getItem('tasks');
      let items = tasks ? JSON.parse(tasks) : [];
      items.push({...body, id: this.genId(items)});
      localStorage.setItem('tasks', JSON.stringify(items));
      return reqInfo.utils.createResponse$(() => {
        return {
          body,
          status: 200,
        };
      });
    }
    return reqInfo.utils.createResponse$(() => {
      return {
        status: 400,
        body: 'Bad request',
      };
    });
  }
  
  patch(reqInfo: RequestInfo): Observable<Response> {
    if (reqInfo.collectionName === 'tasks') {
      const item = reqInfo.utils.getJsonBody(reqInfo.req);
      const collection = reqInfo.collection as any[];
      const index = collection.findIndex((existingItem: any) => existingItem.id === item.id);
      if (index >= 0) {
        const updatedItem = { ...collection[index], ...item };
        collection[index] = updatedItem;
        return reqInfo.utils.createResponse$(() => {
          return {
            updatedItem,
            status: 200,
          };
        });
      }
    }
    return reqInfo.utils.createResponse$(() => {
      return {
        status: 400,
        body: 'Bad request',
      };
    });
  }
}