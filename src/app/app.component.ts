import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PipingAngular';
  today  = Date()
   user = {
    name: 'devrevr',
    age: 34
  }
}
