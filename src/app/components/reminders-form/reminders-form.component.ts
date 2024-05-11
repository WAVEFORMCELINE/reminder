import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Reminder } from '../../models/reminder.model';
import { ReminderService } from '../../services/reminder.service';
import { REMINDERS, STATUSES } from '../../reminder-list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reminder-form',
  templateUrl: './reminders-form.component.html',
  styleUrls: ['./reminders-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatSelectModule, MatFormFieldModule, FormsModule],
})
export class RemindersFormComponent implements OnInit {
  statuses = STATUSES 
  reminderId = this.route.snapshot.params['id'];
  reminder = this.reminderService.getReminderById(this.reminderId);
   constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reminderService: ReminderService,
  ) {    
  console.log(this.reminder)
  }
  reminderForm:FormGroup = new FormGroup({
    creationDateTime: new FormControl(this.reminder?.creationDateTime),
    completionDateTime: new FormControl(this.reminder?.completionDateTime),
    statusId: new FormControl(this.reminder?.statusId),
    shortDescription: new FormControl(this.reminder?.shortDescription),
    fullDescription: new FormControl(this.reminder?.fullDescription),
  })


  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.reminderForm.value)
    REMINDERS[REMINDERS.findIndex((x)=>x.id==this.reminderId)] = this.reminderForm.value
  }

  backButton(): void{
    location.replace('/reminders')
  }

}
