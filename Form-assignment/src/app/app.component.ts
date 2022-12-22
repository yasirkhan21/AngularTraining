import { Component,OnInit } from '@angular/core';
import { Employee } from './model/employee';
import { FormGroup,FormBuilder, Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
constructor(private fb:FormBuilder){}

// mailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
// passpattern!:"/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/";
  title = 'assignment5';
  public mail:string="";
  public subscription:string="";
  public password:string="";  
  public emp:Employee[]=[];
  public myForm!:FormGroup;

ngOnInit(){
this.myForm=this.fb.group({
  mail:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
  subscription:['',[Validators.required]]
})

}

check:boolean=false;
  insertData(){
    if(this.myForm.valid){
    let employee = new Employee();
    employee.mail=this.myForm.value.mail;
    employee.subscription=this.myForm.value.subscription;
    employee.password=this.myForm.value.password;
    console.log(employee)
    this.emp.push(employee);
    window.alert("Data Submitted Sucessfully!")
    }
    
  }

}
