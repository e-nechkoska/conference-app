import { Component, Input } from '@angular/core';
import { Speaker } from '../models/speaker';

@Component({
  selector: 'ca-selected-speaker',
  templateUrl: './selected-speaker.component.html',
  styleUrls: ['./selected-speaker.component.css']
})
export class SelectedSpeakerComponent {
  @Input() speaker: Speaker;
}
