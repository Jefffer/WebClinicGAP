import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/shared/appointment.service';
import { NgForm } from '@angular/forms';

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

  constructor(private service : AppointmentService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      idAppointment : null,
      idPatient : null,
      // patientName : '',
      appointmentType : null,
      doctorName : '',
      AppointmentDateTime : null
    }
  }

}
