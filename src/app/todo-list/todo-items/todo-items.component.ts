import { Component, Input } from '@angular/core';
import { TodoServicesService } from 'src/app/todo-services.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {

  @Input() TodoParentName;
  @Input() TodoIndex;
  
  index: number;

  constructor(private _todoServe:TodoServicesService){}

  removeTodo(index){
    this._todoServe.removeTodo(index);
  }

  // @Output() TodoDelEmit = new EventEmitter();

}
