import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../task';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get(this.apiUrl + '/tasks');
  }

  insertData(data?: Task) {
    return this.httpClient.post(this.apiUrl + '/addTask', data);
  }

  deleteData(id?: number) {
    return this.httpClient.delete(this.apiUrl + '/deleteTask/' + id);
  }

  getTaskById(id?: number) {
    return this.httpClient.get(this.apiUrl + '/task/' + id);
  }

  updateData(id?: number, data?: Task) {
    return this.httpClient.put(
      this.apiUrl + '/updateTask/' + id,
      data
    );
  }
}
