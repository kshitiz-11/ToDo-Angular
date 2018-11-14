import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-create-new-list',
  templateUrl: './create-new-list.component.html',
  styleUrls: ['./create-new-list.component.scss']
})
export class CreateNewListComponent implements OnInit, AfterViewChecked {
  jData: boolean = false;
  public inputTitle = '';
  public id = 0;
  users$: Object = null;
  addToDo(): void {
    let list = {
      id: 0,
      taskId: 0,
      title: '',
      author: '',
      date: '',
      taskList: []
    };
    this.id++;
    list.id = this.id;
    list.taskId = 0;
    list.date = 'Wednesday';
    list.title = this.inputTitle;
    list.author = 'Not Really';
    this.dataService.addListItems(list);

   // alert(list.title);

  }


  dTransfer() {
    for (let x of this.users$) {
      let list = {
        id: 0,
        taskId: 0,
        title: '',
        author: '',
        date: '',
        taskList: []
      };

      let pId = 0;
      for (let y of x.ToDoText) {
        let taskItems = {
          id: 0,
          name: ''
        }

        taskItems.id = ++pId;
        taskItems.name = y;

        list.taskList.push(taskItems);

      }
      list.author = x.Author;
      list.title = x.Title;
      list.date = x.date;
      list.taskId = pId;
      list.id = ++this.id;
      this.dataService.addListItems(list);
    }
  }


  constructor(public dataService: DataService) { }
  ngAfterViewChecked() {

    if (this.users$ !== null && this.jData == false) {
      this.dTransfer();
      this.jData = true;

    }
  }
  ngOnInit() {
    this.dataService.getUsers().subscribe(
      data => this.users$ = data
    );


  }

  // addToDo(title): void {
  //   console.log(title);
  //   this.dataService.addToDoList(title);

  // }
}