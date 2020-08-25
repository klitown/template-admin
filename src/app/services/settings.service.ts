import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private colorTheme = document.querySelector('#theme');
  private defaultTheme = './assets/css/colors/default-dark.css';

  constructor() { 

        // Carga de LocalStorage para los temas del usuario
        const url =  localStorage.getItem('theme') || this.defaultTheme;
        this.colorTheme.setAttribute('href', url);
  }

  changeTheme( theme: string ){

    const urlTheme = `./assets/css/colors/${theme}.css`;
    this.colorTheme.setAttribute( 'href', urlTheme );
    localStorage.setItem('theme', urlTheme);

    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    const links = document.querySelectorAll('.selector');
    links.forEach( elem => {

      // quitar clase 'working' del elemento html
      elem.classList.remove('working');
      // Referencia al atributo 'data theme' del elemento html
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.colorTheme.getAttribute('href');
      // Si la URL del boton coincide con la URL del tema actual, agrega la clase 'working'
      if ( btnThemeUrl === currentTheme ) {
        elem.classList.add('working');
      }
    })

  }
}
