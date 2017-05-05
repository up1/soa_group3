import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AlertService, UserService, AuthenticationService } from './_services/index';
import { User } from './data/userindex';

@Component({
  selector: 'user-page',
  templateUrl: './app.user.html'
})
export class AppUser {
  model: any = {};

  oldpassword = String;

  constructor(private router: Router,
        private userService: UserService,
        private authenticationService: AuthenticationService) { }


  editProfile(){
  console.log(this.model)
  this.userService.getById(JSON.parse(localStorage.getItem("currentUser")).user_id)
    .subscribe(
      user => {
        if(!(this.model.oldpassword || this.model.password)){
          this.model.password = user.password;
          this.userService.update(this.model,user.id).subscribe();
        }else if(this.model.oldpassword === user.password){
          this.userService.update(this.model,user.id).subscribe();
        }else{
          this.model.fname = "Wrong";
          this.model.lname = "Password";
        }
        location.reload();
      });
  }
  ngOnInit() {
    this.userService.getById(JSON.parse(localStorage.getItem("currentUser")).user_id)
    .subscribe(
      user => {
        this.model.fname = user.fname;
        this.model.lname = user.lname;
        this.model.email = user.email;
      });

    // this.userService.update(this.model,JSON.parse(localStorage.getItem("currentUser")).user_id).subscribe();



    // this.activatedRoute.queryParams.subscribe((params: Params) => {
    //   this.ex_id = params['ex_id'];
    // });

    // this._stadiumService.getSubStadiumData(this.ex_id)
    //   .subscribe(
    //   soda => {
    //     this.soda = soda;
    //     this.fieldex_name = this.soda[0].fieldex_name;
    //     this.rent = this.soda[0].rent;
    //     this.size_w = Number(((this.soda[0].size).split(" ")[0]).split("x")[0]);
    //     this.size_h = Number(((this.soda[0].size).split(" ")[0]).split("x")[1]);
    //     this.floor = this.soda[0].floor;
    //   },
    //   error => this.errorMessage = <any>error

    //   );
  }
}
