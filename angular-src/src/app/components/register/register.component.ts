import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';





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

  constructor(
    private validateService: ValidateService, 
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) {

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

    //Required fields
    if (!this.validateService.isValidatedRegister(user)) {
      this.flashMessagesService.show('Please, fill in all fields.', {cssClass: 'alert-danger', timeout: 3500});
      return false;
    }

    if (!this.validateService.isValidatedEmail(user.email)) {
      this.flashMessagesService.show('Please use a valid email.', {cssClass: 'alert-danger', timeout: 3500});
      return false;      
    }
    
    //Register User
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessagesService.show('You are now registered and can log in.', {cssClass: 'alert-success', timeout: 3500});      
        this.router.navigate(['/login']);
      } else {
        
        this.flashMessagesService.show('Something went wrong.', {cssClass: 'alert-danger', timeout: 3500});      
        this.router.navigate(['/register']);
      }
    });

  }

}
