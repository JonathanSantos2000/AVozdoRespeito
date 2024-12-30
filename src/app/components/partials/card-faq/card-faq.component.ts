import { Component, Input, OnInit } from '@angular/core';
import { RespostaAutor } from 'src/app/Shared/models/faq';

@Component({
  selector: 'app-card-faq',
  templateUrl: './card-faq.component.html',
  styleUrls: [
    './card-faq.component.css',
    './card-faq.responsive.component.css',
  ],
})
export class CardFaqComponent implements OnInit {
  @Input()
  id: string = '';
  @Input()
  titulo: string = '';
  @Input()
  resposta: RespostaAutor[] = [];

  status: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  changeStatus() {
    this.status = !this.status;
  }
}
