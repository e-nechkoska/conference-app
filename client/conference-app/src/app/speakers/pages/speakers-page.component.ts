import { Component, OnInit } from '@angular/core';
import { Speaker } from '../models/speaker';
import { Observable } from 'rxjs';
import { SpeakersService } from '../services/speakers.service';

@Component({
  selector: 'ca-speakers',
  templateUrl: './speakers-page.component.html',
  styleUrls: ['./speakers-page.component.css']
})
export class SpeakersPageComponent implements OnInit {
  speakers$: Observable<Speaker[]> = this.speakersService.allSpeakers$;
  selectedSpeaker$: Observable<Speaker> = this.speakersService.selectedSpeaker$;

  constructor(private speakersService: SpeakersService) {
  }

  ngOnInit() {
    this.speakersService.fetchAllSpeakers();
  }

  onSelectionChanged(speaker: Speaker) {
    this.speakersService.selectedSpeaker.next(speaker);
  }
}
