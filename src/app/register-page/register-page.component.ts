import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm=this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required,Validators.pattern('[a-zA-Z]*')]],
    userid:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password: ['', [Validators.required, Validators.minLength(6),Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private fb:FormBuilder,private data:DataServiceService,private router:Router) { }

  ngOnInit(): void {
  }
 register(){
   var email = this.registerForm.value.email
   var username = this.registerForm.value.username
   var userid = this.registerForm.value.userid
   var password = this.registerForm.value.password
   
   if(this.registerForm.valid){
    this.data.register(email,username,userid,password).subscribe((result:any)=>{
      if(result){
        Swal.fire(
          `${result.message}`,
          'You clicked the button!',
          'success'
        )
   this.router.navigateByUrl('/login')
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
