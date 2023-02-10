import { Injectable } from '@angular/core';
/**
 * Import de InMemoryDbService pour simuler une BD
 */
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import {POKEMONS} from './pokemon/mock-pokemon-list';
@Injectable({
  providedIn: 'root'
})
/**
 * faire une implémentation 
 */
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb(){
    /**
     * On ne peut pas passer directement une constante mais il faut l'assigner
     */
    const pokemons =POKEMONS;
    return {pokemons};

  }
}
