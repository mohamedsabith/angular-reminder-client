import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.css']
})
export class ShowEventComponent implements OnInit {

userid=""
event:any
user:any
date:any
tittle:any

  constructor(private ds:DataServiceService) { 
    this.user=JSON.parse(localStorage.getItem("currentUsername") || '')
    this.userid=JSON.parse(localStorage.getItem("currentUserid") || '')
    this.date=JSON.parse(localStorage.getItem("date") || '')
    this.ds.showevent(this.userid).subscribe((result:any)=>{
      if(result){
        this.event=result.event
        localStorage.setItem("currentEvent",JSON.stringify(result.event))
      }
    },
    (result)=>{
      Swal.fire({
        icon: 'error',
        title: `${result.error.message}`,
        text: 'Something went wrong!',
      })
    }
    )
  }
  ngOnInit(): void {
  }
}
