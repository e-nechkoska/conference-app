import { Component, Input, OnInit } from '@angular/core';
import { Speaker } from '../models/speaker';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakersService } from '../services/speakers.service';

@Component({
  selector: 'ca-speaker-page',
  templateUrl: './speaker-page.component.html'
})
export class SpeakerPageComponent implements OnInit {
  speaker: Speaker;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private speakersService: SpeakersService
  ) {
  }

  ngOnInit() {
    this.speaker = this.activatedRoute.snapshot.data.speaker;
  }

  onCancel() {
    this.navigateToSpeakers(this.speaker.speaker_id);
  }

  navigateToSpeakers(speakerId: number) {
    this.router.navigate(['speakers'], {
      queryParams: {
        speakerId: this.speaker.speaker_id
      }
    })
  }

  onSubmit(speaker: Speaker) {
    this.speakersService.updateSpeaker(speaker).subscribe((updatedSpeaker: Speaker) =>
    this.navigateToSpeakers(speaker.speaker_id)
    );
  }
}
