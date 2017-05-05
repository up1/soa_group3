import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { User } from '../data/userindex';

import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class UserService {
    constructor(private http: Http) { }
 
    getAll() {
        return this.http.get('http://localhost:9005/users', this.jwt()).map((response: Response) => response.json());
    }
 
    getById(id: number) {
        return this.http.get('http://localhost:9005/user/' + id, this.jwt()).map((response: Response) => response.json());
    }
 
    create(user: User) {
        return this.http.post('http://localhost:9005/user/add', user, this.jwt()).map((response: Response) => response.json());
    }
 
    update(user: User, id: number) {
        return this.http.put('http://localhost:9005/user/' + id +'/update', user, this.jwt()).map((response: Response) => response.json());
    }
 
    delete(id: number) {
        return this.http.delete('http://localhost:9005/user/' + id +'/delete', this.jwt()).map((response: Response) => response.json());
    // }
    // getByRole(role: number): Observable<User[]>{
    //     return this.http.get('http://localhost:9005/users/management/' + role).map((response: Response) => <User[]>response.json());
    // }
        }
    getByRole(role: number){
        return this.http.get('http://localhost:9005/users/management/'+ role).map((response: Response) => <User[]>response.json());
    }

    login(user:User){        
        return this.http.post('http://localhost:9005/user', user, this.jwt())
        .map((response: Response) => {
            let res = response.json();
            localStorage.setItem("currentUser",JSON.stringify({user_id:res.id ,email:user.email , role:res.role}))
        });
    }
 
    // private helper methods
 
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}