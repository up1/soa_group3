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
  sonar: SubStadium[];
  errorMessage: string;
  modalWork: boolean;

  field_id: number;

  date: DateModel;
  options: DatePickerOptions;

  constructor(private _stadiumService: StadiumService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.modalWork = false;
    this.options = new DatePickerOptions();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.field_id = Number(params['id']);
    });
    this.getSubStadiumList(this.field_id);
    this.getStadiumDetail(this.field_id);
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

  editSubStadium(ex_id: number) {
    this.router.navigate(['/manage/edit'], { queryParams: { substadium: ex_id } });
  }

  deleteSubStadium(ex_id: number) {
    this._stadiumService.deleteSubStadium(ex_id)
      .subscribe(
      soda => this.soda = soda,
      error => this.errorMessage = <any>error
      );
    this.router.navigate(['/manage']);
  }

  toggleBooking(field_id: number) {
    if (this.modalWork === false) {
      this.modalWork = true;
    }
    else if (this.modalWork === true) {
      this.modalWork = false;
    }
  }
}
