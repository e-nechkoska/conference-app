import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Attendee } from '../models/attendee';

@Component({
  selector: 'ca-attendee-list',
  templateUrl: './attendee-list.component.html',
  styleUrls: ['./attendee-list.component.css']
})
export class AttendeeListComponent {
  @Input() attendees: Attendee[];
  @Input() selectedAttendee: Attendee;

  @Output() selectionChanged = new EventEmitter<Attendee>();

  select(attendee: Attendee) {
    this.selectionChanged.emit(attendee);
  }

  isSelected(attendee: Attendee) {
    return this.selectedAttendee.attendee_id === attendee.attendee_id;
  }
}
