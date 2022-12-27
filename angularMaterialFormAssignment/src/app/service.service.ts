import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MaterialformComponent } from './materialform/materialform.component';
import { angularMform } from './model/angularMform';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public httpclient:HttpClient) { }
  url: string = "http://localhost:3000";
  PostForm(data:angularMform) {
    return this.httpclient.post<angularMform>(this.url+"/angularMaterialAssignment",data)
  }
}
