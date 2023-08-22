import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { CardNumberComponent } from './Components/card-number/card-number.component';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { State, counterReducer } from './reducers/app.reducer';
import { ResumeComponent } from './Components/resume/resume.component';
import { InputsComponent } from './Components/inputs/inputs.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CardNumberComponent,
    ResumeComponent,
    InputsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatIconModule,
    StoreModule.forRoot({count: counterReducer as ActionReducer<State>}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
