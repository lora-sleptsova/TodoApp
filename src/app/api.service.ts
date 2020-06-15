import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { ITodo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  todos: ITodo[] = [];
  todosURL = "http://localhost:3000/todos";

  constructor(private http:HttpClient) { }

  handleError(error){
    let errMsg = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errMsg = `Client-side error: ${error.error.message}`;
    } else {
      // server-side error
      errMsg = `Server-side error: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errMsg);
    return throwError(errMsg);
  
  }

  fetchTodos():Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.todosURL).pipe(
      catchError(err=>this.handleError(err))
    );        
  }

  addTodo(newTodo:ITodo):Observable<ITodo> {
    return this.http.post<ITodo>(this.todosURL, newTodo).pipe(
      catchError(err=>this.handleError(err))
    ); 
  }

 removeTodo(id:number):Observable<any> {
  return this.http.delete<any>(`${this.todosURL}/${id}`).pipe(
    catchError(err=>this.handleError(err))
  );
 }

 updateTodo(todo:ITodo):Observable<ITodo>{
  return this.http.put<ITodo>(`${this.todosURL}/${todo.id}`,todo).pipe(
    catchError(err=>this.handleError(err))
  );  
 }
}
