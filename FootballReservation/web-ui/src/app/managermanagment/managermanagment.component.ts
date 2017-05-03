import { Component, OnInit } from '@angular/core';
import { Page } from './page.model';

@Component({
  selector: 'app-managermanagment',
  templateUrl: './managermanagment.component.html',
  styleUrls: ['./managermanagment.component.css']
})
export class ManagermanagmentComponent implements OnInit {

  pages: Page[];
  constructor() {
        this.pages = [
      {
        "fname": "nammeeee",
        "email": "test page#1",
        "address": "TEST PAGE CONTENT#1",
        "picture": "test page#1",
        "username": "test page#1",
        "password": "test page#1",
        "role": 1,
      },
      {
        "fname": "nammeeee",
        "email": "test page#1",
        "address": "TEST PAGE CONTENT#1",
        "picture": "test page#1",
        "username": "test page#1",
        "password": "test page#1",
        "role": 2,
      },
      {
        "fname": "nammeeee",
        "email": "test page#1",
        "address": "TEST PAGE CONTENT#1",
        "picture": "test page#1",
        "username": "test page#1",
        "password": "test page#1",
        "role": 1,
      },
      {
        "fname": "nammeeee",
        "email": "test page#1",
        "address": "TEST PAGE CONTENT#1",
        "picture": "test page#1",
        "username": "test page#1",
        "password": "test page#1",
        "role": 1,
      },
      {
        "fname": "nammeeee",
        "email": "test page#1",
        "address": "TEST PAGE CONTENT#1",
        "picture": "test page#1",
        "username": "test page#1",
        "password": "test page#1",
        "role": 1,
      },
      {
        "fname": "nammeeee",
        "email": "test page#1",
        "address": "TEST PAGE CONTENT#1",
        "picture": "test page#1",
        "username": "test page#1",
        "password": "test page#1",
        "role": 1,
      },
      {
        "fname": "nammeeee",
        "email": "test page#1",
        "address": "TEST PAGE CONTENT#1",
        "picture": "test page#1",
        "username": "test page#1",
        "password": "test page#1",
        "role": 1,
      }

    ]
   }


  ngOnInit() {
  }

}
