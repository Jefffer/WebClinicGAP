import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/shared/appointment.service';
import { Appointment } from 'src/app/shared/appointment.model';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  constructor(private service : AppointmentService) { }

  ngOnInit() {
    this.service.refresList();
  }

  populateForm(pat : Appointment){
    this.service.formData = Object.assign({},pat);
  }

  // onDelete(id : number){
  //   if(confirm("Do you want to delete this Patient?")){
  //     this.service.deletePatient(id).subscribe(res => {
  //       this.toastr.info('Deleted Successfully', 'Patients Administration');
  //       this.service.refreshList();
  //     });
  //   }
  // }

}
