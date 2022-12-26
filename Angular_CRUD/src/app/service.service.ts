import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Employee } from './model/employee';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public httpclient: HttpClient) { }
  url: string = "http://localhost:3000";
  private subject=new Subject();
  Event1(data:Employee){
    this.subject.next(data);
  }
  Event2(){
    return this.subject.asObservable();
  }
  EmployeePost(emp: Employee) {
    return this.httpclient.post<Employee>(this.url + "/Employee", emp)
  }
  EmployeeGet(): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(this.url + "/Employee")
  }

  EmployeeDelete(id: number) {
    return this.httpclient.delete(this.url + "/Employee/" + id)
  }

  EmployeePut(id:number,employee: Employee) {
    return this.httpclient.put(this.url + "/Employee/" + employee.id, employee)
  }
}
