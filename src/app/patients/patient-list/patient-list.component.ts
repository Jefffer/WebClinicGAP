import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/patient.service';
import { Patient } from 'src/app/shared/patient.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  constructor(private service : PatientService, private toastr : ToastrService) { }

  ngOnInit() {
    this.service.refreshList()
  }

  populateForm(pat : Patient){
    this.service.formData = Object.assign({},pat);
  }

  onDelete(id : number){
    if(confirm("Do you want to delete this Patient?")){
      this.service.deletePatient(id).subscribe(res => {
        this.toastr.info('Deleted Successfully', 'Patients Administration');
        this.service.refreshList();
      });
    }
  }

}
