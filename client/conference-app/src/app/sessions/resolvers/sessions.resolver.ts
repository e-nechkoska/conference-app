import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Session } from '../models/session';
import { Observable } from 'rxjs';
import { SessionsService } from '../services/sessions.service';

@Injectable()
export class SessionsResolver implements Resolve<Session[]> {

  constructor(private sessionsService: SessionsService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Session[]> | Promise<Session[]> | Session[] {
    return this.sessionsService.fetchAllSessions();
  }

}
