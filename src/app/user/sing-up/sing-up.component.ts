import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  user: User;
  isLoginError : boolean = false;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: ''
    }
  }

  OnSubmit(userName, password){
    console.log(userName + password);
    this.userService.registerUser(userName, password).subscribe((data : any) => {
      this.router.navigate(['/login']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }

}
