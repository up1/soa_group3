import { Component } from '@angular/core';

@Component({
  selector: 'reserve2-page',
  templateUrl: './app.reserve2.html'
})
export class AppReserve2 {
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
