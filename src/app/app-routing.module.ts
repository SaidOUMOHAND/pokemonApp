import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
