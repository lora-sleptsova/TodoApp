import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ITodo } from './todo';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  "providedIn":"root"
})
export class TodoServicesService {
  
  todos: ITodo[] = [];

  todosURL = "http://my-json-server.typicode.com/lora-sleptsova/JsonFakeServer/todos";

  constructor(private http:HttpClient){}

  handleError(error){
    let errMsg = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errMsg = `Client-side error: ${error.error.message}`;
    } else {
      // server-side error
      errMsg = `Server-side error: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    // console.log(`errorMessage: ${errMsg}`);
    window.alert(errMsg);
    return throwError(errMsg);
  
  }

  fetchTodos():Observable<ITodo[]> {
    // return this.http.get<ITodo[]>(this.todosURL);
    return this.http.get<ITodo[]>(this.todosURL).pipe(
      catchError(err=>this.handleError(err))
    );        
  }

  getTodos(){
    return this.todos;
  }

  removeTodo(id){
    this.todos.splice(id,1);
  }

  addTodo(todoName) {
    let lastID = 8;

    let newTodo = {
      "userId": lastID+1,
      "id": lastID+1,
      "title": todoName,
      "completed": false
    }
    // this.todos.push(newTodo);
    
    return this.http.post<ITodo[]>(this.todosURL, newTodo).pipe(
      catchError(err=>this.handleError(err))
    ); 
 }

  toggleComplete(id){
    this.todos[id].completed = !this.todos[id].completed;
  }
    
}