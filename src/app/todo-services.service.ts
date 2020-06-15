import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from './todo';
import { ApiService} from './api.service';

@Injectable({
  "providedIn":"root"
})
export class TodoServicesService {
  
  constructor(private api:ApiService){}
   
  fetchTodos():Observable<ITodo[]> {
    return this.api.fetchTodos();
  }

  removeTodo(id:number):Observable<any> {
    return this.api.removeTodo(id);
  }

  addTodo(newTodo:ITodo):Observable<ITodo> {
    return this.api.addTodo(newTodo);
  }

  updateTodo(todo:ITodo):Observable<ITodo> {
    return this.api.updateTodo(todo);
  }
    
}