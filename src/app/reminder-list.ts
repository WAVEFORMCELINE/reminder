import { Reminder } from './models/reminder.model'
import { Status } from './models/status.model'

export const REMINDERS: Reminder[] = [
   {id: 1, shortDescription: 'Описание1', fullDescription: 'ДлинноеОписание1', creationDateTime: new Date('2024-01-06'), completionDateTime: new Date('2024-01-11'), statusId: 1},
   {id: 2, shortDescription: 'Описание2', fullDescription: 'ДлинноеОписание2', creationDateTime: new Date('2024-02-13'), completionDateTime: new Date('2024-11-06'), statusId: 2},
   {id: 3, shortDescription: 'Описание3', fullDescription: 'ДлинноеОписание3', creationDateTime: new Date('2024-03-11'), completionDateTime: new Date('2024-07-15'), statusId: 3},
   {id: 4, shortDescription: 'Описание4', fullDescription: 'ДлинноеОписание4', creationDateTime: new Date('2024-11-06'), completionDateTime: new Date('2024-11-06'), statusId: 4},
   {id: 5, shortDescription: 'Описание5', fullDescription: 'ДлинноеОписание5', creationDateTime: new Date('2024-11-06'), completionDateTime: new Date('2024-11-06'), statusId: 1},
   {id: 6, shortDescription: 'Описание6', fullDescription: 'ДлинноеОписание6', creationDateTime: new Date('2024-11-06'), completionDateTime: new Date('2024-11-06'), statusId: 2},
   {id: 7, shortDescription: 'Описание7', fullDescription: 'ДлинноеОписание7', creationDateTime: new Date('2024-11-06'), completionDateTime: new Date('2024-11-06'), statusId: 3},
   {id: 8, shortDescription: 'Описание8', fullDescription: 'ДлинноеОписание8', creationDateTime: new Date('2024-11-06'), completionDateTime: new Date('2024-11-06'), statusId: 4},
   {id: 9, shortDescription: 'Описание9', fullDescription: 'ДлинноеОписание9', creationDateTime: new Date('2024-11-06'), completionDateTime: new Date('2024-11-06'), statusId: 1},

]

export const STATUSES: Status[] = [
   {id: 1, name: "Новый"},
   {id: 2, name: "Исполнен"},
   {id: 3, name: "Запланирован"},
   {id: 4, name: "Просрочен"},
]

// private id: number,
// public shortDescription: string,
// public fullDescription: string,
// public creationDateTime: Date,
// public completionDateTime: Date,
// public statusId: number