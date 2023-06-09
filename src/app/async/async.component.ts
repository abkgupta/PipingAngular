import { Component, OnInit } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {
   data$!: Observable<string>;
  constructor() {
      this.data$ = of("Hello World !").pipe(delay(2000))
   }

  ngOnInit(): void {
  }

}
