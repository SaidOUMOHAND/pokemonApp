import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
/**
 * app-pokemon-form est un composant qu'on utilise ici
 * on a passé pokemon a  [ pokemon du composant  grace à @Input]
 * [pokemon entre []vient du composant utilisé  @Inupt] =app-pokemon-form
 * l'autre pokemon vient du composant courrant c à ire EditPokemonComponent
 * Globalement on invoque le composant EditPokemonComponent on passe le pokemon au composant PokemonFormComponent
 * a travers input ( )
 *      |----------------------|                                                    |----------------------|
 *      |  EditPokemonComponent| ----> attr pokemon  =affecter => "aInput pokemon ->|  PokemonFormComponent| 
 *      |----------------------|                                                     |----------------------|
 *    le arobase input est un input du composant pokemonFormComponent qui permet de lier les composants entre eux
 * Le but d'ajouter le composant  EditPokemonComponent est de pouvoir ré utiliser le formulaire dans
 *    
 *     
 */
@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center"> Editer {{ pokemon?.name}}</h2>
    <p *ngIf="pokemon" class= "center" >
      <img src={{pathImg}}{{pokemon.name}}.png >
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"> </app-pokemon-form>

  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {

  pokemon : Pokemon | undefined;
  pathImg:string="../assets/img/";
  constructor(
    private route: ActivatedRoute,
    private pokemonService : PokemonService
  ){
  }

  ngOnInit(): void {
    
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId)
      .subscribe(pokemone => this.pokemon = pokemone);

    } else {
      this.pokemon= undefined; 
    }
  }
}
