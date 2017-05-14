import { Component, OnInit } from '@angular/core';
import { Reservation } from 'app/data/reservation';
import { Stadium } from 'app/data/stadium';
import { SubStadium } from 'app/data/substadium';
import { StadiumService } from 'app/data/stadium.service';
import { routerTransition } from './router.animations';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


@Component({
  selector: 'reservelist-page',
  templateUrl: './app.reservelist.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AppReserveList implements OnInit {
  mode: number;
  name: string;
  reservelist: Reservation[];
  stadium: Stadium[];
  substadium: SubStadium[]
  errorMessage: string;

  constructor(private _stadiumService: StadiumService) { }

  ngOnInit() {
    this.getReserveByUserId(JSON.parse(localStorage.getItem("currentUser")).user_id)
  }

  reserveMode(num: number) {
    this.mode = num;
    if (this.mode === 0) {
      this.name = 'การจองปัจจุบัน';
    }
    else if (this.mode === 1) {
      this.name = 'ประวัติการจอง';
    }
  }

  getReserveByUserId(user_id: number) {
    this._stadiumService.getReservebyUserId(user_id)
      .subscribe(
      reservelist => {
        this.reservelist = reservelist

        for (let i in reservelist) {
          this.getStadiumName(Number(i), this.reservelist[i].reserv_field_id)
          this.getSubStadiumName(Number(i), this.reservelist[i].reserv_ex_id)
        }
      },
      error => this.errorMessage = <any>error
      );
  }

  getStadiumName(num: number, field_id: number) {
    this._stadiumService.getStadium(field_id)
      .subscribe(
      stadium => {
        this.stadium = stadium;
        this.reservelist[num].reserv_field_id = stadium['field_name']

      }
      )
  }

  getSubStadiumName(num: number, ex_id: number) {
    this._stadiumService.getSubStadiumData(ex_id)
      .subscribe(
      substadium => {
        this.substadium = substadium;
        this.reservelist[num].reserv_ex_id = substadium[0].fieldex_name

      }
      )
  }

}
