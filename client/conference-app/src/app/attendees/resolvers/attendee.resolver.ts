import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Attendee } from '../models/attendee';
import { Observable } from 'rxjs';
import { AttendeesService } from '../services/attendees.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AttendeeResolver implements Resolve<Attendee> {

  constructor(private attendeesService: AttendeesService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    : Observable<Attendee> | Promise<Attendee> | Attendee {
    return this.attendeesService.fetchAttendee(Number(route.params.attendeeId));
  }

}
