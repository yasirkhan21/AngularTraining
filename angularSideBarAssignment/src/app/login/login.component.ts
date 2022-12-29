import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
hide:boolean=true;
loginForm!:FormGroup;
constructor(private fb:FormBuilder,private cs:ServiceService,private route:Router){}
ngOnInit(){
  this.loginForm=this.fb.group({
    userName:['',[Validators.required]],
    password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]+$'),Validators.minLength(6),Validators.maxLength(12)]]
  })
}
login(){
this.cs.getSingle().subscribe(res=>{
console.log(res);
const user = res.find((a:any)=>{
return a.userName===this.loginForm.value.userName && a.password === this.loginForm.value.password
});
if(user){
  alert("login Success")
   this.loginForm.reset();
   this.route.navigate(['/dashboard']);
}
else{
  alert("Enter valid username and password")
}
});
}
}

