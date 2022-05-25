import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id;
  usuario: Object;
  isDataLoaded: boolean = false;

  constructor(private route: ActivatedRoute, public _apiService: ApiService) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.readUserInfo();
  }

  readUserInfo(){
    this._apiService.detailOneUser(this.id).subscribe((response) => {
      this.usuario = response;
      this.isDataLoaded = true;
      console.log(this.usuario);
    })
  }

}
