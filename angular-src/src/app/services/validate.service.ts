import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  isValidatedRegister(user){
    let userValues = (<any>Object).values(user);
    return !(userValues.includes(undefined) || userValues.includes(""));
  }
  
  isValidatedEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
