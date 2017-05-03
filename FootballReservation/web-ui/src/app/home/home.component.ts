import { Component, OnInit } from '@angular/core'; 
import { ModalService } from 'ng2-modal-dialog/modal.module';
import { LoginModalComponent } from '../app.login-modal.componenet';
import { AppModule } from '../app.module';
declare var jssor_1_slider_init: any;

@Component({ 
  selector: 'app-home', 
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css'] 
}) 
export class HomeComponent implements OnInit { 

  // Instancing a new ModalService in the parent component constructor
  constructor(private modalService: ModalService) { }
 
// Click function to open the modal
  openLoginModal(userCreds): void {
  	// Service callback function to create the modal with an object passed as a parameter
    this.modalService.create(AppModule, LoginModalComponent, {userCreds});
  }
 
  ngOnInit() { 
      jssor_1_slider_init();
  } 
 
} 