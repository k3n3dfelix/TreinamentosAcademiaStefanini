import { HomelazyComponent } from './../../componentes/homelazy/homelazy.component';
import { HeaderComponent } from './../../componentes/header/header.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from 'src/app/componentes/footer/footer.component';

const routes: Routes = [
  {path: '', component: HomelazyComponent

  }
];

@NgModule({
  declarations: [FooterComponent, HeaderComponent, HomelazyComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
