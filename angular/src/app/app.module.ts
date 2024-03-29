import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgrammeComponent } from './components/programme/programme.component';
import { HistoryComponent } from './components/history/history.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { HttpClientModule } from '@angular/common/http';
import { AutoFocusDirectiveDirective } from './auto-focus-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProgrammeComponent,
    HistoryComponent,
    TicketsComponent,
    AutoFocusDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
