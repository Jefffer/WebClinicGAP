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
    this.insertRecord(form);
  }

  insertRecord(form : NgForm){
    this.service.postAppointment(form.value).subscribe(res => {
      this.toastr.success('Appointment Created', 'Appointments Management');
      this.resetForm(form);
    })
  }

}
