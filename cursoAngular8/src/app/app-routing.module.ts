import { NgIfNgForComponent } from './../../../../algamoney-system/src/app/ng-if-ng-for/ng-if-ng-for.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"primeirocomponente",component:DataBindingComponent},
  { path:"ngifngfor",component:NgIfNgForComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
