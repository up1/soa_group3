import { Component, OnInit } from '@angular/core';
import {UserService} from 'app/_services/index';
import {User} from 'app/data/user'; 

@Component({
  selector: 'app-managermanagment',
  templateUrl: './managermanagment.component.html',
  styleUrls: ['./managermanagment.component.css']
})
export class ManagermanagmentComponent implements OnInit {

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
    this.getByRole(2);
  }

}
