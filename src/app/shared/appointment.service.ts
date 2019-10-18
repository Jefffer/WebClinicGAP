import { Injectable } from '@angular/core';
import { Appointment } from './appointment.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  formData : Appointment;
  readonly rootURL = "http://localhost:60009/api"; // API connection

  constructor(private http : HttpClient) { }

  postAppointment(formData : Appointment){
    return this.http.post(this.rootURL+'/Appointments/CreateAppoint', formData);
  }
}
