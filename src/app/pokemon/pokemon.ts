/**
 * fait office de class Java (Object metier)
 */

export class Pokemon {
  hp: number ;
  cp: number;
  name: string ;
  picture: string;
  types: Array<string> ;
  created: Date ;
  id: number;

  constructor(  id: number,
    hp: number =100,
    cp: number =10,
    name: string ='Entrer un nom ...',
    picture: string,
    types: Array<string> =['normal'],
    created: Date = new Date()
 ) {

    this.id =id;
    this.hp= hp;
    this.cp =cp;
    this.name =name ;
    this.types =types;
    this.created =created;
    this.picture = picture;
  }
}