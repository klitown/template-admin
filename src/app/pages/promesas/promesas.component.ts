import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    // Ejemplo de promesa sencilla, con el 'then' y el 'catch'
    /* const promesa = new Promise( (resolve, reject) => {
      if (true) {
        resolve('Resuelto correctamente');
      } else {
        reject('Error en la promesa.')
      }
    });
    promesa
    .then( (mensaje) => console.log (mensaje) )
    .catch( (error) => console.log (error) ); */

    this.getUsuarios().then( usuarios => console.log(usuarios) );
  }


  getUsuarios(){

    return new Promise( (resolve) => {
      fetch('https://reqres.in/api/users')
        .then( (respuesta) => respuesta.json() )
        .then( (body) => resolve ( body.data ) );
    })

  }

}
