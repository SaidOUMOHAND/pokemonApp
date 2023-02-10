/**
 * ng generate component pokemon/add-pokemon
 */
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-add-pokemon',
  template: `
    <h2>
      add-pokemon works!
    </h2>

<app-pokemon-form [pokemon]="pokemon"> </app-pokemon-form>

  `,
  styles: [
  ]
})
export class AddPokemonComponent  implements OnInit{
  pathImg:string="../assets/img/";
  @Input() pokemon : Pokemon;
  isAddForm: boolean;
    types : string [];
  constructor( 
    private pokemonService: PokemonService,
    private router : Router
  ){}
  ngOnInit(){
    this.types =this.pokemonService.getPOkemonTypeList();
 



  }
}
