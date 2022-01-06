import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const options ={
  headers: new HttpHeaders()
}

const baseUrl = 'http://localhost:7000';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }

  register(email:any,username:any,userid:any,password:any){

    const data ={
      email,
      username,
      userid,
      password,
      event:[]
    }
    return this.http.post(`${baseUrl}/register`,data)
  }

  
  login(userid:any,password:any){
    const data={
      userid,
      password,
      event:[]
    }
    return this.http.post(`${baseUrl}/login`,data)
  }

  getOptons(){
    const token = JSON.parse(localStorage.getItem("token")||'')
     let headers = new HttpHeaders()

     if(token){
       headers = headers.append('x-access-token',token)
       options.headers=headers
     }
     return options
  }

  event(userid:any,tittle:any,date:any,event:any){
    const data={
      userid,
      tittle,
      date,
      event,
    }
    return this.http.post(`${baseUrl}/addEvent`,data,this.getOptons())
  }

  showevent(userid:any){
    const data={
      userid
    }
    return this.http.post(`${baseUrl}/showEvent`,data,this.getOptons())
  }

}
