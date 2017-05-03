import { Component, OnInit } from '@angular/core';
import { Page } from './page.model';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

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
