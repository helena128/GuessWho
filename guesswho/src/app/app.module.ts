import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { QuestionService } from './question.service';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'question/:mode', component: QuestionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    MatRadioModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
