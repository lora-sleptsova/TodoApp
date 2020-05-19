import { Component, OnInit } from '@angular/core';
import { TodoServicesService } from '../todo-services.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos = [];

  constructor(private _TodoServices:TodoServicesService){
    this.todos = this._TodoServices.getTodos();
  }

  toggleComplete(id){
    this.todos[id].complete = !this.todos[id].complete;
  }

}
