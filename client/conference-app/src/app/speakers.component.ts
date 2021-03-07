import { Component, OnInit } from '@angular/core';
import { SpeakerService } from './speaker.service';

@Component({
  selector: 'ca-speakers',
  template: `
    <ul>
      <li *ngFor="let s of speakers">
        {{s.id}} - {{s.name}}
      </li>
    </ul>
  `
})
export class SpeakersComponent implements OnInit {
  speakers = [];

  constructor(private speakerService: SpeakerService) {
  }

  ngOnInit() {
    this.speakers = this.speakerService.getAllSpeakers();
  }
}
