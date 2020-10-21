import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

declare const gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  public formPosteado = false;
  public auth2: any;


  public loginForm = this.fb.group({
    email: [ localStorage.getItem('email') || '', [Validators.required, Validators.email] ],
    password: [ '', [Validators.required, Validators.minLength(5)] ],
    remember: [ false ]
  });

  constructor(  private router: Router, 
                private fb: FormBuilder, 
                private usuarioService: UsuarioService,
                private ngZone: NgZone ) { }

  ngOnInit(): void {
    this.renderButton();
  }

 

  login(){
    this.usuarioService.login( this.loginForm.value )
      .subscribe( (resp) => {

          // Check de 'Recuerdame' del login
        if ( this.loginForm.get('remember').value ){
          localStorage.setItem('email', this.loginForm.get('email').value);
        } else {
          localStorage.removeItem('email');
        }

        // Redireccion al dashboard
        this.router.navigateByUrl('/');

      }, (err) => {
        Swal.fire('Error', err.error.msg, 'error');
      });
  }

  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
    });
    this.startApp();
  }

  startApp() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '223891740933-6a0oa7v66pdiga3p7jmqe6r7spqj7uk1.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });
      this.attachSignin(document.getElementById('my-signin2'));
    });
  };

  attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
        (googleUser) => {
          const google_token = googleUser.getAuthResponse().id_token;
          this.usuarioService.loginGoogle( google_token )
            .subscribe( resp => {
              this.ngZone.run( () => {
                this.router.navigateByUrl('/')
              })
            });
        }, (error) => {
          alert(JSON.stringify(error, undefined, 2));
        });
  }



}
 