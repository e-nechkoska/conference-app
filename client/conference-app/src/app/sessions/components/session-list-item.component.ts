import { Component, HostBinding, Input } from '@angular/core';
import { Session } from '../models/session';

@Component({
  selector: 'ca-session-list-item',
  templateUrl: './session-list-item.component.html',
  styleUrls: ['./session-list-item.component.css']
})
export class SessionListItemComponent {
  @Input() session: Session;
  @Input()
  @HostBinding('class.selected')
  selected = false;
}
