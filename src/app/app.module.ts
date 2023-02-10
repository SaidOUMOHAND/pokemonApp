import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';
/**
 * Import de http qui sera utilisé partout dans le code
 */
import {HttpClientModule} from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service'
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

  /**
   * MORALITE :
   *  - Tout d'abord lorsqu'on lance angular la premier module qui est chargé est le module AppComponent
   *    Ensuite il lance les modules qui lui sont liés BrowserModule puis PokemonModule 
   *    Dans PokemonModule on a déclaré les routes (Navigation) 
   *    Puis angular lance le module app-routing.modules dans lequel on a définit l'url si on charge 
   *    un pokemon avec un id inexhistant ou bien si on invoque une url qui n'est pas gérée par l'application
   *    Remarque : on peut déclarer un module pour le routing app-routing.module.ts ou bien declarer les routes
   *    dans le module?
   * /**
   * Import du module  http qui sera utilisé partout dans le code
   * Pour pouvoir simuler l'API Rest qui vient du Back End + BD angular permet de simuler pour avoir un code fonctionnel
   *    npm install angular-in-memory-web-api --save-dev
   * dataEncapsulation POUR éviter l'encapsulation des données
   */
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation :false}),
    PokemonModule,
    AppRoutingModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
