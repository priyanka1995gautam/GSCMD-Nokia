import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminUtilityComponent } from './admin-utility/admin-utility.component';
import { AccountUtilityComponent } from './account-utility/account-utility.component';
import { GSConfigurationComponent } from './gs-configuration/gs-configuration.component';
import { ManageRolesComponent } from './admin-utility/manage-roles/manage-roles.component';
import { ManageUsersComponent } from './admin-utility/manage-users/manage-users.component';
import { MapUserComponent } from './admin-utility/map-user/map-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminUtilityComponent,
    AccountUtilityComponent,
    GSConfigurationComponent,
    ManageRolesComponent,
    ManageUsersComponent,
    MapUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
