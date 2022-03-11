import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { RouterModule } from '@angular/router';

const ROUTES = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'aulas',
    component: ListComponent,
  },
  {
    path: 'aulas/:id',
    component: ListDetailsComponent,
  },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    ListComponent,
    ListDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
