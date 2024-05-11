import { Status } from './status.model';

export class Reminder {
  constructor(
    public shortDescription: string,
    public fullDescription: string,
    public creationDateTime: Date,
    public completionDateTime: Date,
    public status: Status
  ) {}
}