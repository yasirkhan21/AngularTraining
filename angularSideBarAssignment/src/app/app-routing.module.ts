import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { CeoMessageComponent } from './ceo-message/ceo-message.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
{
  path:'register',
  component:RegisterComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'ceo-message',
  component:CeoMessageComponent
  
},
{
path:'contact-details',
component:ContactDetailsComponent
},
{
  path:'dashboard',
  component:DashboardComponent
},
{
  path:'',
  component:AppComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
