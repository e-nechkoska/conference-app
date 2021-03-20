import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from '../models/session';
import { SessionsService } from '../services/sessions.service';

@Component({
  selector: 'ca-session-page',
  templateUrl: './session-page.component.html',
  styleUrls: ['./session-page.component.css']
})
export class SessionPageComponent implements OnInit {
  session: Session;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sessionsService: SessionsService
  ) {
  }

  ngOnInit() {
    this.session = this.activatedRoute.snapshot.data.session;
  }

  onCancel() {
    this.goToSessions(this.session.session_id);
  }

  onSessionSubmitted(session: Session) {
    this.sessionsService.update(session)
      .subscribe((updatedSession: Session) =>
        this.goToSessions(updatedSession.session_id)
      );
  }

  private goToSessions(sessionId: number) {
    this.router.navigate(['sessions'], {
      queryParams: {
        sessionId: sessionId
      }
    });
  }
}
