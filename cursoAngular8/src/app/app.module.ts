import { LazyloadingModule } from './modules/lazyloading/lazyloading.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgIfNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    NgIfNgForComponent,
    CrudComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LazyloadingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
