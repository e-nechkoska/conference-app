import { Component, Input, OnInit } from '@angular/core';
import { Attendee } from '../models/attendee';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { group } from '@angular/animations';
import { AttendeesService } from '../services/attendees.service';

@Component({
  selector: 'ca-attendee-page',
  templateUrl: './attendee-page.component.html'
})
export class AttendeePageComponent implements OnInit {
  attendee: Attendee;
  attendeeForm: FormGroup;

  constructor(
    private router: Router,
    private attendeesService: AttendeesService,
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

  onDelete() {
    this.attendeesService.deleteAttendee(this.attendee).subscribe(() => {
      this.router.navigate(['attendees']);
    })
  }

  onSave() {
    const updatedAttendee: Attendee = {
      attendee_id: this.attendee.attendee_id,
      first_name: this.attendeeForm.value.firstName,
      last_name: this.attendeeForm.value.lastName,
      title: this.attendeeForm.value.title,
      company: this.attendeeForm.value.company,
      email: this.attendeeForm.value.email,
      phone_number: this.attendeeForm.value.phoneNumber
    }
    this.attendeesService.updateAttendee(updatedAttendee).subscribe(() => {
      this.router.navigate(['attendees']);
    })
  }
}
