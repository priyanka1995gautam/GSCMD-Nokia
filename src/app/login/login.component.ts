import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username = 'Priyanka';
  public password = 'Pinku@123';
  public User:string;
  public Pass:string;

  constructor(private routes:Router,private loginservice : LoginService) { }

  ngOnInit() {
  }

  Login(User){
    if(this.username === this.User){
      this.loginservice.setUser(this.User);
      this.routes.navigate(['/gscm']);
  }
  console.log(this.User);
}

}
