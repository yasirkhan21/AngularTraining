import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { registermodel } from './model/registermodel';
import { deshReg } from './model/Dashreg';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public httpclient:HttpClient) { }
  url: string = "http://localhost:3000";
  PostData(data:registermodel) {
 
    return this.httpclient.post<registermodel>(this.url+"/angularSidebarAssignment",data)
  }
  getSingle(){
   return this.httpclient.get<any>(this.url+"/angularSidebarAssignment")
  }

  postStepperData(data:any){
    return this.httpclient.post<any>(this.url+"/Stepper",data)
  }
}
