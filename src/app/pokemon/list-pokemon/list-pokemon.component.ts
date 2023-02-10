import { Component ,OnInit} from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
/**
 * Génération du composant avec la commande :
 *  ng generate component list-pokemon --inline-template=false
 * meme commande pour 
 */
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [

  ],
  /**
   * On declare ici le service si on le veut que dans le scope du composant
   * providers: [PokemonService]
   * */
})
export class ListPokemonComponent  implements OnInit{
  pokemoneList: Pokemon[] ;
  pathImg:string="../assets/img/"
constructor( private router : Router, 
  private pokemonService : PokemonService) {
 
};
goToPokemonDetail(pokemon: Pokemon){

  this.router.navigate(['/pokemons',pokemon.id])
}
/**
 * this.pokemonService.getPokemonList() represente observable
 */
ngOnInit(): void {
 
  this.pokemonService.getPokemonList()
  .subscribe(pokemoneList => this.pokemoneList = pokemoneList);
}
}
