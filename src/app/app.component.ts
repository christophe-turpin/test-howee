import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { State } from './reducers/app.reducer';
import { CounterService } from './Services/counterService/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  rouge = "#AE423A";
  jaune = "#F9EDEC";
  gris = "#878787";
  contours = "#FFC397";
}
