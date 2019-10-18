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

  constructor(private service : AppointmentService, private toastr : ToastrService) { }

  ngOnInit() {
    this.service.refresList();
  }

  populateForm(pat : Appointment){
    this.service.formData = Object.assign({},pat);
  }

  onDelete(id : number){
    if(confirm("Do you want to cancel the Appointment with ID "+ id +"?")){
      this.service.deletePatient(id).subscribe(res => {
        this.toastr.info('Appointment Canceled', 'Appointments Management');
        this.service.refresList();
      });
    }
  }

}
