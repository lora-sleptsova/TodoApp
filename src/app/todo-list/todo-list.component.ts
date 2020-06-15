import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input("todosData") todos;
  @Output() removeTodosEmit = new EventEmitter();
  @Output() toggleTodosEmit = new EventEmitter();


  removeTodoList(index:number){
    this.removeTodosEmit.emit(index);
  }
  
  toggleTodoList(index:number){
    this.toggleTodosEmit.emit(index);
  }
  
 }
