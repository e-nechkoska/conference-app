import { Component, OnInit } from '@angular/core';
import { Attendee } from '../models/attendee';
import { AttendeesService } from '../services/attendees.service';

@Component({
  selector: 'ca-attendees-page',
  templateUrl: './attendees-page.component.html',
  styleUrls: ['./attendees-page.component.css']
})
export class AttendeesPageComponent implements OnInit {
  attendees: Attendee[];

  constructor(private attendeesService: AttendeesService) {
  }

  ngOnInit() {
    this.attendeesService.fetchAllAttendees().subscribe(attendees => {
      this.attendees = attendees;
    });
  }
}
