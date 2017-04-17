import { Component } from '@angular/core';

@Component({
  selector: 'reserve-page',
  templateUrl: './app.reserve.html'
})
export class AppReserve {
  mode: number;
  name: string;
  
  
  constructor() {
    this.mode = 0;
  }

  reserveMode(num: number) {
    this.mode = num;
    if (this.mode === 0) {
      this.name = 'การจองปัจจุบัน';
    }
    else if (this.mode === 1) {
      this.name = 'ประวัติการจอง';
    }
  }
 }
