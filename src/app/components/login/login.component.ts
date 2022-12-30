import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: String = 'Angular';
  contraseña: String = '123456';
  mensaje: String = "Credenciales incorrectas, intentelo de nuevo";

  mostrar(usuarios:String, contraseñas:String){
    if(usuarios === this.usuario && contraseñas === this.contraseña){
      alert('Valido')
    }

  }


}
