import { Injectable } from '@angular/core';
import { Reminder } from '../models/reminder.model';
import { REMINDERS } from '../reminder-list'
import { Status } from '../models/status.model';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  private reminders: Reminder[] = [
    // Здесь можно добавить тестовые данные
  ];

  getReminders(): Reminder[] {
    return this.reminders;
  }

  getReminderById(reminderId: number): Reminder | null{
    return REMINDERS.find(reminder => reminder.id == reminderId) || null
  }

  updateReminder(updatedReminder: Reminder | null): void {
  }

}
