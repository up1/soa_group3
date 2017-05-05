import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { User } from '../data/userindex';

import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class AdminService {
    constructor(private http: Http) { }
 
    // getAll() {
    //     return this.http.get('http://localhost:9005/users').map((response: Response) => response.json());
    // }
 
    // getById(id: number) {
    //     return this.http.get('http://localhost:9005/user/' + id).map((response: Response) => response.json());
    // }
 
    // create(user: User) {
    //     return this.http.post('http://localhost:9005/user/add', user).map((response: Response) => response.json());
    // }
 
    // update(user: User) {
    //     return this.http.put('http://localhost:9005/user/' + user.id +'/update', user).map((response: Response) => response.json());
    // }

    ChangeRole(id: number) {
        return this.http.put('http://localhost:9002/admin/' + id +'/changerole', id).map((response: Response) => response.json());
    }
 
    delete(id: number) {
        return this.http.delete('http://localhost:9002/admin/' + id +'/delete').map((response: Response) => response.json());
    }

    getByRole(role: number){
        return this.http.get('http://localhost:9002/admin/management/'+ role).map((response: Response) => <User[]>response.json());
    }
 
}