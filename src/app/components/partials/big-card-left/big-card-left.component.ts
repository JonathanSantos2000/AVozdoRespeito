import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card-left',
  templateUrl: './big-card-left.component.html',
  styleUrls: ['./big-card-left.component.css'],
})
export class BigCardLeftComponent implements OnInit {
  @Input()
  img: string = '';
  @Input()
  title: string = '';
  @Input()
  text: string = '';

  constructor() {}

  ngOnInit(): void {}
}
