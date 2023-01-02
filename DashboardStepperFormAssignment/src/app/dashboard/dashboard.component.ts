import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { deshReg } from '../model/Dashreg';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private fb: FormBuilder, private cs: ServiceService) { }
  showFiller = false;
  basicInfo!: FormGroup;
  bankInfo!: FormGroup;
  address!: FormGroup;
  ngOnInit(): void {
    this.basicInfo = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(32),Validators.pattern('^[A-za-z ]+$')]],
      emailId: ['',[Validators.email]],
      fathersName: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      mothersName: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      gender: ['',[Validators.required]],
      dob: ['',[Validators.required]],
      mobileNo: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
    })

    this.bankInfo = this.fb.group({
      fullName: ['',],
      accountNo: ['',],
      bankName: ['',],
      ifscCode: ['',],
      internetBanking: ['',],
      mobileBanking: ['',]
    })

    this.address = this.fb.group({
      presentAdd: ['', [Validators.maxLength(60),Validators.required]],
      permanentAdd: ['', [Validators.maxLength(60),Validators.required]]
    })

  }
  totalWord: number = 60;
  // user!:deshReg;
  
  onDataSubmit() {
let user = {
  "name":this.basicInfo.value.name,
  "emailId":this.basicInfo.value.emailId,
  "mothersName":this.basicInfo.value.mothersName,
    "fathersName":this.basicInfo.value.fathersName,
    "gender":this.basicInfo.value.gender,
    "dob":this.basicInfo.value.dob,
    "mobileNo":this.basicInfo.value.mobileNo,
    "fullName":this.bankInfo.value.fullName,
    "accountNo":this.bankInfo.value.accountNo,
    "bankName":this.bankInfo.value.bankName,
    "ifscCode":this.bankInfo.value.ifscCode,
    "internetBanking":this.bankInfo.value.internetBanking,
    "mobileBanking":this.bankInfo.value.mobileBanking,
    "presentAdd":this.address.value.presentAdd,
    "permanentAdd":this.address.value.permanentAdd
}
if(this.basicInfo.valid && this.address.valid){
this.cs.postStepperData(user).subscribe(res=>{
  alert("Data Submitted Successfully!")
  this.basicInfo.reset();
},(err)=>{
  alert("Error Occurred!!")
})
}
else{
  alert("Please enter valid data!")
}
  }
}
