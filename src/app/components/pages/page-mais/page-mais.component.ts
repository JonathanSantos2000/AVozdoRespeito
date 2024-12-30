import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KnowMoreService } from 'src/app/services/know-more.service';
import { KnowMore } from 'src/app/Shared/models/more';

@Component({
  selector: 'app-page-mais',
  templateUrl: './page-mais.component.html',
  styleUrls: [
    './page-mais.component.css',
    './page-mais.responsive.component.css',
  ],
})
export class PageMaisComponent implements OnInit {
  know_more: KnowMore = {
    id: '',
    titulo: '',
    img: '',
    resumo: '',
    conteudoCompleto: [],
    referencia: '',
    link: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private knowService: KnowMoreService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        try {
          this.know_more = this.knowService.getKnowById(params['id']);
        } catch (err: any) {
          console.error('Erro ao buscar KnowMore:', err);
        }
      }
    });
  }
}
