import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminUtilityComponent } from './admin-utility/admin-utility.component';
import { AccountUtilityComponent } from './account-utility/account-utility.component';
import { GSConfigurationComponent } from './gs-configuration/gs-configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminUtilityComponent,
    AccountUtilityComponent,
    GSConfigurationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
