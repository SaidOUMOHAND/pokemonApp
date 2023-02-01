import { Component,OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import {POKEMONS}  from './mock-pokemon-list';
/**
 * Les templates contiennent les vues des composants
 */
/**
 * L'objectif est de découper la partie vue template et la logique class AppComponent
 * Un template avec un fichier dédié html
 */
@Component({
  selector: 'app-root',
  /*template: ` <h1> Welcome to  pokemons ! </h1>
      <p> Ceci est un paragraphe</p>
  `,*/
  templateUrl: 'app.components.html'
  
})
export class AppComponent implements OnInit{
  
  pokemoneList: Pokemon[]= POKEMONS;
  pathImg:string="../assets/img/"
  pokemoneSelected : Pokemon | undefined;

  /* premiere appli 
   ne jamais initialiser dans le constructeur comme suit : Il est vide
  la pluart du temps ***/
   /*
  constructor(){
    this.pokemoneList= ["Bulbizarre", "Salameche","Carapuce"] ;
  } */


  ngOnInit():void{
    //Le scope de la class n'est valable dans la méthode .C'est a dire il faut ajouter this
    console.table(this.pokemoneList);
   // this.selectPokemon(this.pokemoneList[0]);
  }

  /*Bonne info"*/
  /** 
   * l'interaction utilisateur se fera dans le template
   * 
   */
    selectPokemon1( event:MouseEvent){

       /**
        * En JavaScript 5 on ecrit ainsi 
        * 
       console.log("Vous avez cliqué sur le pokémon "+${$pokemonName})
       En JavaScript  6 on ecrit ainsi
        */
  
      const index: number = +(event.target as HTMLInputElement).value;
      console.log(`Liste de pokemons ${this.pokemoneList[index].name}`)

    }


    selectPokemon( pokemonId:String ){

      /**
       * En JavaScript 5 on ecrit ainsi 
       * 
      console.log("Vous avez cliqué sur le pokémon "+${$pokemonName})
      En JavaScript  6 on ecrit ainsi
       */
      const id = +pokemonId;
      //const index= id+1;
      /**
       * Gérer le cas  ou le pokemon n'est pas définie.
       * 
       */
      const pokemon: Pokemon | undefined = this.pokemoneList.find( pokemon => pokemon.id == id);
      if(pokemon){
        alert(`Vous avez cliqué sur : ${pokemon.name}`)

      } else {
        alert(`Vous avez demandé un pokemon qui n'existe pas`)

      }
      
       this.pokemoneSelected=pokemon;

   }  

    /**
     * Ajout d'un modèle 
     * 
     */
}
