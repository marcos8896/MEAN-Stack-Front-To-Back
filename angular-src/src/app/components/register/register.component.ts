import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:string;
  username: string;
  email:string;
  password:string;

  constructor(private validateService: ValidateService, private flashMessagesService: FlashMessagesService) {

   }

  ngOnInit() {

  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }

    console.log(user);

    //Required fields
    if (!this.validateService.isValidatedRegister(user)) {
      this.flashMessagesService.show('Please, fill in all fields.', {cssClass: 'alert-danger', timeout: 3500});
    }

    if (!this.validateService.isValidatedEmail(user.email)) {
      this.flashMessagesService.show('Please use a valid email.', {cssClass: 'alert-danger', timeout: 3500});
    }
    
  }

}
