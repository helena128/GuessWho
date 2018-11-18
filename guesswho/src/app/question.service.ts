import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseData} from './question/responsedata.model';
import {Observable} from "rxjs/index";

@Injectable()
export class QuestionService {

  private _url = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getQuestion(mode: string): Observable<ResponseData> {
    return this.http.get<ResponseData>(this._url + '/question?mode=' + mode);
  }
}
