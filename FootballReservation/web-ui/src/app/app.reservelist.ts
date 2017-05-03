import { Component, OnInit } from '@angular/core';
import { Reservation } from 'app/data/reservation';
import { StadiumService } from 'app/data/stadium.service';


@Component({
  selector: 'reservelist-page',
  templateUrl: './app.reservelist.html'
})
export class AppReserveList implements OnInit {
  mode: number;
  name: string;
  reservelist: Reservation[];
  errorMessage: string;

  constructor(private _stadiumService: StadiumService) {
    this.mode = 0;
  }

  ngOnInit() {
    this.getReserveByName("TestUser")

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

  getReserveByName(name: string) {
    this._stadiumService.getReservebyName(name)
      .subscribe(
      reservelist => this.reservelist = reservelist,
      error => this.errorMessage = <any>error
      );
    console.log(this._stadiumService.getReservebyName(name)
      .subscribe(
      reservelist => this.reservelist = reservelist,
      error => this.errorMessage = <any>error
      ))
  }
 }
