import { Component } from '@angular/core';
import { Modal } from 'ng2-modal-dialog/modal.module';
import {Router} from '@angular/router'
 
@Component({
  selector: 'app-login-modal',
  templateUrl: './app.login-modal.componenet.html',
})
// the Modal import allows the usage of the @Modal alias that adds the Modal functions.
@Modal()
export class LoginModalComponent {
 
  loginStatus: boolean = true;
  closeModal: Function;
  
  // Will fetch the userCreds passed from the callback.
  userCreds;
 
  constructor(private router: Router) { 
  }
 
  onCancel(): void {
    this.closeModal();
  }
  onRegister(): void{
    this.closeModal();
    this.router.navigate(['/regis']);
  }
 
  onSubmit(formCreds): void {
    event.preventDefault();
 
    if ((formCreds.username === this.userCreds.username) && (formCreds.password === this.userCreds.password)) {
      this.loginStatus = true;
      this.closeModal();
    } else {
      this.loginStatus = false;
    }
  }
}