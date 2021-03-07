import { Component } from '@angular/core';

@Component({
  selector: 'ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conference-app';
  hi = 'HIHIHI';

  getName() {
    return 'test tests';
  }
}
