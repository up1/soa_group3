import { Component } from '@angular/core';
import { ModalService } from 'ng2-modal-dialog/modal.module';
import { LoginModalComponent } from './app.login-modal.componenet';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  mode = 2;
  constructor(private modalService: ModalService) { }
  openLoginModal(userCreds): void {
  	// Service callback function to create the modal with an object passed as a parameter
    this.modalService.create(AppModule, LoginModalComponent, {userCreds});
  }
}
