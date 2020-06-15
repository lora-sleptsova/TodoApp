import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoServicesService } from 'src/app/todo-services.service';
import { ITodo } from '../todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() addTodosEmit = new EventEmitter();

  addTodoItem(todoInput){
    this.addTodosEmit.emit(todoInput.value);
    todoInput.value = "";
  }

}