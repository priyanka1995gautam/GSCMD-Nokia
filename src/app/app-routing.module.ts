import { NgModule} from '@angular/core';
import { Routes,RouterModule} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ManageRolesComponent } from './gscm/admin-utility/manage-roles/manage-roles.component';
import { ManageUsersComponent } from './gscm/admin-utility/manage-users/manage-users.component';
import { MapUserComponent } from './gscm/admin-utility/map-user/map-user.component';
import { ManageProjectsComponent } from './gscm/account-utility/manage-projects/manage-projects.component';
import { ManageNEsComponent } from './gscm/account-utility/manage-nes/manage-nes.component';
import { ManageNEInstancesComponent } from './gscm/account-utility/manage-ne-instances/manage-ne-instances.component';
import { ImportConfigurationComponent } from './gscm/gs-configuration/import-configuration/import-configuration.component';
import { ManageConfigurationComponent } from './gscm/gs-configuration/manage-configuration/manage-configuration.component';
import { ExportConfigurationComponent } from './gscm/gs-configuration/export-configuration/export-configuration.component';
import { CompareConfigurationComponent } from './gscm/gs-configuration/compare-configuration/compare-configuration.component';
import { GSCMComponent } from './gscm/gscm.component';

const routes:Routes = [
    {
        path:'gscm',component: GSCMComponent
      },
      {
        path:'login',component: LoginComponent
      },
      {
        path:'manage-users',component: ManageUsersComponent
      },
      {
        path:'manage-roles',component: ManageRolesComponent
      },
      {
        path:'map-users',component: MapUserComponent
      },

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers:[]
})
export class AppRoutingModule {}
export const routingComponents = [LoginComponent,ManageRolesComponent,ManageUsersComponent,MapUserComponent,ManageProjectsComponent,ManageNEsComponent,
                                    ManageNEInstancesComponent,ImportConfigurationComponent,ManageConfigurationComponent,ExportConfigurationComponent,CompareConfigurationComponent,GSCMComponent]