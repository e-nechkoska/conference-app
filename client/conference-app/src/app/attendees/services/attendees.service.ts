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
}