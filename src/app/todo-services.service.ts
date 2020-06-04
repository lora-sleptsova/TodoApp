import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ITodo } from './todo-list/todo-list.component';

@Injectable({
  "providedIn":"root"
})
export class TodoServicesService {
  
  todos: ITodo[] = [];

  todosURL = "http://my-json-server.typicode.com/lora-sleptsova/JsonFakeServer/todos";

  constructor(private http:HttpClient){ 
    this.fetchTodos().subscribe(
      data=> {
        data.forEach(element => {
          this.todos.push(element);
        });
      }
    );
  }

  fetchTodos():Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.todosURL)        
  }

  getTodos(){
    return this.todos;
  }

  removeTodo(id){
    this.todos.splice(id,1);
  }

  addTodo(todoName) {
    let lastID = this.todos.length;

    let newTodo = {
      "userId": lastID+1,
      "id": lastID+1,
      "title": todoName,
      "completed": false
    }
    this.todos.push(newTodo);
  }

  toggleComplete(id){
    this.todos[id].completed = !this.todos[id].completed;
  }
    
}
