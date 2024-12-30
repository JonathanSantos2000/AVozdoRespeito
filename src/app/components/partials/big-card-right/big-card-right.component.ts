import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card-right',
  templateUrl: './big-card-right.component.html',
  styleUrls: ['./big-card-right.component.css'],
})
export class BigCardRightComponent implements OnInit {
  @Input()
  img: string = '';
  @Input()
  title: string = '';
  @Input()
  text: string = '';
  constructor() {}

  ngOnInit(): void {}
}
