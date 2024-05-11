import { Injectable } from '@angular/core';
import { Reminder } from '../models/reminder.model';
import { Status } from '../models/status.model';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  private reminders: Reminder[] = [
    // Здесь можно добавить тестовые данные
  ];

  getStatuses(): Status[] {
    return [
      new Status('Новый'),
      new Status('Исполнен'),
      new Status('Запланирован'),
      new Status('Просрочен')
    ];
  }

  getReminders(): Reminder[] {
    return this.reminders;
  }

  updateReminder(updatedReminder: Reminder): void {
    // Логика обновления напоминания
  }
}
