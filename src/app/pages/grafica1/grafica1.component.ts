import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {


  public label1: string[] = ['Queso', 'Pan', 'Carne'];

  public data1 = [
    [ 350, 450, 550 ],
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
