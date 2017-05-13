import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stadium } from 'app/data/stadium';
import { SubStadium } from 'app/data/substadium';
import { StadiumService } from 'app/data/stadium.service';
import { routerTransition } from './router.animations';

@Component({
  moduleId: module.id,
  selector: 'manage-page',
  templateUrl: './app.manage.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})

export class AppManage implements OnInit {

  soda: SubStadium[];
  stadium: Stadium;
  errorMessage: string;
  SubStadiumModal: boolean;

  constructor(private _stadiumService: StadiumService, private router: Router) { }

  ngOnInit() {
    this._stadiumService.getSubStadiumByUser(JSON.parse(localStorage.getItem("currentUser")).email)
      .subscribe(rs => {
      this.getSubStadiumList(rs.field_id); this.stadium = rs;
    });
    // this.getSubStadiumList(1);
    this.SubStadiumModal = false;
  }

  ngAfterContentInit() { 
    this._stadiumService.getSubStadiumByUser(JSON.parse(localStorage.getItem("currentUser")).email)
      .subscribe(rs => {
      this.getSubStadiumList(rs.field_id);
    });
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

  deleteSubStadium(ex_id: number,name: String) {
    if(confirm("ลบสนาม "+name+" - Are you sure?")){
      this._stadiumService.deleteSubStadium(ex_id)
        .subscribe(
        soda => this.soda = soda,
        error => this.errorMessage = <any>error
        );
      // this.router.navigate(['/manage']);
      location.reload();
    }
  }

  toggleEditSubStadium() {

  }
}
