import { Component, OnInit } from '@angular/core';
import { KnowMoreService } from 'src/app/services/know-more.service';
import { KnowMore } from 'src/app/Shared/models/more';

@Component({
  selector: 'app-saiba-mais',
  templateUrl: './saiba-mais.component.html',
  styleUrls: [
    './saiba-mais.component.css',
    './saiba-mais.responsive.component.css',
  ],
})
export class SaibaMaisComponent implements OnInit {
  know_more: KnowMore[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 4;

  constructor(private knowService: KnowMoreService) {
    this.know_more = knowService.getAll();
  }

  ngOnInit(): void {}

  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.know_more.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.know_more.length / this.itemsPerPage);
  }
}
