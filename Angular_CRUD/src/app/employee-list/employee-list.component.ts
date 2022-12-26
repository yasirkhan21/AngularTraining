import { Component } from '@angular/core';
import { Employee } from '../model/employee';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

 public static employee: Employee;
  constructor(private cs: ServiceService) { }

  emp!: Employee[];

  ngOnInit(): void {

    this.cs.EmployeeGet().subscribe(list => {

      this.emp = list
    })
  }

  deleteEmployee(id: number) {
    this.cs.EmployeeDelete(id).subscribe();
    
    window.location.reload();
  }
 
  updateEmployee(employee: Employee) {
  
    EmployeeListComponent.employee=employee;
   this.cs.Event1(employee);
  }
 
}
