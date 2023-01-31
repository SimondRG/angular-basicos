import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes      : string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];  
  heroeBorrado: string= '';

  borrarHeroe(): void{
    
    // con el operador || ayuda por si se retorna undefined entonces que retorne mejor un string vacio
    this.heroeBorrado = this.heroes.shift() || '';    

  }
}
