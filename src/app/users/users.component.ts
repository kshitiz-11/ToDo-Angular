import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  list: Array<any> = [];
  users$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    );
    this.data.addList.subscribe(
      data => this.list.push(data)
    );
  }

  addTask(e) {
   // alert('inside add task');
    let task = {

      id: 0,
      name: ''


    };

    
    for (let x of this.list) {
      //alert(e.target.parentElement.id);
      if (x.id == e.target.parentElement.id) {
       // alert();
        let input = e.target.parentElement.getElementsByClassName('taskInput');
        let input1 = input[0].value;
        if(input1=='')
        {
          alert('Please enter some value');
          return;
        }
        task.id = ++x.taskId;
        task.name = input1;
        x.taskList.push(task);
        e.target.parentElement.children[1].value='';
      }

    }
  }

  closeTask(e)
  { 
    for(let x of this.list)
    {
      if(x.id==e.target.parentElement.parentElement.parentElement.parentElement.id)
      {

        for(let z of x.taskList)
        {
          if(z.id==e.target.parentElement.id)
          {
            e.target.parentElement.style.display='none';
          }
        }
      }
    }

  }
  closeMain(e)
  {
    for(let x of this.list)
    {
      if(x.id==e.target.parentElement.parentElement.id)
      {
        e.target.parentElement.parentElement.style.display='none';
        
      }
    }

  }

  // evt.target.classList.toggle("strike");

  strikeTask(e)
  {
    //alert('hi');
    for(let x of this.list)
    {
     // alert(e.target.parentElement.parentElement.id);
    
        if(x.id==e.target.parentElement.parentElement.parentElement.id)
        {
  
          for(let z of x.taskList)
        {
          if(z.id==e.target.id)
          {
            e.target.classList.toggle('strike'); 
          }
        }
        }
    }

  }

}
