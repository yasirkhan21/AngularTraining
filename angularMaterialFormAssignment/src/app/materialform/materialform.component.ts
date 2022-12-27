import { Component ,OnInit} from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { angularMform } from '../model/angularMform';
@Component({
  selector: 'app-materialform',
  templateUrl: './materialform.component.html',
  styleUrls: ['./materialform.component.css']
})
export class MaterialformComponent implements OnInit {
hide:boolean=true;
myForm!:FormGroup;
constructor(private fb:FormBuilder,private cs:ServiceService){}
ngOnInit() {
  
  this.myForm = this.fb.group({
    id:['',],
  fullName:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32),Validators.pattern('^[A-za-z]+$')]],
  emailId:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]+$'),Validators.minLength(6),Validators.maxLength(12)]],
  gender:['',[Validators.required]],
  dateofbirth:['',[Validators.required]],
  mobileNo:['',[Validators.required,Validators.pattern(/^\d{10}$/),Validators.minLength(10),Validators.maxLength(12)]],
  skills:['',[Validators.required]]
  })
} 
onSubmit(){
  if(this.myForm.valid){
    this.cs.PostForm(this.myForm.value).subscribe();
    alert("data submitted!")
    window.location.reload();
  }
  else{
    alert("data is not submitted!")
  }
}
}
