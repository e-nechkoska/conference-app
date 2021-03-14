import { Component, OnDestroy, OnInit } from '@angular/core';
import { SessionsService } from '../services/sessions.service';
import { Session } from '../models/session';
import { Observable } from 'rxjs';

@Component({
  selector: 'ca-sessions',
  templateUrl: './sessions-page.component.html',
  styleUrls: ['./sessions-page.component.css']
})
export class SessionsPageComponent implements OnInit, OnDestroy {
  sessions$: Observable<Session[]> = this.sessionsService.allSessions$;
  selectedSession$: Observable<Session> = this.sessionsService.selectedSession$;
  // selectedSession: Session;

  // private subscription = new Subscription();

  constructor(private sessionsService: SessionsService) {
  }

  ngOnInit() {
    this.sessionsService.fetchAllSessions();
    // this.subscription.add(this.sessions$.subscribe(sessions => {
    //   this.selectedSession = sessions[0];
    // }));
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  onSelectionChanged(session: Session) {
    this.sessionsService.selectedSession.next(session);
    // this.selectedSession = session;
  }
}
