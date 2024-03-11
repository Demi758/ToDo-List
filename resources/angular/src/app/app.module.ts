import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TaskEditComponent } from './components/task-edit/task-edit.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TasksComponent,
  },
  {
    path: 'edit/:id',
    component: TaskEditComponent,
  },
];

@NgModule({
  declarations: [AppComponent, TasksComponent, TaskEditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
