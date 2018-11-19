import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {QuestionService} from "../question.service";
import {ResponseData} from "./responsedata.model";
import {Form, FormControl, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public answer: string;
  public data: ResponseData;

  constructor(private router: Router,
              private questionService: QuestionService,
              private toastService: ToastrService) { }

  ngOnInit() {
    this.getNewQuestion();
  }

  onNextClicked() {
    if (this.answer === this.data.answer) {
      this.toastService.success('You are right', 'GuessWho', {timeOut: 3000});
    } else {
      this.toastService.warning('You are mistaken', 'GuessWho', {timeOut: 3000});
    }
    this.getNewQuestion();
  }

  getNewQuestion() {
    this.answer = '';
    let mode = this.router.url.toLowerCase().substring(2);
    mode = mode.substr(mode.indexOf('/') + 1);
    this.questionService.getQuestion(mode)
      .subscribe(data => this.data = data);
  }

}
