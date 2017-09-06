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

  constructor(private http: Http, private ConfigUrlService: ConfigUrlService) { 
    this.urlConfig = this.ConfigUrlService.getConfig();
    this.url = `${this.urlConfig.protocol}://${this.urlConfig.host}:${this.urlConfig.port}`;
  }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.url}/users/register`, user, {headers: headers})
      .map(res => res.json());
  }

}
