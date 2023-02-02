import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
/**
 * l'attribut provideIn permet de définir le scope du service. Ici 
 * root (racine) cela veut dire qu'il est disponible dans toute l'application
 * POur l'injecter dans le scope du module On efface la ligne provideIN du service
 * puis l'ajouter dans providers du module
 */
@Injectable(
 // { providedIn: 'root'}
 )
export class PokemonService {

getPokemonList() : Pokemon[]{
  return POKEMONS;

}
getPokemonById(pokemonId: number):Pokemon| undefined {

  return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  
}

getPOkemonTypeList() : string[]{
return [
'Plante',
'Feu',
'Eau',
'Isecte',
'Normal',
'Electrik',
'Poison',
'Fée',
'Vol',
'Combat',
'Psy'
]

}

}
