import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoServicesService } from 'src/app/todo-services.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  // @Output() addTodo = new EventEmitter();

  TodoText;

  constructor(private _todoServe:TodoServicesService){}

  addTodo(TodoText){
    this._todoServe.addTodo(TodoText);
  }

}
