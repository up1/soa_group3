import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AppLogin } from './app.login';
import { AppRegister } from './app.register';
import { AppReserve } from './app.reserve';
import { AppStadium } from './app.stadium';
import { AppUser } from './app.user';
import { AppManage } from './app.manage';
//import { AlertComponent } from './_directives/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { StadiumService } from 'app/data/stadium.service';

const appRoutes: Routes = [
  { path: 'auth', component: AppLogin },
  { path: 'auth/regis', component: AppRegister },
  { path: 'reserve', component: AppStadium },
  { path: 'reserve/id', component: AppReserve },
  { path: 'reserve/id/history', component: AppReserve },
  { path: 'user/id', component: AppUser  },
  { path: 'manage', component: AppManage  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppLogin,
    AppRegister,
    AppReserve,
    AppStadium,
    AppUser,
    AppManage,
    //AlertService,
    //AlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StadiumService,
        AlertService,
        AuthenticationService,
        UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
