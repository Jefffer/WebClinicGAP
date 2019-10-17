import { Injectable } from '@angular/core';
import { Patient } from './patient.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  formData : Patient
  list : Patient[];
  readonly rootURL = "http://localhost:60009/api"; // API connection

  constructor(private http : HttpClient) { }

  postPatient(formData : Patient) {
    return this.http.post(this.rootURL+'/Patients', formData);
  }

  refreshList() {
    this.http.get(this.rootURL + '/Patients').toPromise().then(res => this.list = res as Patient[]);
  }

  putPatient(formData : Patient) {
    return this.http.put(this.rootURL + '/Patients/' + formData.idPatient, formData);
  }

  deletePatient(id : number){
    return this.http.delete(this.rootURL + '/Patients/' + id);
  }
}
