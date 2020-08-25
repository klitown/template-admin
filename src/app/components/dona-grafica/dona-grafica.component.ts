import { Component, OnInit, Input } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona-grafica',
  templateUrl: './dona-grafica.component.html',
  styles: [
  ]
})
export class DonaGraficaComponent implements OnInit {

  @Input() title: string = 'Sin titulo'

  @Input('labels') doughnutChartLabels: Label[] = ['Label 1', 'Label 2', 'Label 3'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];

  public colors: Color[] = [
    {
      backgroundColor: [ '#845ec2', '#2c73d2', '#008f7a' ]
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
