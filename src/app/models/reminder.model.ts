import { Status } from './status.model';

export class Reminder {
  constructor(
    public id: number,
    public shortDescription: string,
    public fullDescription: string,
    public creationDateTime: Date,
    public completionDateTime: Date,
    public statusId: number,
  ) {}
}