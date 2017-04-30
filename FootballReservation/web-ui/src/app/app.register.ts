import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
import { AlertService, UserService } from './_services/index';

@Component({
  moduleId: module.id,
  selector: 'register-page',
  templateUrl: './app.register.html'
})
export class AppRegister { 
  model: any = {};
    loading = false;
 
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }
 
    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    console.log(this.model)
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/auth']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
