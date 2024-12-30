import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SobreProjetoComponent } from './components/pages/sobre-projeto/sobre-projeto.component';
import { SaibaMaisComponent } from './components/pages/saiba-mais/saiba-mais.component';
import { PageMaisComponent } from './components/pages/page-mais/page-mais.component';
import { SobreComponent } from './components/pages/intituicao/sobre/sobre.component';
import { FaqComponent } from './components/pages/intituicao/faq/faq.component';
import { ContatoComponent } from './components/pages/intituicao/contato/contato.component';
import { ContatoProjetoComponent } from './components/pages/contato-projeto/contato-projeto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobreoprojeto', component: SobreProjetoComponent },
  { path: 'saibamais', component: SaibaMaisComponent },
  { path: 'content/:id', component: PageMaisComponent },
  { path: 'contato', component: ContatoProjetoComponent },
  { path: 'intituicao/sobre', component: SobreComponent },
  { path: 'intituicao/faq', component: FaqComponent },
  { path: 'intituicao/contato', component: ContatoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Restaura a posição do scroll
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
