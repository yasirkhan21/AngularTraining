import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  hide:boolean=true;
 public myForm!:FormGroup;
  constructor(private fb:FormBuilder,private cs:ServiceService){}
  ngOnInit() {
    
    this.myForm = this.fb.group({
      id:['',],
    fullName:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32),Validators.pattern('^[A-za-z ]+$')]],
    emailId:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]+$'),Validators.minLength(6),Validators.maxLength(12)]],
    gender:['',[Validators.required]],
    userName:['',[Validators.required]],
    dateofbirth:['',[Validators.required]],
    mobileNo:['',[Validators.required,Validators.pattern(/^\d{10}$/),Validators.minLength(10),Validators.maxLength(12)]],
    skills:['',[Validators.required]]
    
    })
  } 
  onSubmit(){
    if(this.myForm.valid){
      this.cs.PostData(this.myForm.value).subscribe();
      alert("data submitted!")
      this.myForm.reset();
      window.location.reload();
    }
    else{
      alert("data is not submitted!")
    }
  }
}
