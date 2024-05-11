import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reminder } from '../../models/reminder.model';

@Component({
  selector: 'app-reminders-list',
  templateUrl: './reminders-list.component.html',
  styleUrls: ['./reminders-list.component.scss']
})

export class RemindersListComponent implements OnInit {
  reminder!: Reminder; // Объявите переменную напоминания

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Создайте новый объект напоминания с помощью конструктора
    this.reminder = new Reminder('', '', new Date(), new Date(), {name: ''});
  }

  saveReminder(): void {
    // Логика сохранения напоминания
    console.log('Напоминание для сохранения:', this.reminder);
  }
}