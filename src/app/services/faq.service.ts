import { Injectable } from '@angular/core';
import { Question } from '../Shared/models/faq';
import { question } from '../Shared/data/FAQ';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  constructor() {}
  getAll(): Question[] {
    return question;
  }
}
