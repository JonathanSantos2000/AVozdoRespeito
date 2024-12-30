import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header.responsive.component.css'],
})
export class HeaderComponent implements OnInit {
  menuVariable: boolean = false;
  menuVariableInstituicao: boolean = false;
  overlayVariable: boolean = false;
  btnclose: boolean = false;
  btnOpen: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.overlayVariable = !this.overlayVariable;
  }
  openMenuInstituicao() {
    this.menuVariable = !this.menuVariable;
    this.menuVariableInstituicao = !this.menuVariable;
  }

  fecharMenuInstituicao() {
    this.menuVariableInstituicao = false;
    this.overlayVariable = false;
    this.menuVariable = false;
  }
}
