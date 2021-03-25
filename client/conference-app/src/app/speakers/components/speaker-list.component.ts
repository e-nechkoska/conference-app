import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Speaker } from '../models/speaker';

@Component({
  selector: 'ca-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css']
})
export class SpeakerListComponent {
  @Input() speakers: Speaker[];
  @Input() selectedSpeaker: Speaker;

  @Output() selectionChanged = new EventEmitter<Speaker>();

  select(speaker: Speaker) {
    this.selectionChanged.emit(speaker);
  }

  isSelected(speaker: Speaker) {
    return this.selectedSpeaker === speaker;
  }
}
