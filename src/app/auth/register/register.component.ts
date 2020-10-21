import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from "src/app/services/usuario.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css'
  ]
})
export class RegisterComponent implements OnInit {

  public formPosteado = false;


  public registerForm = this.fb.group({
    nombre: [ '', [Validators.required, Validators.minLength(3)] ],
    email: [ '', [Validators.required, Validators.email] ],
    password: [ '', [Validators.required, Validators.minLength(5)] ],
    password2: [ '', [Validators.required, Validators.minLength(5)] ],
    terminos: [ false, Validators.required],
  }, {
    validators: this.passwordsIguales('password', 'password2')
  });


  constructor(private fb: FormBuilder, 
              private servicioDeUsuario: UsuarioService,
              private router: Router) { }

  ngOnInit(): void {
  }


  crearUsuario(){
    this.formPosteado = true;
    
    if ( this.registerForm.invalid ) {
      return;
    }

    // Posteo del usuario a la BD
    this.servicioDeUsuario.postUsuario( this.registerForm.value )
                    .subscribe( resp => {
                      
                      this.router.navigateByUrl

                    }, (err) => {
                      Swal.fire('Error', err.error.msg, 'error');
                    } );
    
  }

  campoInvalido( campo: string ): boolean {
    
    if ( this.registerForm.get(campo).invalid && this.formPosteado ) {
      return true;
    } else {
      return false;
    }
  }

  invalidPassword(){
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;

    if ( (pass1 !== pass2) && this.formPosteado ) {
      return true;
    } else {
      return false;
    }
  }

  passwordsIguales( pass1: string, pass2: string ){
      
    return ( formGroup: FormGroup ) => {

      const pass1Control = formGroup.get(pass1);
      const pass2Control = formGroup.get(pass2);

      if ( pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors(null)
      } else {
        pass2Control.setErrors({ noEsIgual: true })
      }

    }

  }


  aceptaTerminos() {
    return !this.registerForm.get('terminos').value && this.formPosteado;
  }

}
