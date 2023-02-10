import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { Observable,tap,of, catchError } from 'rxjs';
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
/**
 * accès aux donnes
 * @returns 
 */

constructor(private http: HttpClient){

}
/**
 * Voir les arrow functions et fonctions anonymess
 * 
 * @returns  Observable qui contient la liste de pokemons
 */
getPokemonList() :Observable<Pokemon[]>{
 // return POKEMONS;
 return this.http.get<Pokemon[]>(`api/pokemons`).pipe(
  tap((response) => this.log(response)),
  catchError((error) => this.handleError(error,[]))
  );
}

getPokemonById(pokemoId: number):Observable<Pokemon| undefined> {

 // return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  return this.http.get<Pokemon>(`api/pokemons/${pokemoId}`).pipe(
    tap((response) => this.log(response)),
    catchError((error)=> (this.handleError(error,[]))
   ));
}

updatePokemon(pokemon: Pokemon) : Observable< null>{
  const httpOptions = {
    headers: new HttpHeaders({'Content-type' : 'application/json'}) 
  } ;
  return this.http.put('api/pokemons/',pokemon,httpOptions).pipe(
   tap(( response) => this.log(response)),
   catchError((error)=> this.handleError(error,null))    
   );
}

deletePokemonById(pokemoId: number):Observable< null> {
  const httpOptions = {
    headers: new HttpHeaders({'Content-type' : 'application/json'}) 
  } ;
  return this.http.delete(`api/pokemons/${pokemoId}`).pipe(
    tap(( response) => this.log(response)),
    catchError((error)=> this.handleError(error,null))    
    );
}


addPokemon(pokemon: Pokemon) : Observable< Pokemon>{
  const httpOptions = {
    headers: new HttpHeaders({'Content-type' : 'application/json'}) 
  } ;
  return this.http.post<Pokemon>('api/pokemons/',pokemon,httpOptions).pipe(
   tap(( response) => this.log(response)),
   catchError((error)=> this.handleError(error,null))    
   );
}


private log(response: Pokemon[] | Pokemon| undefined | any){
  console.table(response);
}

private handleError(error: Error, errorVlaue: [] | any ){
 console.error(error);
 return of(errorVlaue);

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
