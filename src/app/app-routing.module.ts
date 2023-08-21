import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputsComponent } from './Components/inputs/inputs.component';
import { ResumeComponent } from './Components/resume/resume.component';

const routes: Routes = [
  { path: '', component: InputsComponent, },
  { path: 'resume', component: ResumeComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }