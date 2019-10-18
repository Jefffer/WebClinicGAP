import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/shared/appointment.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointTypes = ['Medicina General', 'Odontología', 'Pediatría', 'Neurología'];

  // appointTypes = [
  //   new Appointmenttype(1, 'Medicina General'),
  //   new Appointmenttype(1, 'Odontología'),
  //   new Appointmenttype(1, 'Pediatría'),
  //   new Appointmenttype(1, 'Neurología')
  // ];

  doctorsNames = ['Jacky Heinz', 'Hugo Lombardi', 'Daniel Valencia', 'Marcela Castiblanco', 'Sandra Patiño'];
  myDate = new Date();

  constructor(private service : AppointmentService, private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      idAppointment : null,
      idPatient : null,
      patientName : '',
      appointmentType : null,
      doctorName : '',
      AppointmentDateTime : null
    }
  }

  onSubmit(form : NgForm){
    // Get current date and form date 
    const formDate = Date.parse(form.value.AppointmentDateTime);
    const currentDate = Date.parse(this.myDate.toString());
    // Get hours between dates
    const diffInMs = formDate - currentDate;
    const diffInHours = diffInMs / 1000 / 60 / 60;
    console.log(diffInHours);
    if(diffInHours < 6){ // The appointment must be requested at least 6 hours before
      console.log(this.myDate);
      this.dateError(form, diffInHours);
    }
    else {
      if(form.value.idAppointment == null)
        this.insertRecord(form);
      else
        this.updateRecord(form);
    }
  }

  dateError(form : NgForm, hours : number){
    if (hours < 0)
      this.toastr.error('The appointment datetime must be greater than the current date', 'Appointments Management');
    else
      this.toastr.error('The appointment datetime must be ', 'Appointments Management');
      // this.resetForm(form);
  }

  insertRecord(form : NgForm){
    this.service.postAppointment(form.value).subscribe(res => {
      this.toastr.success('Appointment Created', 'Appointments Management');
      this.resetForm(form);
      this.service.refresList();
    })
  }

  updateRecord(form : NgForm){
    this.service.putPatient(form.value).subscribe(res => {
      this.toastr.warning('Appointment Modified', 'Appointments Management');
      this.resetForm(form);
      this.service.refresList();
    });
  }

}
