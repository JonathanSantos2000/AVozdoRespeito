import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BannerComponent } from './components/pages/home/banner/banner.component';
import { CardsComponent } from './components/partials/cards/cards.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { FooterMenuComponent } from './components/partials/footer/footer-menu/footer-menu.component';
import { BigCardLeftComponent } from './components/partials/big-card-left/big-card-left.component';
import { BigCardRightComponent } from './components/partials/big-card-right/big-card-right.component';
import { SobreProjetoComponent } from './components/pages/sobre-projeto/sobre-projeto.component';
import { SaibaMaisComponent } from './components/pages/saiba-mais/saiba-mais.component';
import { SmallCardComponent } from './components/partials/small-card/small-card.component';
import { PageMaisComponent } from './components/pages/page-mais/page-mais.component';
import { ContatoProjetoComponent } from './components/pages/contato-projeto/contato-projeto.component';
import { SobreComponent } from './components/pages/intituicao/sobre/sobre.component';
import { FaqComponent } from './components/pages/intituicao/faq/faq.component';
import { ContatoComponent } from './components/pages/intituicao/contato/contato.component';
import { CardFaqComponent } from './components/partials/card-faq/card-faq.component';
import { CardFaqExtraComponent } from './components/partials/card-faq-extra/card-faq-extra.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BannerComponent,
    CardsComponent,
    FooterComponent,
    FooterMenuComponent,
    BigCardLeftComponent,
    BigCardRightComponent,
    SobreProjetoComponent,
    SaibaMaisComponent,
    SmallCardComponent,
    PageMaisComponent,
    ContatoProjetoComponent,
    SobreComponent,
    FaqComponent,
    ContatoComponent,
    CardFaqComponent,
    CardFaqExtraComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
