import { Component, OnInit } from '@angular/core';
import { Stadium } from 'app/data/stadium';
import { SubStadium } from 'app/data/substadium';
import { StadiumService } from 'app/data/stadium.service';

@Component({
  moduleId: module.id,
  selector: 'manage-page',
  templateUrl: './app.manage.html'
})

export class AppManage implements OnInit {

  soda: SubStadium[];
  errorMessage: string;
  SubStadiumModal: boolean;
  editSubStadium: boolean;

  constructor(private _stadiumService: StadiumService) { }

  ngOnInit() {
    this.getSubStadiumList(1);
    this.SubStadiumModal = false;
  }

  ngAfterContentInit() {
    this.getSubStadiumList(1);
  }

  getSubStadiumList(field_id: number) {
    this._stadiumService.getSubStadium(field_id)
      .subscribe(
      soda => this.soda = soda,
      error => this.errorMessage = <any>error
      );
  }

  toggleEditSubStadium() {
    
  }
}
