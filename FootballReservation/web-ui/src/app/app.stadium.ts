import { Component, OnInit } from '@angular/core';
import { Stadium } from 'app/data/stadium';
import { StadiumService } from 'app/data/stadium.service';

@Component({
  selector: 'stadium-page',
  templateUrl: './app.stadium.html'
})

export class AppStadium implements OnInit {

  stadiums: Stadium[];
  sodium: Stadium[];
  errorMessage: string;
  modalWork: boolean;



  constructor(private _stadiumService: StadiumService) { }

  ngOnInit() {
    this.getStadiums()
    this.modalWork = false;
  }

  getStadiums() {
    this._stadiumService.getStadiums()
      .subscribe(
      stadiums => this.stadiums = stadiums,
      error => this.errorMessage = <any>error
      );
  }

  getStadium(field_id: number) {
    this._stadiumService.getStadium(field_id)
      .subscribe(
      sodium => this.sodium = sodium,
      error => this.errorMessage = <any>error
      );
  }

  toggleBooking(field_id: number) {
    if (this.modalWork === false) {
      this.modalWork = true;
      this.getStadium(field_id)
    }
    else if (this.modalWork === true) {
      this.modalWork = false;
    }
  }
}
