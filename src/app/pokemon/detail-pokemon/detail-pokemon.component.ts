import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
 
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
/**
 * On veut récupérer l'id de l'url pour cela il faut utiliser le 
 * service ActivateRoute d'angular pour récupérer l'id 
 * 
 */
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent  implements OnInit {
  pokemonList:  Pokemon[];
  pokemon : Pokemon| undefined;

  pathImg:string="../assets/img/";

    constructor( private route: ActivatedRoute,private router:Router
      ,private pokemonService : PokemonService) {
      
    }
  
  ngOnInit( ) {
     
    /**
     * la  ligne qui permet de récupérer l'id depuis l'url 
     * 
     *  */  

    const pokemonId: string|null =  this.route.snapshot.paramMap.get('id');
    if( pokemonId){
     // this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
     this.pokemon =this.pokemonService.getPokemonById(+pokemonId);
    } else {
      this.pokemon= undefined;
    }
    
  }
  goToPokemonLisT(){
    this.router.navigate(['/pokemons']);

  }
}
