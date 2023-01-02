import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CeoMessageComponent } from './ceo-message/ceo-message.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularSidebarAssignment';
  courses:string[]=["Web development","Angular","React"];
  
  constructor(public dialog: MatDialog) {}

  opendialog() {

    this.dialog.open(ContactDetailsComponent,{

      width: '70%',

      height:'75%'

    });

  }

  openDialog() {

    this.dialog.open(CeoMessageComponent,{

      width: '70%',

      height:'60%'

    });

  }

}
  
