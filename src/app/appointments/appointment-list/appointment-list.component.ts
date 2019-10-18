import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/shared/appointment.service';
import { Appointment } from 'src/app/shared/appointment.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  myDate = new Date();

  constructor(private service : AppointmentService, private toastr : ToastrService) { }

  ngOnInit() {
    this.service.refresList();
  }

  populateForm(pat : Appointment){
    this.service.formData = Object.assign({},pat);
  }

  onDelete(id : number, appDate : Date){
    // Get current date and form date 
    const formDate = Date.parse(appDate.toString());
    const currentDate = Date.parse(this.myDate.toString());
    // Get hours between dates
    const diffInMs = formDate - currentDate;
    const diffInHours = diffInMs / 1000 / 60 / 60;
    console.log(diffInHours);
    if(diffInHours < 24) // 24 hours is the rule for cancelling appointments
      this.toastr.error('Appointments cannot be canceled less than 24 hours in advance ('+ diffInHours +' hours', 'Appointments Management');      
    else if(confirm("Do you want to cancel the Appointment with ID "+ id +"?")){
      this.service.deleteAppointment(id).subscribe(res => {
        this.toastr.info('Appointment Canceled', 'Appointments Management');
        this.service.refresList();
      });
    }
  }

}
