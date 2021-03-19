import { Component, OnInit } from '@angular/core';
import { Session } from '../models/session';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ca-sessions',
  templateUrl: './sessions-page.component.html',
  styleUrls: ['./sessions-page.component.css']
})
export class SessionsPageComponent implements OnInit {
  sessions: Session[];
  selectedSession: Session;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sessions = this.route.snapshot.data.sessions;
    this.selectedSession = this.sessions[0];
  }

  onSelectionChanged(session: Session) {
    this.selectedSession = session;
  }
}
