import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding-assignment',
  templateUrl: './databinding-assignment.component.html',
  styleUrls: ['./databinding-assignment.component.css']
})
export class DatabindingAssignmentComponent {
  name: string = "";
  resetName() {
    this.name = "";
  }
}
