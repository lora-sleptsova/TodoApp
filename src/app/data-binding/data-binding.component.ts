import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: `
  <h1 [ngClass]="multipleClasses" [style.border]="borderSpec">alabala</h1>
    <input [class.red]="setRed" type="text" [value]="userName" id="i1" [disabled]="disableName" [attr.value]="opa" [attr.data-logged]="userLogged">
    <button (click)="toggleRedClass()">Toggle red class</button>
  `,
  styles: [`
  .red{
    background: #F99;
  }
  .big{
    font-size: 4em;
  }
  `]
})
export class DataBindingComponent {

  userName = "alabala";
  disableName = true;
  opa = "opala";
  userLogged = true;
  setRed = false;
  className = "red";
  multipleClasses = {"big": true, "red": true};
  borderSpec: string = "5px solid green";

  toggleRedClass(): void {
    this.setRed = ! this.setRed;
    
  }
}
