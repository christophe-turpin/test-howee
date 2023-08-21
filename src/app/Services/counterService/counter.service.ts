import { CounterActionTypes, Reset, Save } from './../../actions/app.actions';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { State, counterReducer, initialState } from 'src/app/reducers/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counters: any = {
    bebe: new Subject<number>(),
    enfant: new Subject<number>(),
    ado: new Subject<number>(),
    adulte: new Subject<number>(),
  };
  state: State = initialState;

  constructor(private store: Store<State>) {
      Object.keys(this.counters).forEach(group => {
        this.counters[group].subscribe((value: any) => {
          this.state = { ...this.state, [group]: value };
        });
      });
  }

  sendValue(value: number, field: string) {
    if (this.counters[field]) {
      this.counters[field].next(value);
    }
    this.store.dispatch(new Save(this.state))
  }

  clearValue() {
    this.store.dispatch(new Reset())
  }

  getValue(field: string): Observable<number> {
    return this.counters[field] ? this.counters[field].asObservable() : new Subject<number>().asObservable();
  }
}
