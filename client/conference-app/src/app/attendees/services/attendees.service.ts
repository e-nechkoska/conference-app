import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Attendee } from '../models/attendee';

@Injectable()
export class AttendeesService {
  constructor(private http: HttpClient) {
  }

  fetchAllAttendees(): Observable<Attendee[]>{
    return this.http.get<Attendee[]>('server/api/v1/attendees');
  }

  fetchAttendee(attendeeId: number): Observable<Attendee> {
    return this.http.get<Attendee>(`server/api/v1/attendees/${attendeeId}`);
  }

  deleteAttendee(attendee: Attendee) {
    return this.http.delete(`server/api/v1/attendees/${attendee.attendee_id}`);
  }

  updateAttendee(attendee: Attendee) {
    return this.http.put(`server/api/v1/attendees/${attendee.attendee_id}`, attendee);
  }
}
