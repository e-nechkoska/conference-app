import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../models/session';

@Injectable()
export class SessionsService {
  constructor(private http: HttpClient) {
  }

  fetchAllSessions(): Observable<Session[]> {
    return this.http.get<Session[]>('server/api/v1/sessions');
  }

  delete(session: Session) {
    return this.http.delete(`server/api/v1/sessions/${session.session_id}`);
  }

}
