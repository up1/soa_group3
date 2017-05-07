import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Stadium } from 'app/data/stadium';
import { SubStadium } from 'app/data/substadium';
import { StadiumService } from 'app/data/stadium.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  moduleId: module.id,
  selector: 'reserve-page',
  templateUrl: './app.reserve.html'
})

export class AppReserve implements OnInit {

  soda: SubStadium[];
  sodium: Stadium[];
  errorMessage: string;
  modalWork: boolean;

  field_id: number;

  date: DateModel;
  options: DatePickerOptions;
  nowday: Date;

  //For Booking
  booking_field_id: number;
  booking_ex_id: number;
  time = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
  hour = 0;
  rent = 0;

  constructor(private _stadiumService: StadiumService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.modalWork = false;
    this.options = new DatePickerOptions();

    this.options.initialDate = new Date(
      Date.now()
    )

    this.nowday = new Date(Date.now())
    this.options.minDate = this.nowday
    this.options.maxDate = new Date(this.options.minDate.getTime() + (7 * 24 * 60 * 60 * 1000))
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.field_id = Number(params['id']);
    });
    this.getSubStadiumList(this.field_id);
    this.getStadiumDetail(this.field_id);
  }

  ngDoCheck() {
    
    this.hour = 0;

    for (let count of this.time) {
      if (count) {
        this.hour += 1;
      }
    }
  }

  ngAfterContentInit() {
    this.getSubStadiumList(this.field_id);
    this.getStadiumDetail(this.field_id);
  }

  getStadiumDetail(field_id: number) {
    this._stadiumService.getStadium(field_id)
      .subscribe(
      sodium => this.sodium = sodium,
      error => this.errorMessage = <any>error
      );
  }

  getSubStadiumList(field_id: number) {
    this._stadiumService.getSubStadium(field_id)
      .subscribe(
      soda => this.soda = soda,
      error => this.errorMessage = <any>error
      );
  }

  toggleBooking(field_id: number, ex_id: number, rent: number) {
    if (this.modalWork === false) {
      this.modalWork = true;
      this.booking_field_id = field_id
      this.booking_ex_id = ex_id
      this.rent = rent
    }
    else if (this.modalWork === true) {
      this.modalWork = false;
      this.booking_field_id = null
      this.booking_ex_id = null
      this.rent = 0
    }
  }


  confirmBooking() {
    console.log("field_id:" + this.booking_field_id)
    console.log("ex_id:" + this.booking_ex_id)
    console.log(this.date.formatted)

    console.log(this.time)
  }
}
