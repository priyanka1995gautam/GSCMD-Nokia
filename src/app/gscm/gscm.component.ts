import { Component, OnInit } from '@angular/core';
import { LoginService} from '../services/login.service';

@Component({
  selector: 'app-gscm',
  templateUrl: './gscm.component.html',
  styleUrls: ['./gscm.component.css']
})
export class GSCMComponent implements OnInit {

public User:string;

  constructor(private loginservice : LoginService) { }

  ngOnInit() {
    this.User = this.loginservice.getDetails();
  }
}
