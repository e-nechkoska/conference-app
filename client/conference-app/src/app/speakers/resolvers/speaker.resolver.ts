import { Speaker } from '../models/speaker';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SpeakersService } from '../services/speakers.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SpeakerResolver implements Resolve<Speaker> {
  constructor(private speakersService: SpeakersService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Speaker> | Promise<Speaker> | Speaker {
    return this.speakersService.fetchSpeaker(Number(route.params.speakerId));
  }
}
