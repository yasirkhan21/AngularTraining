import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sliderAssignment';
  min:number=0;
  max:number=100;
  step:number=1;
  value:number=0;

  public setVal(){
    if(this.value>=this.max){
       this.value=this.max;
    }
    else{
   this.value++;
  }
  }
  public rmval(){
    if(this.value!=0){
   this.value--;
  }
  }

}
