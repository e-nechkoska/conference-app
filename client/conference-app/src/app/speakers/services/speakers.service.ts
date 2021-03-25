import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Speaker } from '../models/speaker';

@Injectable()
export class SpeakersService {
  constructor(private http: HttpClient) {
  }

  fetchAllSpeakers(): Observable<Speaker[]> {
    return this.http.get<Speaker[]>('/server/api/v1/speakers');
  }

  delete(speaker: Speaker) {
    return this.http.delete<Speaker>(`/server/api/v1/speakers/${speaker.speaker_id}`);
  }

  fetchSpeaker(speakerId: number): Observable<Speaker> {
    return this.http.get<Speaker>(`/server/api/v1/speakers/${speakerId}`);
  }

  updateSpeaker(speaker: Speaker) {
    return this.http.put<Speaker>(`/server/api/v1/speakers/${speaker.speaker_id}`, speaker);
  }
}
