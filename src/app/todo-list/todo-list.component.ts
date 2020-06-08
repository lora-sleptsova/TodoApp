import { Component, OnInit } from '@angular/core';
import { TodoServicesService } from '../todo-services.service';
import { ITodo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
   todos: ITodo[] = [];
  // todos = <ITodo[]>[];

  constructor(private _TodoServices:TodoServicesService){
    // this.todos = this._TodoServices.getTodos();
  }

  ngOnInit(){
    this._TodoServices.fetchTodos().subscribe(
      data=> {
        this.todos = data;
      }
    );
  }
  
 }
