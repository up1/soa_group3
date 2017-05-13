import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
import { AlertService, UserService } from './_services/index';
import { routerTransition } from './router.animations';

@Component({
  moduleId: module.id,
  selector: 'register-page',
  templateUrl: './app.register.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
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
                res => {
                    console.log("Data Success");
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/']);
                 },
                 error => {
                     console.log("data fail");
                     this.alertService.error('Registration failed');
                     this.loading = false;
                 });
        // this.alertService.success('Registration successful', true);
        this.router.navigate(['/']);
    }
}
