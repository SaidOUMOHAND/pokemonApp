import { style } from '@angular/animations';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  /**
   *  Lorsqu'on crée une directive le selector doit etre entre crochets 
   *  On va binder l'attribut à l'element du DOM
   */
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
 
  /**
   * Ajout d'un attribut pour récupérer l'élement sur lequel est appliqué
   * la directive  la référence pour l'element  
   * ElementRef vient du anglar core
   * 
   *  */ 
  
  private initialColor: string ='#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;
  private defaultStyleBorder: string = 'solid';
  private initialStyleBorder: string = 'dotted';


  constructor(private el: ElementRef) { 
    this.setHight(180);
    this.setBorder('#f5f5f5');
    this.setTrait('none');

  }
  /**
   *  Pour ajouter une prop on ajoute et l'annotation input 
   *  On attribue la valeur par défaut 
   */
  @Input('pkmnBorderCard')  borderColor:string;  // avec alias
  @Input('pkmnBorderCard')  typeTrait:string; 
  // @Input() pkmnBorderCard:String;


    setHight(height: number){
      this.el.nativeElement.style.height=` ${height}px`;


    }

    
    setTrait( typeTrait : string){
      this.el.nativeElement.style.border=typeTrait;

    }
    setBorder(color: string){

      let colorBr='solid 4px ' + color;
      this.el.nativeElement.style.border=colorBr;
       
      

    }

  @HostListener('mouseenter') onMouseEnter() {
    console.log("entrer ");
    this.setTrait(this.initialStyleBorder);
    this.setBorder(this.borderColor ||this.defaultColor);
   
    
    };

    @HostListener('mouseleave') onMouseLeave() {
      this.setTrait(this.defaultStyleBorder);
      this.setBorder(this.initialColor);
      
      console.log("sortie ");
      };





}
