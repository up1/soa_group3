import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable } from 'rxjs/Observable';
import { Stadium } from './stadium';
import 'rxjs/add/operator/map';

@Injectable()
export class StadiumService {

  constructor(private _http: Http) { }

  getStadiums(): Observable<Stadium[]> {
    return this._http
        .get('http://localhost:9001/listfield')
        .map((response: Response) => <Stadium[]> response.json());
  }
}