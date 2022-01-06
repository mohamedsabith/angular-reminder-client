import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

 loginForm=this.fb.group({
  userid:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private fb:FormBuilder,private ds:DataServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    var userid=this.loginForm.value.userid
    var password=this.loginForm.value.password
    var date = new Date();

    if(this.loginForm.valid){
      this.ds.login(userid,password).subscribe((result:any)=>{
        if(result){
          Swal.fire(
            `${result.message}`,
            'You clicked the button!',
            'success'
          )
          localStorage.setItem("currentUsername", JSON.stringify(result.currentUsername))
          localStorage.setItem("currentUserid", JSON.stringify(result.currentUserid))
          localStorage.setItem("token", JSON.stringify(result.token))
          localStorage.setItem("date", JSON.stringify(date))
     this.router.navigateByUrl('/dashboard')
        }
      },
      (result:any)=>{
        Swal.fire({
          icon: 'error',
          title: `${result.error.message}`,
          text: 'Something went wrong!',
        })
        this.router.navigateByUrl('/error')
       }
      )
    }else{
      Swal.fire(
        'INVALID FORM!!',
        'Please try one more?',
        'question'
      )
    }
  }

}
