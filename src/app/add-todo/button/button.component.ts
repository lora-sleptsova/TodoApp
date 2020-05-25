import { Component } from '@angular/core';
import { TodoServicesService } from 'src/app/todo-services.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  todoName;

  constructor(private _todoServe:TodoServicesService){}

  addTodo(todoName){
    this._todoServe.addTodo(todoName);
  }

}
