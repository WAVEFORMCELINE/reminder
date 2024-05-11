import { Routes } from '@angular/router';
import { RemindersListComponent } from './components/reminders-list/reminders-list.component';
import { RemindersFormComponent } from './components/reminders-form/reminders-form.component';

const routes: Routes = [
  { path: '', component: RemindersListComponent },
  { path: 'edit/:id', component: RemindersFormComponent }
];

export default routes;