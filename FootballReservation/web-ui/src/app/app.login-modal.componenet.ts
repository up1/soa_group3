import { Component } from '@angular/core';
import { Modal } from 'ng2-modal-dialog/modal.module';
import {Router} from '@angular/router'
 
import { AlertService, UserService, AuthenticationService } from './_services/index';
import { User } from './data/userindex';

@Component({
  selector: 'app-login-modal',
  templateUrl: './app.login-modal.componenet.html',
})
// the Modal import allows the usage of the @Modal alias that adds the Modal functions.
@Modal()
export class LoginModalComponent {
  model: any = {};
  loginStatus: boolean = true;
  closeModal: Function;
  
  // Will fetch the userCreds passed from the callback.
  userCreds;
 
  constructor(private router: Router,
        private userService: UserService,
        private authenticationService: AuthenticationService) { }
 
  onCancel(): void {
    this.closeModal();
  }
  onRegister(): void{
    this.closeModal();
    this.router.navigate(['/regis']);
  }
  login(){
    localStorage.removeItem("currentUser");  
    this.userService.login(this.model).subscribe( rs=>{
      if(localStorage.getItem("currentUser")){
        this.closeModal();
        location.reload();
      }else{

      }
    });
  }
 
  // onSubmit(formCreds): void {
  //   event.preventDefault();
 
  //   if ((formCreds.username === this.userCreds.username) && (formCreds.password === this.userCreds.password)) {
  //     this.loginStatus = true;
  //     this.closeModal();
  //   } else {
  //     this.loginStatus = false;
  //   }
  // }
}