import { Component, OnInit } from '@angular/core';
import {AdminService} from 'app/_services/index';
import {User} from 'app/data/user'; 

import { SubStadium } from 'app/data/substadium';
import { StadiumService } from 'app/data/stadium.service';


@Component({
  selector: 'app-managermanagment',
  templateUrl: './managermanagment.component.html',
  styleUrls: ['./managermanagment.component.css']
})
export class ManagermanagmentComponent implements OnInit {

  users: User[];
  modalWork: boolean;
  soda: SubStadium[];
  constructor(private adminservice: AdminService, private _stadiumService: StadiumService) {
    this.modalWork = false;
  }

  getByRole(role: number): void {
    this.adminservice.getByRole(role).subscribe(
      users => {this.users = users; console.log('this.users=' + this.users[0].fname);
                    console.log('this.users.length=' + this.users.length);
                    console.log('this.users[0].firstName=' + this.users[1]);}
    )
  }

    deleteById(id: number): void{
    this.adminservice.delete(id).subscribe();
    location.reload();
  }



  ngOnInit() {
    this.getByRole(2);
  }

    toggleBooking(field_id: String) {
    if (this.modalWork === false) {
      this.modalWork = true;
      // this.getSubStadium(field_id)
    }
    else if (this.modalWork === true) {
      this.modalWork = false;
    }
  }

  //   getSubStadium(field_id: String) {
  //   this._stadiumService.getSubStadium(field_id)
  //     .subscribe(
  //     soda => this.soda = soda,
  //     );
  // }

}
