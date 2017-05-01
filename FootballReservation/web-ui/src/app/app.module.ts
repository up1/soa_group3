import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploadModule } from 'angular2-image-upload';

import { AppComponent } from './app.component';
import { AppLogin } from './app.login';
import { AppRegister } from './app.register';
import { AppReserve } from './app.reserve';
import { AppStadium } from './app.stadium';
import { AppUser } from './app.user';
import { AppManage } from './app.manage';
//import { AuthGuard } from './_guards/index';
import { AlertComponent } from './_directives/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { StadiumCreate } from './stadium.create';
import { StadiumEdit } from './stadium.edit';
import { StadiumService } from 'app/data/stadium.service';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'auth', component: AppLogin },
  { path: 'auth/regis', component: AppRegister },
  { path: 'reserve', component: AppStadium },
  { path: 'reserve/id', component: AppReserve },
  { path: 'reserve/id/history', component: AppReserve },
  { path: 'user/id', component: AppUser  },
  { path: 'manage', component: AppManage  },
  { path: 'manage/create', component: StadiumCreate },
  { path: 'manage/edit', component: StadiumEdit },
  { path: 'home', component: HomeComponent }
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
    AlertComponent,
    StadiumCreate,
    StadiumEdit,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ImageUploadModule.forRoot()
  ],
  providers: [
        //AuthGuard,
        StadiumService,
        AlertService,
        AuthenticationService,
        UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
