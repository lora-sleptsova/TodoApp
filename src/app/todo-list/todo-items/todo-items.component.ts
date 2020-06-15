import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoServicesService } from 'src/app/todo-services.service';
import { ITodo } from 'src/app/todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {

  @Input() todo: ITodo;

  @Output() TodoDelEmit = new EventEmitter();
  @Output() TodoComplEmit = new EventEmitter();
  
  constructor(private _todoServe:TodoServicesService){}

  removeTodoItem(todo:ITodo){
    this.TodoDelEmit.emit(todo);
  }

  toggleCompleteItem(todo:ITodo){
    this.TodoComplEmit.emit(todo);
  }

}