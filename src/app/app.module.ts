import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';

/**
 * declarations on peut déclarer les directives les pipes et les composants;
 *  Exports sous-ensemble de classes de vues à exporter
 * Imports: concernent toutes les classes nécéssaires au fonctionnement du module on import des modules
 * Providers permet de fournir un service au module les services et l'injection de dépendances 
 * Bootsrap ne concerne que le module racine
 * Le systeme de module javascript est totalement différent du systeme 
 * Pour générer un nouveau module onn fait generate module pokemon
 */
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  /**
   * l'ordre est important si on charge les routes racine delcaré dans app-routing.module.ts alors 
   * ca ne marche pas normalement . Il faut déclarer tout d'abord le module  pokemone
   */
  imports: [
    BrowserModule,
     PokemonModule,
    AppRoutingModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
