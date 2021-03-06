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
      .get('http://139.59.123.175:9001/listfield')
      .map((response: Response) => <Stadium[]>response.json());
  }

  getStadium(field_id: number): Observable<Stadium[]> {
    return this._http
      .get('http://139.59.123.175:9001/field?field_id=' + field_id.toString())
      .map((response: Response) => <Stadium[]>response.json());
  }

  getSubStadium(field_id: number): Observable<SubStadium[]> {
    return this._http
      .get('http://139.59.123.175:9001/field/' + field_id.toString())
      .map((response: Response) => <SubStadium[]>response.json());
  }

  getSubStadiumList(field_id: number): Observable<SubStadium[]> {
    return this._http
      .get('http://139.59.123.175:9003/field/' + field_id.toString())
      .map((response: Response) => <SubStadium[]>response.json());
  }

  getSubStadiumData(ex_id: number): Observable<SubStadium[]> {
    return this._http
      .get('http://139.59.123.175:9003/field_ex/' + ex_id.toString())
      .map((response: Response) => <SubStadium[]>response.json());
  }


  createSubStadium(field_id: number,fieldex_name: string, rent: number, size: string, floor: string) {
    return this._http
      .post('http://139.59.123.175:9003/field_ex/add', JSON.parse('{"field_id": '+field_id+',"fieldex_name": "' + fieldex_name + '","rent": ' + rent.toString() + ',"image": "img","size": "' + size + '","floor": "' + floor + '"}'))
      .map((response: Response) => response.json());
  }

  editSubStadium(ex_id: number, fieldex_name: string, rent: number, size: string, floor: string) {
    return this._http
      .put('http://139.59.123.175:9003/field_ex/' + ex_id.toString() + '/update', JSON.parse('{"fieldex_name": "' + fieldex_name + '","rent": ' + rent.toString() + ',"image": "img","size": "' + size + '","floor": "' + floor + '"}'))
      .map((response: Response) => response.json());
  }

  deleteSubStadium(ex_id: number) {
    return this._http
      .delete('http://139.59.123.175:9003/field_ex/' + ex_id.toString() + '/delete')
      .map((response: Response) => response.json());
  }

  getReservebyUserId(user_id: number) {
    return this._http
      .get('http://139.59.123.172:9004/reservation?user_id=' + user_id.toString())
      .map((response: Response) => <Reservation[]>response.json());
  }

  PostReserveStadium(user_id: number, field_id: number, ex_id: number, start_time: number, end_time: number, date: String) {
    //wait for edit data
     return this._http
      .post('http://139.59.123.172:9004/reserv', JSON.parse('{"reserv_user_id": '+user_id+',"reserv_field_id": "' + field_id + '","reserv_ex_id": ' + ex_id.toString() + ',"reserv_start_time": '+ start_time.toString() +',"reserv_end_time": ' + end_time.toString() + ',"reserv_date": "' + date + '"}'))
      .map((response: Response) => response.json());
  }

  // getStadiumByUser(username: String): Observable<Stadium[]> {
  // return this._http
  //   .get('http://localhost:9001/field/' + username)
  //   .map((response: Response) => <Stadium[]>response.json());
  // }

  // getSubStadiumByUser(username: String): Observable<Stadium> {
  //    return this._http.post('http://localhost:9001/fieldmanage', JSON.stringify({ username: username }))
  //           .map((response: Response) => response.json());
  // }
  getSubStadiumByUser(username: String): Observable<Stadium>{
     return this._http.post('http://139.59.123.175:9001/fieldmanage', JSON.parse('{"username":"'+ username +'"}'))
            .map((response: Response) => response.json());
  }
}