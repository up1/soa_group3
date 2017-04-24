import { Component, OnInit } from '@angular/core';
import { Stadium } from 'app/data/stadium';
import { StadiumService } from 'app/data/stadium.service';

@Component({
  selector: 'stadium-page',
  template: `<ul *ngFor="let stadium of stadiums">
                <li>{{stadium}}</li>
              </ul>`
})

export class AppStadium implements OnInit {

  stadiums: Stadium[];
  errorMessage: string;

  constructor(private _stadiumService: StadiumService) { }

  ngOnInit() { this.getStadiums() }

  getStadiums() {
    this._stadiumService.getStadiums()
      .subscribe(
        stadiums => this.stadiums = stadiums,
        error => this.errorMessage = <any>error
      );
  }
}
