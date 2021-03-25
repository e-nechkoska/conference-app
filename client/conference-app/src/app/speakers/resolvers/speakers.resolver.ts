import { Injectable } from '@angular/core';
import { SpeakersService } from '../services/speakers.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Speaker } from '../models/speaker';

@Injectable()
export class SpeakersResolver implements Resolve<Speaker[]>{
  constructor(private speakersService: SpeakersService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Speaker[]> | Promise<Speaker[]> | Speaker[] {
    return this.speakersService.fetchAllSpeakers();
  }
}
