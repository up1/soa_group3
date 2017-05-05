import { Component, OnInit } from '@angular/core';
import {AdminService} from 'app/_services/index';
import {User} from 'app/data/user'; 

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {


  users: User[];
  constructor(private adminservice: AdminService) {}
   getByRole(role: number): void {
    this.adminservice.getByRole(role).subscribe(
      users => {this.users = users; console.log('this.users=' + this.users[0].fname);
                    console.log('this.users.length=' + this.users.length);
                    console.log('this.users[0].firstName=' + this.users[1]);}
    )
  }

  deleteById(id: number): void{
    this.adminservice.delete(id).subscribe();
    location.reload();
  }

  changerole(id: number): void{
    this.adminservice.ChangeRole(id).subscribe();
    location.reload();
  }

  ngOnInit() {
    this.getByRole(1);
  }

}
