import { CommonModule } from '@angular/common';
// import {MatDatepickerModule} from '@angular/material/datepicker';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';
import { RouterModule} from '@angular/router';

// import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientComponent } from './patients/patient/patient.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { PatientService } from './shared/patient.service';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentComponent } from './appointments/appointment/appointment.component';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';
import { AppointmentService } from './shared/appointment.service';
import { UserComponent } from './user/user.component';
import { SingInComponent } from './user/sing-in/sing-in.component';
import { SingUpComponent } from './user/sing-up/sing-up.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientComponent,
    PatientListComponent,
    AppointmentsComponent,
    AppointmentComponent,
    AppointmentListComponent,
    UserComponent,
    SingInComponent,
    SingUpComponent,
    HomeComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    // MatDatepickerModule,
    // NgbModule,
    // OwlDateTimeModule, OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      // timeOut: 4000,
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [PatientService, AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
