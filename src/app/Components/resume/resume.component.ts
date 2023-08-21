import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CounterService } from 'src/app/Services/counterService/counter.service';
import { State, initialState } from 'src/app/reducers/app.reducer';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
[x: string]: any;
  fields: any = [];
  resumeData: any;
  sub: Subscription = new Subscription();

  constructor(private store: Store<State>, private counterService: CounterService) {
    store.pipe((state: any) => state).subscribe((data: any)=> {
      console.log('resume', data)
      this.fields = Object.keys(data.count);
      this.resumeData = data.count;
    })
    console.log(this.resumeData)
  }
}
