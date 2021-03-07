import { Component, OnInit } from '@angular/core';
import { SpeakerService } from './speaker.service';

@Component({
  selector: 'ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  speakers = [];
  showAll = false;

  constructor(private speakerService: SpeakerService) {
  }

  ngOnInit() {
    this.speakers = this.speakerService.getAllSpeakers();
  }

  showAllSpeakers() {
    this.showAll = !this.showAll;
  }

  addNewSpeaker() {
    this.speakerService.addSpeaker({
      id: 3,
      name: 'Speaker 3'
    })
  }
}
