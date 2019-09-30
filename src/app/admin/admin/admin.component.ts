import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../user/services/user-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private userDataService: UserDataService) {
    console.log(this.userDataService);
  }

  ngOnInit() {
  }

}
