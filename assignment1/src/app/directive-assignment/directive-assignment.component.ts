import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-assignment',
  templateUrl: './directive-assignment.component.html',
  styleUrls: ['./directive-assignment.component.css']
})
export class DirectiveAssignmentComponent {
name:string="Yasir Khan";
isDisplay:boolean=false;
timeStamp:number[]=[];
count:number=0;
isClick(){
  this.count++;
this.timeStamp.push(this.count);
}
}
