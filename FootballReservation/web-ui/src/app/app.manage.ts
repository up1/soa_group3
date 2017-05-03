import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private _stadiumService: StadiumService, private router: Router) { }

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

  editSubStadium(ex_id: number) {
    this.router.navigate(['/manage/edit'], {queryParams: { 'ex_id': ex_id }});
    console.log(ex_id);
  }

  deleteSubStadium(ex_id: number) {
    this._stadiumService.deleteSubStadium(ex_id)
      .subscribe(
      soda => this.soda = soda,
      error => this.errorMessage = <any>error
      );
    this.router.navigate(['/manage']);
  }

  toggleEditSubStadium() {

  }
}
