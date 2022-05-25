import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { toastController } from '@ionic/core';
import { ApiService } from '../api.service';
import { ForgotPasswordPage } from '../forgot-password/forgot-password.page';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(
    public _apiService: ApiService,
    public router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  email;
  password;

  login(){
    let data = {
      email: this.email,
      password: this.password
    }
    console.log(data.email, data.password);

    this._apiService.login(data).subscribe(async (response) => {
      console.log(response);
      console.log(response["status"]);
      if(response["status"]=="ok"){
        this.router.navigate(['/portal']);
      }else{
        this.showToast(response["message"]);
      }
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: msg
    });

    toast.present();
  }

}

