import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Stadium } from 'app/data/stadium';
import { SubStadium } from 'app/data/substadium';
import { StadiumService } from 'app/data/stadium.service';
import { AppManage } from './app.manage';

@Component({
  selector: 'stadium-create-page',
  templateUrl: './stadium.create.html'
})

export class StadiumCreate {

  soda: SubStadium[];
  errorMessage: string;
  SubStadiumModal: boolean;
  editSubStadium: boolean;

  fieldex_name:string;
  rent: number;
  size_w: number;
  size_h: number;
  size: string;
  floor: string;
  field_id:number;


  constructor(private _stadiumService: StadiumService, private router: Router) { }

  createSubStadium() {
    this._stadiumService.getSubStadiumByUser(JSON.parse(localStorage.getItem("currentUser")).email)
      .subscribe(rs => {
        this.size = this.size_w.toString()+"x"+this.size_h+" m";

        this._stadiumService.createSubStadium(rs.field_id,this.fieldex_name, this.rent, this.size, this.floor)
          .subscribe(
          soda => {this.soda = soda;
            this.router.navigate(['/manage']);
            // location.reload();
          },
          error => {this.errorMessage = <any>error;
            this.router.navigate(['/manage']);
            // location.reload();
          });
    }); 
  }

}
