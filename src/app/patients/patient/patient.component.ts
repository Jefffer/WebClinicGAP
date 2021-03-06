import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/patient.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private service : PatientService, private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm) {
    if(form != null)
      form.resetForm();
    this.service.formData = {      
      idPatient : null,
      patientName : '',
      patientIdCard : '',
      patientGender : '',
      patientPhone : '',
      patientBirth : null
    }
  }

  onSubmit(form : NgForm){
    if(form.value.idPatient == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form : NgForm){
    this.service.postPatient(form.value).subscribe(res => {
      this.toastr.success('Patient Added', 'Patients Administration');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form : NgForm){
    this.service.putPatient(form.value).subscribe(res => {
      this.toastr.warning('Patient Modified', 'Patients Administration');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

}
