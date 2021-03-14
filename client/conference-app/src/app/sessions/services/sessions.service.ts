import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Session } from '../models/session';

@Injectable()
export class SessionsService {
  allSessions = new Subject<Session[]>();
  allSessions$: Observable<Session[]> = this.allSessions.asObservable();

  selectedSession = new BehaviorSubject<Session>({} as Session);
  selectedSession$: Observable<Session> = this.selectedSession.asObservable();

  constructor(private http: HttpClient) {
  }

  fetchAllSessions() {
    // TODO refactor to use resolvers
    this.http.get<Session[]>('server/api/v1/sessions').subscribe(sessions => {
      this.allSessions.next(sessions);
      this.selectedSession.next(sessions[0]);
    });
  }

}
