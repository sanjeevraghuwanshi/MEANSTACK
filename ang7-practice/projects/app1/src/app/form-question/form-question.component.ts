import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css'],
})
export class FormQuestionComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
  constructor() {}

  ngOnInit() {}
}
