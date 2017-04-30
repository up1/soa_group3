import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable } from 'rxjs/Observable';
import { Stadium } from './stadium';
import { SubStadium } from './substadium';
import 'rxjs/add/operator/map';

@Injectable()
export class StadiumService {

  constructor(private _http: Http) { }

  getStadiums(): Observable<Stadium[]> {
    return this._http
        .get('http://localhost:9001/listfield')
        .map((response: Response) => <Stadium[]> response.json());
  }

  getStadium(field_id: number): Observable<Stadium[]> {
    return this._http
        .get('http://localhost:9001/field?field_id='+field_id.toString())
        .map((response: Response) => <Stadium[]> response.json());
  }

  getSubStadium(field_id: number): Observable<SubStadium[]> {
    return this._http
        .get('http://localhost:9001/field/'+field_id.toString())
        .map((response: Response) => <SubStadium[]> response.json());
  }

  getSubStadiumList(field_id: number): Observable<SubStadium[]> {
    return this._http
        .get('http://localhost:9003/field/'+field_id.toString())
        .map((response: Response) => <SubStadium[]> response.json());
  }

  createSubStadium() {
    return this._http
    .post('http://localhost:9003/field_ex/add', JSON.parse('{"field_id": 1,"fieldex_name": "TEST4","rent": 800,"image": "img","size": "555x555 m","floor": "Natural grass"}'))
    .map((response: Response) => response.json());
  }

}