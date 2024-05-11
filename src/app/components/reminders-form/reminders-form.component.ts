import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reminder } from '../../models/reminder.model';
import { ReminderService } from '../../services/reminder.service';

@Component({
  selector: 'app-reminder-form',
  templateUrl: './reminders-form.component.html',
  styleUrls: ['./reminders-form.component.scss']
})
export class RemindersFormComponent implements OnInit {
  reminder: Reminder = new Reminder('', '', new Date(), new Date(), {name: ''});

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reminderService: ReminderService
  ) {}

  ngOnInit(): void {
    // Получение данных напоминания по ID из URL
    const reminderId = this.route.snapshot.params['id'];
    // Здесь нужно загрузить данные напоминания по ID
    // this.reminder = this.reminderService.getReminderById(reminderId);
  }

  saveReminder(): void {
    this.reminderService.updateReminder(this.reminder);
    this.router.navigate(['/reminders']);
  }
}
