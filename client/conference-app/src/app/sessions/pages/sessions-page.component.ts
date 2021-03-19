import { Component } from '@angular/core';
import { Session } from '../models/session';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ca-sessions',
  templateUrl: './sessions-page.component.html',
  styleUrls: ['./sessions-page.component.css']
})
export class SessionsPageComponent {
  sessions$: Observable<Session[]> = of([]);
  selectedSession$: Observable<Session> = of({} as Session);
  selectedSession: Session;

  constructor(private route: ActivatedRoute) {
    this.sessions$ = route.data.pipe(
      map(data => data.sessions)
    );

    this.selectedSession$ = this.sessions$.pipe(
      map(sessions => sessions[0])
    );
  }

  onSelectionChanged(session: Session) {
    this.selectedSession$ = of(session);

  }
}
