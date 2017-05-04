import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Stadium } from './stadium';
import { SubStadium } from './substadium';
import { Reservation } from './reservation';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StadiumService {

  constructor(private _http: Http) { }

  getStadiums(): Observable<Stadium[]> {
    return this._http
      .get('http://localhost:9001/listfield')
      .map((response: Response) => <Stadium[]>response.json());
  }

  getStadium(field_id: number): Observable<Stadium[]> {
    return this._http
      .get('http://localhost:9001/field?field_id=' + field_id.toString())
      .map((response: Response) => <Stadium[]>response.json());
  }

  getSubStadium(field_id: number): Observable<SubStadium[]> {
    return this._http
      .get('http://localhost:9001/field/' + field_id.toString())
      .map((response: Response) => <SubStadium[]>response.json());
  }

  getSubStadiumList(field_id: number): Observable<SubStadium[]> {
    return this._http
      .get('http://localhost:9003/field/' + field_id.toString())
      .map((response: Response) => <SubStadium[]>response.json());
  }

  getSubStadiumData(ex_id: number): Observable<SubStadium[]> {
    return this._http
      .get('http://localhost:9003/field_ex/' + ex_id.toString())
      .map((response: Response) => <SubStadium[]>response.json());
  }


  createSubStadium(fieldex_name: string, rent: number, size: string, floor: string) {
    return this._http
      .post('http://localhost:9003/field_ex/add', JSON.parse('{"field_id": 1,"fieldex_name": "' + fieldex_name + '","rent": ' + rent.toString() + ',"image": "img","size": "' + size + '","floor": "' + floor + '"}'))
      .map((response: Response) => response.json());
  }

  editSubStadium(ex_id: number, fieldex_name: string, rent: number, size: string, floor: string) {
    return this._http
      .put('http://localhost:9003/field_ex/' + ex_id.toString() + '/update', JSON.parse('{"field_id": 1,"fieldex_name": "' + fieldex_name + '","rent": ' + rent.toString() + ',"image": "img","size": "' + size + '","floor": "' + floor + '"}'))
      .map((response: Response) => response.json());
  }

  deleteSubStadium(ex_id: number) {
    return this._http
      .delete('http://localhost:9003/field_ex/' + ex_id.toString() + '/delete')
      .map((response: Response) => response.json());
  }

  getReservebyName(name: string) {
    return this._http
      .get('http://localhost:9004/reservation?user=' + name)
      .map((response: Response) => <Reservation[]>response.json());
  }
}