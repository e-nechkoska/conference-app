import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Session } from '../models/session';

@Component({
  selector: 'ca-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent {
  @Input() sessions: Session[];
  @Input() selectedSession: Session;

  @Output() selectionChanged = new EventEmitter<Session>();

  select(session: Session) {
    this.selectionChanged.emit(session);
  }

  isSelected(session: Session) {
    return this.selectedSession === session;
  }
}
