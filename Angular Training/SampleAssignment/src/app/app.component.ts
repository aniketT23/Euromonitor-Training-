import { Component, HostBinding } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation triggers go here
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 0.8,
          color: 'green',
        })
      ),
      state(
        'closed',
        style({
          opacity: 0.8,
          color: 'red',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class AppComponent {
  title = 'SampleAssignment';
  timer: any;
  counter: number = 0;
  flag: boolean = true;
  increment(): void {
    this.counter++;
  }
  decrement(): void {
    if (this.counter < 0) {
      alert('Cannot Decrement More');
    } else {
      this.counter--;
    }
  }

  startTimer(): void {
    this.timer = setInterval(() => {
      this.counter++;
      this.flag=!this.flag;
    }, 2000);
    // this.flag = true;
  }
  stopTimer(): void {
    clearInterval(this.timer);
    // this.flag = false;
  }
}
