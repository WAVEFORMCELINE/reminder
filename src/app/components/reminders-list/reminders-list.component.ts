import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { REMINDERS } from '../../reminder-list';
import { STATUSES } from '../../reminder-list';
import { NgFor } from '@angular/common'
import { Reminder } from '../../models/reminder.model';

@Component({
  selector: 'app-reminders-list',
  templateUrl: './reminders-list.component.html',
  styleUrls: ['./reminders-list.component.scss'],
  standalone: true,
  imports: [NgFor, MatTableModule]
})

export class RemindersListComponent implements OnInit {
  reminders = REMINDERS 
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}
  displayedColumns: string[] = ['status', 'shortDescription', 'creationDateTime', 'completionDateTime'];
  dataSource = REMINDERS;

  ngOnInit(): void {
    // this.reminder = new Reminder(0, 'faefaefaef', '', new Date(), new Date(), 0);
  }

  showForm(row:Reminder) {
    location.replace('/reminders/'+row.id)
  }

  getStatus(statusId:number): string | undefined{
    return STATUSES.find(x=>x.id==statusId)?.name 
  }
}