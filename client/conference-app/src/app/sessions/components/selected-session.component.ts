import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Session } from '../models/session';

@Component({
  selector: 'ca-selected-session',
  templateUrl: './selected-session.component.html',
  styleUrls: ['./selected-session.component.css']
})
export class SelectedSessionComponent {
  @Input() session: Session;

  @Output() deleted = new EventEmitter<Session>();
  @Output() edited = new EventEmitter<Session>();

  onEdit() {
    this.edited.emit(this.session);
  }

  onDelete() {
    this.deleted.emit(this.session);
  }
}
