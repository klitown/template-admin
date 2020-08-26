import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';

import { filter, map } from "rxjs/operators";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy {

  public tituloPagina: string;
  public tituloSubs$: Subscription;

  constructor( private router: Router ) {

      this.tituloSubs$ = this.getDataRoutes()
          .subscribe( ({ titulo }) => {
            this.tituloPagina = titulo;
            document.title = `Administración - ${titulo}`;
      });

  }

  
  ngOnDestroy(){
    this.tituloSubs$.unsubscribe();
  }


  getDataRoutes(){
          return this.router.events
            .pipe( 
                filter( event => event instanceof ActivationEnd ),
                filter( (event: ActivationEnd) => event.snapshot.firstChild === null  ),
                map ( (event: ActivationEnd) => event.snapshot.data  ),
            );

  }

}
