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
        this.userService.create(this.model).subscribe();
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/']);
            // .subscribe(
            //     data => {
            //         console.log("Data Success");
            //         // set success message and pass true paramater to persist the message after redirecting to the login page
            //         this.alertService.success('Registration successful', true);
            //         this.router.navigate(['/auth']);
            //     },
            //     error => {
            //         console.log("data fail");
            //         this.alertService.error(error);
            //         this.loading = false;
            //     });
    }
}
