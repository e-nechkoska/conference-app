import { Component, Input } from '@angular/core';
import { Session } from '../models/session';

@Component({
  selector: 'ca-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
  @Input() session: Session;
}
