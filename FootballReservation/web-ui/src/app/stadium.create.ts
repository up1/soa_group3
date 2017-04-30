import { Component, OnInit } from '@angular/core';
import { Stadium } from 'app/data/stadium';
import { SubStadium } from 'app/data/substadium';
import { StadiumService } from 'app/data/stadium.service';

@Component({
  selector: 'stadium-create-page',
  templateUrl: './stadium.create.html'
})

export class StadiumCreate {

  soda: SubStadium[];
  errorMessage: string;
  SubStadiumModal: boolean;
  editSubStadium: boolean;

  constructor(private _stadiumService: StadiumService) { }

  createSubStadium() {
    this._stadiumService.createSubStadium()
      .subscribe(
      soda => this.soda = soda,
      error => this.errorMessage = <any>error
      );
  }

}
