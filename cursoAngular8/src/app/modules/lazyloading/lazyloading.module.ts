import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/componentes/header/header.component';
import { FooterComponent } from 'src/app/componentes/footer/footer.component';
import { HomelazyComponent } from 'src/app/componentes/homelazy/homelazy.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HomelazyComponent
  ]
})
export class LazyLoadingModule { }
