import {Injectable} from '@angular/core';
import {LoginComponent} from '../login/login.component';


@Injectable()

export class LoginService{
    
    public LoggedUser: string;

    setUser(user){
        this.LoggedUser = user;
    }

    getDetails(){
        return this.LoggedUser;
    }

}