import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { ConfigUrlService } from './config-url.service';

@Injectable()
export class AuthService {

  authToken: any;
  user: any;
  urlConfig: any;
  url: string;
  headers: Headers;

  constructor(private http: Http, private ConfigUrlService: ConfigUrlService) {
    
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');

    this.urlConfig = this.ConfigUrlService.getConfig();
    this.url = `${this.urlConfig.protocol}://${this.urlConfig.host}:${this.urlConfig.port}`;
  }

  registerUser(user){
    return this.http.post(`${this.url}/users/register`, user, {headers: this.headers})
      .map(res => res.json());
  }

  authenticateUser(user){
    return this.http.post(`${this.url}/users/authenticate`, user, {headers: this.headers})
    .map(res => res.json());

  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
