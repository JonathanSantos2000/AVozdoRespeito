import { Injectable } from '@angular/core';
import { KnowMore } from '../Shared/models/more';
import { know_more } from '../Shared/data/more';

@Injectable({
  providedIn: 'root',
})
export class KnowMoreService {
  constructor() {}

  getAll(): KnowMore[] {
    return know_more;
  }

  getKnowById(KnowMoreId: string): KnowMore {
    return (
      this.getAll().find((know) => know.id == KnowMoreId) ?? new KnowMore()
    );
  }
}
