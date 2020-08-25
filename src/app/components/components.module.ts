import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ChartsModule } from 'ng2-charts';


import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaGraficaComponent } from './dona-grafica/dona-grafica.component';

@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaGraficaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    IncrementadorComponent,
    DonaGraficaComponent
  ]
})
export class ComponentsModule { }
