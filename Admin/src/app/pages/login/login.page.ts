import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public _apiService: ApiService,
    private router: Router
    ) { }

    private nombre: string;
    private pwd: string;

  ngOnInit() {
  }



  validateForm(){
    console.log(this.nombre, this.pwd)

    var data = new FormData();
    data.append("nombre", this.nombre);
    data.append("pwd", this.pwd);

    this._apiService.getUserAdmin(data).subscribe((response) => { //Esta función comprobaría si el usuario es correcto
      console.log(response);
    });

    /* Aqui crearía una condición que dependiendo de la respuesta 
    del apiService entraría o no a la lista de usuarios */
    this.router.navigate(['/users']);

  }

}
