import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import {POKEMONS}  from '../mock-pokemon-list';
import { Router } from '@angular/router';
/**
 * Génération du composant avec la commande :
 *  ng generate component list-pokemon --inline-template=false
 * meme commande pour 
 */
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent {
  pokemoneList: Pokemon[]= POKEMONS;
  pathImg:string="../assets/img/"
constructor( private router : Router) {
 
};
goToPokemonDetail(pokemon: Pokemon){

  this.router.navigate(['/pokemons',pokemon.id])
}


}
