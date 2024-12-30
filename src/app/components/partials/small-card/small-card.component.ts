import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  @Input()
  id: string = '';
  @Input()
  titulo: string = '';
  @Input()
  img: string = '';
  @Input()
  resumo: string = '';
  @Input()
  conteudoCompleto: string = '';
  @Input()
  referencia: string = '';
  @Input()
  link: string = '';

  constructor() {}

  ngOnInit(): void {}
}
