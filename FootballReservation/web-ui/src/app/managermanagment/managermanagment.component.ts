import { Component, OnInit } from '@angular/core';
import {AdminService} from 'app/_services/index';
import {User} from 'app/data/user'; 

import { SubStadium } from 'app/data/substadium';
import { StadiumService } from 'app/data/stadium.service';

import { Stadium } from 'app/data/stadium';


@Component({
  selector: 'app-managermanagment',
  templateUrl: './managermanagment.component.html',
  styleUrls: ['./managermanagment.component.css']
})
export class ManagermanagmentComponent implements OnInit {

  users: User[];
  modalWork: boolean;
  soda: SubStadium[];
  stadium: Stadium;
  model: any = {};
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
  getSubStadium(field_id: number){
    this._stadiumService.getSubStadium(field_id).subscribe(
      soda => {this.soda = soda;}
    )
  }

  // getStadiumByUser(username: String){
  //   this._stadiumService.getSubStadiumByUser(username).subscribe(
  //     stadium => {this.stadium.price = stadium.price; console.log('stadium.email=' + this.stadium.price);
  //                   console.log('stadium.tel=' + this.stadium.tel);
  //                   console.log('stadium.name eeieieiei=' + this.stadium.field_name);}
  //   )
  // }

  getStadiumByUser(username: String){
    this._stadiumService.getSubStadiumByUser(username).subscribe(
      stadium => {this.model = stadium; this.getSubStadium(this.model.field_id);
                    console.log('stadium.tel=' + this.stadium.tel);
                    console.log('stadium.name eeieieiei=' + this.stadium.field_name);}
    )
    this.getSubStadium(this.model.field_id)
  }



  ngOnInit() {
    this.getByRole(2);
  }

    toggleBooking(username: String) {
    if (this.modalWork === false) {
      this.modalWork = true;
      this.getStadiumByUser(username)
      // this.getSubStadium(this.model.field_id)
      // console.log('last = '+ this.stadium.price)
      // console.log('stadium.name eeieieiei=' + this.stadium.field_name);
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
