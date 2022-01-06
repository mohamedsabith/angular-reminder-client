import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private signupRouter:Router) { }

  ngOnInit(): void {
  }

 register(){
 this.signupRouter.navigateByUrl('register')
 }
 
 login(){
  this.signupRouter.navigateByUrl('login')
  }
}
