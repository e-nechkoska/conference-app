import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Attendee } from '../models/attendee';
import { Observable } from 'rxjs';
import { AttendeesService } from '../services/attendees.service';

@Injectable()
export class AttendeesResolver implements Resolve<Attendee[]> {

  constructor(private attendeesService: AttendeesService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    : Observable<Attendee[]> | Promise<Attendee[]> | Attendee[] {
    return this.attendeesService.fetchAllAttendees();
  }

}
