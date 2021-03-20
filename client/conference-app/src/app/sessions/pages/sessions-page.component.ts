import { Component, OnDestroy, OnInit } from '@angular/core';
import { Session } from '../models/session';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionsService } from '../services/sessions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ca-sessions',
  templateUrl: './sessions-page.component.html',
  styleUrls: ['./sessions-page.component.css']
})
export class SessionsPageComponent implements OnInit, OnDestroy {
  sessions: Session[];
  selectedSession: Session;
  private subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sessionsService: SessionsService
  ) {
  }

  ngOnInit() {
    this.sessions = this.activatedRoute.snapshot.data.sessions;
    const queryParamsSubscription = this.activatedRoute.queryParams.subscribe(({sessionId}) => {
      this.selectedSession = !sessionId
        ? this.sessions[0]
        : this.sessions.find(s => s.session_id === Number(sessionId));
    });
    this.subscription.add(queryParamsSubscription);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  navigateToSession(session: Session) {
    this.router.navigate(['sessions'], {
      queryParams: {
        sessionId: session.session_id
      }
    });
  }

  onSessionDeleted(session: Session) {
    this.sessionsService.delete(session).subscribe(() => {
      this.sessions = this.sessions.filter(s => s.session_id !== session.session_id);
      this.navigateToSession(this.sessions[0]);
    });
  }

  onSessionEdit(session: Session) {
    this.router.navigate(['session', session.session_id]);
  }

}
