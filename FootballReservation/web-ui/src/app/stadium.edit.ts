import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Stadium } from 'app/data/stadium';
import { SubStadium } from 'app/data/substadium';
import { StadiumService } from 'app/data/stadium.service';
import { AppManage } from './app.manage';

@Component({
  selector: 'stadium-edit-page',
  templateUrl: './stadium.edit.html'
})

export class StadiumEdit implements OnInit {

  soda: SubStadium[];
  errorMessage: string;
  SubStadiumModal: boolean;
  ex_id: number;

  fieldex_name: string;
  rent: number;
  size_w: number;
  size_h: number;
  size: string;
  floor: string;


  constructor(private _stadiumService: StadiumService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.ex_id = params['ex_id'];
    });

    this._stadiumService.getSubStadiumData(this.ex_id)
      .subscribe(
      soda => {
        this.soda = soda;
        this.fieldex_name = this.soda[0].fieldex_name;
        this.rent = this.soda[0].rent;
        this.size_w = Number(((this.soda[0].size).split(" ")[0]).split("x")[0]);
        this.size_h = Number(((this.soda[0].size).split(" ")[0]).split("x")[1]);
        this.floor = this.soda[0].floor;
      },
      error => this.errorMessage = <any>error

      );
  }

  editSubStadium() {

    this.size = this.size_w.toString() + "x" + this.size_h + " m";

    this._stadiumService.editSubStadium(this.ex_id, this.fieldex_name, this.rent, this.size, this.floor)
      .subscribe(
      soda => this.soda = soda,
      error => this.errorMessage = <any>error

      );
    this.router.navigate(['/manage']);
  }

}
