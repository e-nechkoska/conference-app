import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Session } from '../models/session';

@Injectable()
export class SessionsService {
  constructor(private http: HttpClient) {
  }

  fetchAllSessions(): Observable<Session[]> {
    // return this.http.get<Session[]>('/api/v1/sessions');
    return of([
      {
        sessionId: 1,
        sessionDescription: 'descr 1',
        sessionName: 'session name 1',
        sessionLength: 2
      },
      {
        sessionId: 2,
        sessionDescription: 'descr 2',
        sessionName: 'session name 2',
        sessionLength: 4
      }
    ]);
  }

}
