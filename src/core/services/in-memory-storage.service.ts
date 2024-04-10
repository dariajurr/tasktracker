import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryStorageService implements InMemoryDbService {
  createDb() {
    const data = {
      tasks: []
    };
    return data;
  }

  get(reqInfo: RequestInfo) {
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
    return undefined;
  }

  put(reqInfo: RequestInfo) {
    if (reqInfo.collectionName === 'items') {
      const item = reqInfo.utils.getJsonBody(reqInfo.req);
      const collection = reqInfo.collection as any[];
      const index = collection.findIndex((existingItem: any) => existingItem.id === item.id);
      if (index >= 0) {
        collection[index] = item;
        const options: ResponseOptions = {
          status: 200,
          body: item  // возвращаем обновленный элемент в теле ответа
        };
        const response = new Response(options);
        return reqInfo.utils.createResponse$(() => response);
      }
    }
    return undefined;
  }
  
  patch(reqInfo: RequestInfo) {
    if (reqInfo.collectionName === 'items') {
      const item = reqInfo.utils.getJsonBody(reqInfo.req);
      const collection = reqInfo.collection as any[];
      const index = collection.findIndex((existingItem: any) => existingItem.id === item.id);
      if (index >= 0) {
        const updatedItem = { ...collection[index], ...item };
        collection[index] = updatedItem;
        const options: ResponseOptions = {
          status: 200,
          body: updatedItem  // возвращаем обновленный элемент в теле ответа
        };
        const response = new Response(options);
        return reqInfo.utils.createResponse$(() => response);
      }
    }
    return undefined;
  }
}