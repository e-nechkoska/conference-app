import { Component, OnDestroy, OnInit } from '@angular/core';
import { Speaker } from '../models/speaker';
import { Observable, Subscription } from 'rxjs';
import { SpeakersService } from '../services/speakers.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'ca-speakers',
  templateUrl: './speakers-page.component.html',
  styleUrls: ['./speakers-page.component.css']
})
export class SpeakersPageComponent implements OnInit, OnDestroy {
  speakers: Speaker[];
  selectedSpeaker: Speaker;
  private subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private speakersService: SpeakersService
  ) {
  }

  ngOnInit() {
    this.speakers = this.activatedRoute.snapshot.data.speakers;
    const queryParamsSubscription = this.activatedRoute.queryParams.subscribe(({speakerId}) => {
      this.selectedSpeaker = !speakerId
        ? this.speakers[0]
        : this.speakers.find(s => s.speaker_id === Number(speakerId));
    });
    this.subscription.add(queryParamsSubscription);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  navigateToSpeaker(speaker: Speaker) {
    this.router.navigate(['/speakers'], {
      queryParams: {
        speakerId: speaker.speaker_id
      }
    });
  }

  onSpeakerDeleted(speaker: Speaker) {
    this.speakersService.delete(speaker).subscribe(() => {
      this.speakers = this.speakers.filter(s => s.speaker_id !== speaker.speaker_id);
      this.navigateToSpeaker(this.speakers[0]);
    })
  }

  onSpeakerEdited(speaker: Speaker) {
    this.router.navigate(['/speaker', speaker.speaker_id]);
  }
}
