import { Component, Input } from '@angular/core';
import { Speaker } from '../models/speaker';

@Component({
  selector: 'ca-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent {
  @Input() speaker: Speaker;
}
