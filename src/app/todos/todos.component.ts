import { Component, OnInit } from '@angular/core';
import { ITodo } from '../todo';
import { TodoServicesService } from '../todo-services.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: ITodo[] = [];

  constructor(private _TodoServices:TodoServicesService){}

  ngOnInit(){
    this._TodoServices.fetchTodos().subscribe(
      data=> {this.todos = data;}
    );
  }

  addTodos(todoInputTitle){
    const newTodo:ITodo = {
      title: todoInputTitle,
      completed: false,
      userId: 1
    }
    this._TodoServices.addTodo(newTodo).subscribe(res=>this.todos.push(res));
  }

  removeTodos(todo:ITodo){
    let index = this.todos.findIndex(element => element.id == todo.id);
    this._TodoServices.removeTodo(todo.id).subscribe();
    this.todos.splice(index, 1);
  }
  
  toggleTodos(todo:ITodo){
    let index = this.todos.findIndex(element => element.id == todo.id);
    this.todos[index].completed = !this.todos[index].completed;
    this._TodoServices.updateTodo(this.todos[index]).subscribe();
  }

}
