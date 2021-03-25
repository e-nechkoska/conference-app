import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Session } from '../models/session';

@Component({
  selector: 'ca-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.css']
})
export class SessionFormComponent implements OnInit {
  @Input() session: Session;

  @Output() sessionSubmitted = new EventEmitter<Session>();
  @Output() canceled = new EventEmitter();

  sessionForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.sessionForm = this.createForm(this.session);
  }

  onSubmit() {
    const updatedSession: Session = {
      session_id: this.session.session_id,
      session_name: this.sessionForm.value.name,
      session_description: this.sessionForm.value.description,
      session_length: this.sessionForm.value.length
    };
    this.sessionSubmitted.emit(updatedSession);
  }

  onCancel() {
    this.canceled.emit();
  }

  private createForm(session: Session): FormGroup {
    return this.fb.group({
      name: this.fb.control(session.session_name, Validators.required),
      description: this.fb.control(session.session_description),
      length: this.fb.control(session.session_length)
    });
  }
}
