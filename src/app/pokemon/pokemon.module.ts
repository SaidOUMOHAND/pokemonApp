import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
 
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';


const pokemonRoutes: Routes = [
  {path:'edit/pokemon/:id',component : EditPokemonComponent},
  {path:'edit/pokemon/add',component : AddPokemonComponent},
  {path:'pokemons', component : ListPokemonComponent},
  {path:'pokemons/:id', component : DetailPokemonComponent},
 
]; 


@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent
    
 
  ],
  /**
   * On fait forchild au lieu de
   * 
   * Il faut ajouter le modules FormsModule dans les deux modules
   * Pour créer des formulaires
   */
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
    
  ],
  providers : [PokemonService]

})
export class PokemonModule { }
