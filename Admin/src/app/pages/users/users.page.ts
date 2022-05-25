import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor(
    public _apiService: ApiService, private router: Router
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

  goBack() {
    this.router.navigate(['/home']);
  }

}
