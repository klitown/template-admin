import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu : any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url: '/' },
        { title: 'Progress Bar', url: 'progress' },
        { title: 'Graficas', url: 'grafica1' },
        { title: 'Promesas', url: 'promesas' },
        { title: 'RxJs', url: 'rxjs' }
      ]
    },
  ]


  constructor() { }
}
