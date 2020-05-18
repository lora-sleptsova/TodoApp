import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {

  @Input() TodoParentName;
  @Input() TodoIndex;

  @Output() TodoDelEmit = new EventEmitter();

}
