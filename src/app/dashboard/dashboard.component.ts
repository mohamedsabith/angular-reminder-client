import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  

  eventForm=this.fb.group({
    userid:['',[Validators.required,Validators.pattern('[0-9]*')]],
    tittle: ['', [Validators.required,Validators.pattern('[a-zA-Z]*')]],
    date:['',[Validators.required]],
    event: ['', [Validators.required]]
    })
  
    username:any

  constructor(private fb:FormBuilder,private ds:DataServiceService,private router:Router) {
    this.username=JSON.parse(localStorage.getItem("currentUsername") ||"")
   }
 
  ngOnInit(): void {
  }

  event(){
     var userid= this.eventForm.value.userid
     var tittle = this.eventForm.value.tittle
     var date = this.eventForm.value.date
     var event =this.eventForm.value.event

     if(this.eventForm.valid){
       this.ds.event(userid,tittle,date,event).subscribe((result:any)=>{
        if(result){
          Swal.fire(
            `${result.message}`,
            'You clicked the button!',
            'success'
          )
     this.router.navigateByUrl('/event')
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
