import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css', './cards.responsive.component.css'],
})
export class CardsComponent implements OnInit {
  @Input()
  title: string = '';
  @Input()
  text: string = '';
  @Input()
  labelButton: string = '';
  @Input()
  PageLink: string = '';
  constructor() {}

  ngOnInit(): void {}
}
