import { Component, Input } from '@angular/core';
import { Attendee } from '../models/attendee';

@Component({
  selector: 'ca-attendee-list-item',
  templateUrl: './attendee-list-item.component.html',
  styleUrls: ['./attendee-list-item.component.css']
})
export class AttendeeListItemComponent {
  @Input() attendee: Attendee;
  @Input()
  selected = false;
}
