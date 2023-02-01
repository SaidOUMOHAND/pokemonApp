import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { POKEMONS } from './mock-pokemon-list';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
/**
 * Route pour declarer les routes pour les composants
 * l'ordre est important
 *  le path c'est pour l'url
 * redirectTo pour la redirection  
 * component c'est le composant appelée ( html + ts)
 */
/**
 *   {path: '*',   component : PageNotFoundComponent} 
 * il faut la placer en dernier car les urls sont executés du haut en bas
 * par conséquent si une url est specifique empecher l'execution des autres urls
 * Exemple si on utilise la route pour touttes les urls  avec l'opérateur *( page not found )
 * on va avoir l'execution de cette url . Le process ne va pas continuer pour voir les autres navigation (route)
 * du coup la redirection ne sera jamais faite vers la bonne url
 */
const routes: Routes = [
  {path:'pokemons', component : ListPokemonComponent},
  {path:'pokemons/:id', component : DetailPokemonComponent},
  {path:'', redirectTo : 'pokemons' , pathMatch: 'full'},
  {path: '**',   component : PageNotFoundComponent}
];  

/**
 * Ca permet de faire de la navigation entre les pages
 */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
