import { Injectable } from '@angular/core';
import { Appointment } from './appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  formData : Appointment;

  constructor() { }
}
