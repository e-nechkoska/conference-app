import { Component, OnInit } from '@angular/core';
import { Speaker } from '../models/speaker';
import { Observable } from 'rxjs';
import { SpeakersService } from '../services/speakers.service';

@Component({
  selector: 'ca-speakers',
  templateUrl: './speakers-page.component.html'
})
export class SpeakersPageComponent implements OnInit {
  allSpeakers$: Observable<Speaker[]>;

  constructor(private speakersService: SpeakersService) {
  }

  ngOnInit() {
    this.allSpeakers$ = this.speakersService.fetchAllSpeakers();
  }
}
