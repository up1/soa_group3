import { Component } from '@angular/core';
import { ModalService } from 'ng2-modal-dialog/modal.module';
import { LoginModalComponent } from './app.login-modal.componenet';
import { AppModule } from './app.module';
import { routerTransition } from './router.animations';
import { Stadium } from 'app/data/stadium';
import { StadiumService } from 'app/data/stadium.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class AppComponent {
  mode: number;
  username: String;
  stadium: Stadium;

  constructor(private modalService: ModalService, private _stadiumService: StadiumService) { }
  openLoginModal(userCreds): void {
    // Service callback function to create the modal with an object passed as a parameter
    this.modalService.create(AppModule, LoginModalComponent, { userCreds });
  }
  ngOnInit() {
    if (localStorage.getItem("currentUser")) {

      this.username = JSON.parse(localStorage.getItem("currentUser")).email;

      if (JSON.parse(localStorage.getItem("currentUser")).role === "admin") {
        this.mode = 3;
      } else if (JSON.parse(localStorage.getItem("currentUser")).role === "manager") {
        this.mode = 2;
        this._stadiumService.getSubStadiumByUser(JSON.parse(localStorage.getItem("currentUser")).email)
          .subscribe(rs => {
            this.stadium = rs;
          });
      } else {
        this.mode = 1;
      }
    } else {
      this.mode = 0;
    }
  }
  
  logout() {
    localStorage.removeItem("currentUser");
    location.replace("/index.html");
  }
}
