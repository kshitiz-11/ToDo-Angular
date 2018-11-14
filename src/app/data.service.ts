import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class DataService {
  public addList = new Subject<any>();
  public newToDoList = new Subject<any>();
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://api.myjson.com/bins/13lpkc');
  }

  addToDoList(title) {
    this.newToDoList.next(title);
  }

  addListItems(data) {
    this.addList.next(data);

  }
}
