import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.css'],
})
export class FooterMenuComponent implements OnInit {
  @Input()
  title: string = '';
  @Input()
  links: { titulo: string; endereco: string }[] = [];

  status: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  changeStatus() {
    this.status = !this.status;
  }
}
