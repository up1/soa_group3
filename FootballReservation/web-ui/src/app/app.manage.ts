import { Component, OnInit } from '@angular/core';
import { Stadium } from 'app/data/stadium';
import { SubStadium } from 'app/data/substadium';
import { StadiumService } from 'app/data/stadium.service';

@Component({
  selector: 'manage-page',
  templateUrl: './app.manage.html'
})

export class AppManage implements OnInit {

  soda: SubStadium[];
  errorMessage: string;
  modalWork: boolean;

  constructor(private _stadiumService: StadiumService) { }

  ngOnInit() {
    this.getSubStadiumList(1)
    this.modalWork = false;
  }
  getSubStadiumList(field_id: number) {
    this._stadiumService.getSubStadium(field_id)
      .subscribe(
      soda => this.soda = soda,
      error => this.errorMessage = <any>error
      );
  }
}
