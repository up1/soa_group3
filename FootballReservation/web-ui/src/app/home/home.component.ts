import { Component, OnInit } from '@angular/core'; 
declare var jssor_1_slider_init: any;

@Component({ 
  selector: 'app-home', 
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css'] 
}) 
export class HomeComponent implements OnInit { 

  constructor() { } 
 
  ngOnInit() { 
      jssor_1_slider_init();
  } 
 
} 