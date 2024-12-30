import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-faq-extra',
  templateUrl: './card-faq-extra.component.html',
  styleUrls: [
    './card-faq-extra.component.css',
    './card-faq-extra.responsive.component.css',
  ],
})
export class CardFaqExtraComponent implements OnInit {
  @Input()
  TipoExtra: string = '';
  @Input()
  TituloExtra: string = '';
  @Input()
  link: string = '';

  status: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  openExtra() {
    this.status = !this.status;
  }
}
