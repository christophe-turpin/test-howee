import { State, initialState } from './../../reducers/app.reducer';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from 'src/app/Services/counterService/counter.service';
import { Save } from 'src/app/actions/app.actions';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  fields: any = [];
  state: any;

  constructor(private counterService: CounterService, private stateStore: Store<State>) {
    stateStore.pipe((state: any) => state).subscribe((data: any) =>{
      this.fields = Object.keys(data.count);
      this.state = data.count
    })
  }
  sendValue(): void {
    this.stateStore.dispatch(new Save(this.state));
  }

  clearValue(): void {
    this.counterService.clearValue();
  }
}
