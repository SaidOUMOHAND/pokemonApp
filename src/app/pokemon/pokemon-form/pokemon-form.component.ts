import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { FormsModule } from '@angular/forms';
/**
 * On peut ajouter plusieurs fichiers css mais un seul template 
 * On ajoute l'un ou l'autre
 */
@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']

})
export class PokemonFormComponent implements OnInit {

  types: string[];
  @Input() pokemon: Pokemon;
  private router:Router;

  constructor( private pokemonService: PokemonService){}
  ngOnInit(): void {
 this.types=this.pokemonService.getPOkemonTypeList();

  }
/**
 * Un pokemon a une proprieté
 * @param type 
 * @returns 
 */
  hasType(type: string):boolean{

    return  this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string){

    const isChecked= ($event.target as HTMLInputElement).checked;

    if (isChecked){
      this.pokemon.types.push(type);

    }else{
      const index= this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index,1);


    }

  }

  onSubmit(){
    console.log('Submit form !');
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }
  isTypesValid(type:string): boolean {
    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    } 
     if( this.pokemon.types.length > 2 && ! this.hasType(type)){
      return false;
      
    }
      return true;
    }

}
