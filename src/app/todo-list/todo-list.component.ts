import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos = [
    {
      // "id": 1,
      "name": "todo1",
      "complete": false
    },
    {
      // "id": 2,
      "name": "todo2",
      "complete": true
    },
    {
      // "id": 3,
      "name": "todo3",
      "complete": false
    }

  ]  

  toggleComplete(id){
    this.todos[id].complete = !this.todos[id].complete;
  }

  addTodo(todoName) {
    // let lastID = this.todos.length;

    let newTodo = {
      // "id": lastID+1,
      "name": todoName,
      "complete": false
    }
    this.todos.push(newTodo);
  }

  removeTodo(id){
    this.todos.splice(id,1);
  }

}
