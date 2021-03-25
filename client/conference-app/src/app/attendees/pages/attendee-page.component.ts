import { Component, Input, OnInit } from '@angular/core';
import { Attendee } from '../models/attendee';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { group } from '@angular/animations';

@Component({
  selector: 'ca-attendee-page',
  templateUrl: './attendee-page.component.html'
})
export class AttendeePageComponent implements OnInit {
  attendee: Attendee;
  attendeeForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.attendee = this.activatedRoute.snapshot.data.attendee;
    this.attendeeForm = this.createFormGroup(this.attendee);
  }

  private createFormGroup(attendee: Attendee): FormGroup {
    return this.fb.group({
      firstName: this.fb.control(attendee.first_name),
      lastName: this.fb.control(attendee.last_name),
      title: this.fb.control(attendee.title),
      company: this.fb.control(attendee.company),
      email: this.fb.control(attendee.email),
      phoneNumber: this.fb.control(attendee.phone_number)
    })
  }

  onFirstNameClick() {
    console.log("first name clicked!")
  }
}
