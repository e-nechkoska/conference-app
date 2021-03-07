import { Injectable } from "@angular/core";

@Injectable()
export class SpeakerService {

  private speakers = [
    {
      id: 1,
      name: 'Speaker 1',
      active: true
    },
    {
      id: 2,
      name: 'Speaeker 2',
      active: false
    }
  ];

  getAllSpeakers() {
    return this.speakers;
  }

  addSpeaker(speaker) {
    this.speakers.push(speaker);
  }

}
