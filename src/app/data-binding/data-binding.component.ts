import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: `
    <h1 [style.border]="'5px solid red'"
        [class.red]="setRedClass"
        id='h1'
        >Var interp</h1>
    
    <input type="text" id="i1"
        [class.red]="setRedClass"
        [value]="userName"
        [disabled]="disableName"
        [attr.data-logged]="userLoggedIn"
        >

    <div>
      <button (click)="toggleRedClass()">Toggle red class</button>
      <button (click)="changeColorClass()">Change color class</button>
    </div>    

  `,
  styles: [`
    .red{
      background: #F99;
    }
    .green{
      background: #9F9;
    }
    .border{
      border: 5px solid red;
    }
    .big{
      font-size: 4em;
    }
  `]
})
export class DataBindingComponent {
  userName = "Ada";
  userLoggedIn = "yes";
  disableName = false;
  setColorClass = "red";
  setRedClass = true;

  multipleClasses = {
    "red": false,
    "big": true
  };

  changeColorClass(){
    this.setColorClass = "green";
  };

  toggleRedClass(){
    this.setRedClass = !this.setRedClass;
  }
}
