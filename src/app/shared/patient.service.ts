import { Injectable } from '@angular/core';
import { Patient } from './patient.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  formData : Patient
  readonly rootURL = "http://localhost:60009/api"; // API connection

  constructor(private http : HttpClient) { }

  postPatient(formData : Patient) {
    return this.http.post(this.rootURL+'/Patients', formData);
  }
}
