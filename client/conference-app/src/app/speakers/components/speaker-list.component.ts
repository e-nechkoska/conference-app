import { Component, Input } from '@angular/core';
import { Speaker } from '../models/speaker';

@Component({
  selector: 'ca-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css']
})
export class SpeakerListComponent {
  @Input() speakers: Speaker[];
}
