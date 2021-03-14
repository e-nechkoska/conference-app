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
}
