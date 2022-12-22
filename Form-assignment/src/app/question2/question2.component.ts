import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  constructor(private fb: FormBuilder) { }
  public q2Form!: FormGroup;
  ngOnInit() {
    this.q2Form = this.fb.group({
      projectName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      projectStatus: ['', [Validators.required]]
    })

  }
  checkProjectName: string = "";
  onSubmit() {
    this.checkProjectName = this.q2Form.value.projectName;

    if (this.q2Form.valid) {
      if (this.checkProjectName != "Test") {
        console.log(this.q2Form.value)
        window.alert("Data Submitted Successfully!!")
      } else {
        alert("Test as a project name not allowed")
      }
    } else {
      window.alert("Opps!! Data not is Submitted")
    }
  }
}
