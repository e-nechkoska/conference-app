import { Component, OnDestroy, OnInit } from '@angular/core';
import { Attendee } from '../models/attendee';
import { AttendeesService } from '../services/attendees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ca-attendees-page',
  templateUrl: './attendees-page.component.html',
  styleUrls: ['./attendees-page.component.css']
})
export class AttendeesPageComponent implements OnInit, OnDestroy {
  attendees: Attendee[];
  selectedAttendee: Attendee;
  private subscription = new Subscription();

  constructor(
    private attendeesService: AttendeesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.attendees = this.activatedRoute.snapshot.data.attendees;
    const queryParamsSubscription = this.activatedRoute.queryParams.subscribe(({attendeeId}) => {
      this.selectedAttendee = !attendeeId
        ? this.attendees[0]
        : this.attendees.find(a => a.attendee_id === Number(attendeeId))
    });
    this.subscription.add(queryParamsSubscription);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSelect(attendee: Attendee) {
    this.router.navigate(['attendee', attendee.attendee_id]);
  }
}
