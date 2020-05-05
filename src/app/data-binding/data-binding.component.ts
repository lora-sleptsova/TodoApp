import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: `
    <h2 [style.border]="'5px solid red'" id="h2">Var interp</h2>
    <input type="text" [value]="userName" id="i1"
      [class.red]="setRedClass"
      [disabled]="disableEdit">

    <div>
      <button (click)="toggleRedClass()">Toggle Red Class</button>
      <button (click)="chColorClass()">Test</button>
    </div>  
      `,
  styles: [`
    .red{
      background: #F99;
    }
    .green{
      background: #9F9;
    }
  `]
})
export class DataBindingComponent {
  userName = "Ada";
  disableEdit = false;
  setColorClass = "red";

  setRedClass = true; 

  chColorClass(){
    this.setColorClass = "green";
  }

  toggleRedClass(){
    this.setRedClass = !this.setRedClass
  }
  
}
