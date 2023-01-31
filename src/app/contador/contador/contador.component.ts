import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{ titulo }} </h1>
    <h3>La base es: <strong>{{ base }}</strong></h3>


    <button (click)="calcular(base * -1)" > - {{ base }}  </button>
    <span> {{ numero }} </span>
    <button (click)="calcular(base)"> + {{ base }} </button>
    <button (click)="reset()">Restablecer</button>
    
    `
})
export class ContadorComponent {

    titulo:string = 'Contador App';
    numero: number = 0;
  
    base: number = 4;
  
    calcular( valor: number) {
      this.numero += valor;
    }
    reset() {
      this.numero = 0;
    }

}