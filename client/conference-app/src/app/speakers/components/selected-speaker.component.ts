import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Speaker } from '../models/speaker';

@Component({
  selector: 'ca-selected-speaker',
  templateUrl: './selected-speaker.component.html',
  styleUrls: ['./selected-speaker.component.css']
})
export class SelectedSpeakerComponent {
  @Input() speaker: Speaker;

  @Output() deleted = new EventEmitter<Speaker>();
  @Output() edited = new EventEmitter<Speaker>();

  onDelete() {
    this.deleted.emit(this.speaker);
  }

  onEdit() {
    this.edited.emit(this.speaker);
  }
}
