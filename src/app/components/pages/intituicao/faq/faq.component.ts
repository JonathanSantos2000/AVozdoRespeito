import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/services/faq.service';
import { Question } from 'src/app/Shared/models/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css', './faq.responsive.component.css'],
})
export class FaqComponent implements OnInit {
  questions: Question[] = [];

  constructor(private questionService: FaqService) {
    this.questions = questionService.getAll();
  }

  ngOnInit(): void {}
}
