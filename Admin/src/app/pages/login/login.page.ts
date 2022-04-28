import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public _apiService: ApiService
    ) { }

  ngOnInit() {
    console.log("EN LOGIN");
    this.readAdmins();
  }


  //función que hará una petición POST para comprobar que el usuario
  //con el que se intenta logear es uno de los admins (cambiar nombre de función)
  readAdmins(){
    this._apiService.readAdmins().subscribe((response) => {
      console.log(response);
});

  }

}
