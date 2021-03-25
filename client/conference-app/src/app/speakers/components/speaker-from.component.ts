import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Speaker } from '../models/speaker';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ca-speaker-form',
  templateUrl: './speaker-form.component.html'
})
export class SpeakerFromComponent implements OnInit {
  @Input() speaker: Speaker;

  @Output() speakerSubmitted = new EventEmitter<Speaker>();
  @Output() speakerCanceled = new EventEmitter();

  speakerForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.speakerForm = this.createForm(this.speaker);
  }

  private createForm(speaker: Speaker): FormGroup {
    return this.fb.group({
      firstName: this.fb.control(speaker.first_name),
      lastName: this.fb.control(speaker.last_name),
      title: this.fb.control(speaker.title),
      company: this.fb.control(speaker.company),
      bio: this.fb.control(speaker.speaker_bio)
    });
  }

  onCanceledSpeaker() {
    this.speakerCanceled.emit();
  }

  onSpeakerSubmitted() {
    const updatedSpeaker: Speaker = {
      speaker_id: this.speaker.speaker_id,
      first_name: this.speakerForm.value.firstName,
      last_name: this.speakerForm.value.lastName,
      title: this.speakerForm.value.title,
      company: this.speakerForm.value.company,
      speaker_bio: this.speakerForm.value.bio,
    }
    this.speakerSubmitted.emit(updatedSpeaker);
  }
}
