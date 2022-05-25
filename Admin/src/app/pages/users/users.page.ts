import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor(
    public _apiService: ApiService
    ) { }

    usuarios: Object;

  ngOnInit() {
    console.log("EN LOGIN");
    this.readUsers();
  }

  readUsers(){
    this._apiService.readUsers().subscribe((response) => {
      //console.log(response);
      this.usuarios = response;
      console.log(this.usuarios);
  });

  }

}
