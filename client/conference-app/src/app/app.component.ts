import { Component } from '@angular/core';
import { NavItem } from './core/models/nav-item';

@Component({
  selector: 'ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navItems: NavItem[] = [
    {
      name: 'Speakers',
      link: 'speakers'
    },
    {
      name: 'Sessions',
      link: 'sessions'
    }
  ];
}
