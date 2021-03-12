import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../services/sessions.service';
import { Session } from '../models/session';
import { Observable } from 'rxjs';

@Component({
  selector: 'ca-sessions',
  templateUrl: './sessions-page.component.html'
})
export class SessionsPageComponent implements OnInit {
  allSessions$: Observable<Session[]>;

  constructor(private sessionsService: SessionsService) {
  }

  ngOnInit() {
    this.allSessions$ = this.sessionsService.fetchAllSessions();
  }

}
