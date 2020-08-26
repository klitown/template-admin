import { Component, OnDestroy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { retry, take, map, filter } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

  public subIntervalo = this.retornoIntervalo().subscribe(console.log);

  constructor() { 

    /* this.retornoObservable()
    .pipe(
      retry(1)
    )
    .subscribe( 
      valor => console.log('Contador: ', valor),
      error => console.error('Error en el observable ', error),
      () => console.info('El observable dejo de emitir')
    ); */

  }

  ngOnDestroy(){
    this.subIntervalo.unsubscribe();
  }


  retornoIntervalo(): Observable<number>{

    return interval(100)
                        .pipe(
                          // take(10),
                          map( data => data + 1 ),
                          filter( data => ( data % 2 === 0 ) ? true : false ),
                        );
  }


  retornoObservable(): Observable<number> {
    let i = -1;

    const obs$ = new Observable<number>( observer => {

      const intervalo = setInterval( () => {

        i++;
        observer.next(i);
        
        if ( i === 10 ) {
          clearInterval(intervalo);
          observer.complete();
        } 
        if ( i === 5 ) {
          observer.error('El contador llego a 5');
        }
      }, 1000)
    });
    return obs$;
  }

}
