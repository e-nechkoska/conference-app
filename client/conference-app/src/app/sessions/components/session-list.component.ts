import { Component, Input } from '@angular/core';
import { Session } from '../models/session';

@Component({
  selector: 'ca-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent {
  @Input() sessions: Session[];
}
