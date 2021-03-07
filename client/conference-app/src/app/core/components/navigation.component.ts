import { Component, Input } from '@angular/core';
import { NavItem } from '../models/nav-item';

@Component({
  selector: 'ca-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input() navItems: NavItem[];
}
