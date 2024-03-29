import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgrammeComponent } from './components/programme/programme.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
  { path: '', redirectTo: 'programme', pathMatch: 'full' },
  { path: 'programme', component: ProgrammeComponent },
  { path: 'programme/:id', component: TicketsComponent },
  { path: 'history', component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
