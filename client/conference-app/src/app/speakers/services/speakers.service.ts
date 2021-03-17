import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Speaker } from '../models/speaker';

@Injectable()
export class SpeakersService {
  allSpeakers: Subject<Speaker[]> = new Subject<Speaker[]>();
  allSpeakers$: Observable<Speaker[]> = this.allSpeakers.asObservable();

  selectedSpeaker: Subject<Speaker> = new BehaviorSubject<Speaker>({} as Speaker);
  selectedSpeaker$: Observable<Speaker> = this.selectedSpeaker.asObservable();

  constructor(private http: HttpClient) {
  }

  fetchAllSpeakers() {
    return this.http.get<Speaker[]>('/server/api/v1/speakers').subscribe(speakers => {
      this.allSpeakers.next(speakers);
      this.selectedSpeaker.next(speakers[0]);
    });
  }
}
