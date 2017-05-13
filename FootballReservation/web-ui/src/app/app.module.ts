import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploadModule } from 'angular2-image-upload';
import { ModalModule } from 'ng2-modal-dialog/modal.module';
import { LoginModalComponent } from './app.login-modal.componenet';

import { AppComponent } from './app.component';
import { AppRegister } from './app.register';
import { AppReserve } from './app.reserve';
import { AppStadium } from './app.stadium';
import { AppUser } from './app.user';
import { AppManage } from './app.manage';
//import { AuthGuard } from './_guards/index';
import { AlertComponent } from './_directives/index';
import { AlertService, AuthenticationService, UserService, AdminService} from './_services/index';
// import { AdminService } from './_services/index';
import { StadiumCreate } from './stadium.create';
import { StadiumEdit } from './stadium.edit';
import { StadiumInfoEdit } from './stadium.info.edit';
import { StadiumService } from 'app/data/stadium.service';
import { HomeComponent } from './home/home.component';
import { AppReserveList } from './app.reservelist';

import { DatePickerModule } from 'ng2-datepicker';
import { ManagermanagmentComponent } from './managermanagment/managermanagment.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';




const appRoutes: Routes = [
  { path: 'regis', component: AppRegister },
  { path: 'reserve', component: AppStadium },
  { path: 'reserve/:id', component: AppReserve },
  { path: 'reservelist', component: AppReserveList },
  { path: 'user/id', component: AppUser  },
  { path: 'manage', component: AppManage  },
  { path: 'manage/create', component: StadiumCreate },
  { path: 'manage/edit', component: StadiumEdit },
  { path: 'manage/infoedit', component: StadiumInfoEdit },
  { path: '', component: HomeComponent },
  { path: 'managermanagment', component: ManagermanagmentComponent},
  { path: 'usermanagement', component: UsermanagementComponent},
  { path: 'login', component: LoginModalComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    AppRegister,
    AppReserve,
    AppStadium,
    AppUser,
    AppManage,
    AlertComponent,
    StadiumCreate,
    StadiumEdit,
    HomeComponent,
    AppReserveList,
    ManagermanagmentComponent,
    UsermanagementComponent,
    LoginModalComponent,
    StadiumInfoEdit
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ImageUploadModule.forRoot(),
    DatePickerModule,
    ModalModule,
  ],
  providers: [
        //AuthGuard,
        StadiumService,
        AlertService,
        AuthenticationService,
        UserService,
        AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
// import { RouterModule, Routes } from '@angular/router';
// import { ImageUploadModule } from 'angular2-image-upload';
// import { ModalModule } from 'ng2-modal-dialog/modal.module';
// import { LoginModalComponent } from './app.login-modal.componenet';

// import { AppComponent } from './app.component';
// import { AppRegister } from './app.register';
// import { AppReserve } from './app.reserve';
// import { AppStadium } from './app.stadium';
// import { AppUser } from './app.user';
// import { AppManage } from './app.manage';
// //import { AuthGuard } from './_guards/index';
// import { AlertComponent } from './_directives/index';
// import { AlertService, AuthenticationService, UserService } from './_services/index';
// import { StadiumCreate } from './stadium.create';
// import { StadiumEdit } from './stadium.edit';
// import { StadiumService } from 'app/data/stadium.service';
// import { HomeComponent } from './home/home.component';
// import { AppReserveList } from './app.reservelist';

// import { DatePickerModule } from 'ng2-datepicker';

// const appRoutes: Routes = [
//   { path: 'regis', component: AppRegister },
//   { path: 'reserve', component: AppStadium },
//   { path: 'reserve/:id', component: AppReserve },
//   { path: 'reservelist', component: AppReserveList },
//   { path: 'user/id', component: AppUser  },
//   { path: 'manage', component: AppManage  },
//   { path: 'manage/create', component: StadiumCreate },
//   { path: 'manage/edit', component: StadiumEdit },
//   { path: '', component: HomeComponent }
// ];

// @NgModule({
//   declarations: [
//     AppComponent,
//     AppRegister,
//     AppReserve,
//     AppStadium,
//     AppUser,
//     AppManage,
//     AlertComponent,
//     StadiumCreate,
//     StadiumEdit,
//     HomeComponent,
//     AppReserveList,
//     LoginModalComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     HttpModule,
//     RouterModule.forRoot(appRoutes),
//     ImageUploadModule.forRoot(),
//     DatePickerModule,
//     ModalModule
//   ],
//   providers: [
//         //AuthGuard,
//         StadiumService,
//         AlertService,
//         AuthenticationService,
//         UserService
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
