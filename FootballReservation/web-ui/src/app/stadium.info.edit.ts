import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Stadium } from 'app/data/stadium';
import { StadiumService } from 'app/data/stadium.service';
import { AppManage } from './app.manage';
import { routerTransition2 } from './router.animations';
import { getId } from './getStadiumId';

@Component({
  selector: 'stadium-info-edit-page',
  templateUrl: './stadium.info.edit.html',
  animations: [routerTransition2()],
  host: {'[@routerTransition]': ''}
})

export class StadiumInfoEdit implements OnInit {

  stadium: Stadium[];
  errorMessage: string;
  SubStadiumModal: boolean;
  ex_id: number;

  field_name: string;
  s_time: number;
  e_time: number;
  address: string;
  telno: string;
  s_price: number;
  e_price: number;
  email: string;
  website: string;
  detail: string;

  constructor(private _stadiumService: StadiumService) { }

  ngOnInit() {
    
    this._stadiumService.getStadium(getId())
      .subscribe(
      stadium => {
        this.stadium = stadium;
        this.field_name = stadium["field_name"];
        this.s_time = stadium["stime"];
        this.e_time = stadium["etime"];
        this.address = stadium["location"]
        this.telno = stadium["tel"]
        this.s_price = parseInt((stadium["price"]).split(" ")[0].replace(/\,/g,''))
        this.e_price = parseInt((stadium["price"]).split(" ")[2].replace(/\,/g,''))
        this.email = stadium["email"]
        this.website = stadium["website"]
        this.detail = stadium["detail"]
      },
      error => this.errorMessage = <any>error

      );
      
  }

/*
  editSubStadium() {

    this.size = this.size_w.toString() + "x" + this.size_h + " m";

    this._stadiumService.editSubStadium(this.ex_id, this.fieldex_name, this.rent, this.size, this.floor)
      .subscribe(
      soda => {this.soda = soda;
        this.router.navigate(['/manage']);
      },
      error => {this.errorMessage = <any>error;
        this.router.navigate(['/manage']);
      });
    // this.router.navigate(['/manage']);
  }
  */
}
