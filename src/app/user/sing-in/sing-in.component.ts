import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  isLoginError : boolean = false;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
  }

  OnSubmit(userName, password){
    this.userService.userAuth(userName, password).subscribe((data : any) => {
      this.router.navigate(['/home']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }

}
