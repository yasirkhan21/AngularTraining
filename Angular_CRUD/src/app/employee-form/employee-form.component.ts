import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Employee } from '../model/employee';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Subscription, timeInterval, timeout } from 'rxjs';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  subsobj!: Subscription;
  update: boolean= false;
  constructor(private fb: FormBuilder, private cs: ServiceService) {
    this.subsobj = this.cs.Event2().subscribe(() => {
      this.check();
    })
  }
  public static emp: Employee;
  myForm!: FormGroup;
  check() {
    this.myForm.setValue(EmployeeListComponent.employee)
    this.update = true;
  }
  ngOnInit() {
    this.myForm = this.fb.group({
      id: ['',],
      empName: ['',[Validators.required,Validators.pattern(/^[a-zA-Z]/),Validators.maxLength(40)]],
      mobileNo: ['',[Validators.required,Validators.pattern(/^\d{10}$/),Validators.minLength(10),Validators.maxLength(12)]],
      address: ['',[Validators.required,Validators.maxLength(80),Validators.pattern(/^[a-zA-Z0-9(),.]/)]]
    })
  }
  sucess:boolean=false;
  Reset() {
    this.myForm.reset();
  }
  onSubmit() {
    if (this.myForm.valid) {
      if (this.myForm.value.id == '') {
        this.cs.EmployeePost(this.myForm.value).subscribe()
        this.sucess=true;
        
        // window.location.reload();
      }
      else {
        this.cs.EmployeePut(this.myForm.value.id, this.myForm.value).subscribe();
        this.sucess=true;
        
      }
    }

  }
reload(){
  window.location.reload();
}
}
