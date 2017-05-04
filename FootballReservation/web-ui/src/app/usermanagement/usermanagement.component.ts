import { Component, OnInit } from '@angular/core';
import {UserService} from 'app/_services/index';
import {User} from 'app/data/user'; 

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {


  users: User[];
  constructor(private userservice: UserService) {}
   getByRole(role: number): void {
    this.userservice.getByRole(role).subscribe(
      users => {this.users = users; console.log('this.users=' + this.users[0].fname);
                    console.log('this.users.length=' + this.users.length);
                    console.log('this.users[0].firstName=' + this.users[1]);}
    )
  }

  ngOnInit() {
    this.getByRole(1);
  }

}
