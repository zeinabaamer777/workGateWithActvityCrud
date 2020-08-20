import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { UsersListDetailsComponent } from '../../users-list-details/users-list-details.component';
import { SearchPipe } from '../../../pipes/search.pipe';
import { DatePipe } from '@angular/common';

import { UsersComponent } from '../../users/users.component';
import { UserDetailsComponent } from '../../user-details/user-details.component';
import { SitesListDetailsComponent } from '../../sites-list-details/sites-list-details.component';
import { SitesComponent } from 'app/sites/sites.component';
import { SiteDetailsComponent } from 'app/site-details/site-details.component';
import { EntitiesComponent } from 'app/entities/entities.component';
import { ActivitiesComponent } from 'app/activities/activities.component';
import { PositionsComponent } from 'app/positions/positions.component';
import { SitetypesComponent } from 'app/sitetypes/sitetypes.component';
import { SiteresponsibilitiesComponent } from 'app/siteresponsibilities/siteresponsibilities.component';
import { CompaniesComponent } from 'app/companies/companies.component';
import { DepartmentsComponent } from 'app/departments/departments.component';
import { TimegroupComponent } from 'app/timegroup/timegroup.component';
import { DivisionsComponent } from 'app/divisions/divisions.component';
import { PlacesComponent } from 'app/places/places.component';
import { ViewUserComponent } from 'app/view-user/view-user.component';
import { UserMapComponent } from 'app/user-map/user-map.component';
import { GoogleMapComponent } from 'app/google-map/google-map.component';
// import { CrudComponent }

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { NgxSpinnerModule } from 'ngx-spinner';
import { GoogleMapsModule } from '@angular/google-maps';
import { ChatComponent } from 'app/chat/chat.component';
import { SettingsComponent } from 'app/settings/settings.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CrudComponent } from 'app/crud/crud.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule,
    NgxSpinnerModule,
    GoogleMapsModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ActivitiesComponent,
    PositionsComponent,
    SitetypesComponent,
    SiteresponsibilitiesComponent,
    CompaniesComponent,
    DepartmentsComponent ,
    DivisionsComponent,
    TimegroupComponent,
    PlacesComponent,
    UsersListDetailsComponent,
    UsersComponent,
    UserDetailsComponent,
    SitesListDetailsComponent,
    SitesComponent,
    SiteDetailsComponent,
    EntitiesComponent,
    ViewUserComponent,
    UserMapComponent,
    GoogleMapComponent,
    ChatComponent,
    SettingsComponent,
    CrudComponent,
    SearchPipe
  ],
  providers:[DatePipe] 
})

export class AdminLayoutModule {}
