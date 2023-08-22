import { CounterService } from './../../Services/counterService/counter.service';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { State } from 'src/app/reducers/app.reducer';

@Component({
  selector: 'app-card-number',
  templateUrl: './card-number.component.html',
  styleUrls: ['./card-number.component.scss']
})
export class CardNumberComponent {
  @Input() field: string = "";
  value: number = 0;
  subscription: Subscription = new Subscription();


  constructor(public counterService: CounterService, private stateStore: Store<State>) {
  }
  
  ngOnInit() {
    this.stateStore.pipe((state:any)=> state).subscribe((data: any) => {
      this.value = data.count[this.field]
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  increment(): void {
    this.value < 10 && this.value ++;
    this.setValue();
  }
  
  decrement(): void {
    this.value > 0 && this.value --;
    this.setValue();
  }

  changeValue(val:any) {
    if (typeof val === 'number') {
      this.value = val > 0 && val <= 10 ? val : 0;
    } else {
      this.value = 0;
    }
    this.setValue();
  }

  setValue(): void {
    this.counterService.sendValue(this.value, this.field);
  }

}
