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

const appRoutes: Routes = [
  { path: 'auth', component: AppLogin },
  { path: 'auth/regis', component: AppRegister },
  { path: 'reserve', component: AppStadium },
  { path: 'reserve/id', component: AppReserve },
  { path: 'reserve/id/history', component: AppReserve },
  { path: 'user/id', component: AppUser  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppLogin,
    AppRegister,
    AppReserve,
    AppStadium,
    AppUser
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
