import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ButtonComponent } from './add-todo/button/button.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemsComponent } from './todo-list/todo-items/todo-items.component';
import { TotalItemsComponent } from './total-items/total-items.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { CrossLineDirective } from './directives/cross-line.directive';
import { FancyQuotePipe } from './pipes/fancy-quote.pipe';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoHeaderComponent,
    AddTodoComponent,
    ButtonComponent,
    TodoListComponent,
    TodoItemsComponent,
    TotalItemsComponent,
    TestCompComponent,
    CrossLineDirective,
    FancyQuotePipe,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
