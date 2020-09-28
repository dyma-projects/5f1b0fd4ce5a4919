import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public exo1 ="Bienvenue";
  public  buttonDisabled ="true";
  public inputType="date";
  constructor() { }

  ngOnInit(): void {
  }

  changeInputType():void{
    this.inputType="text";
  }

}
