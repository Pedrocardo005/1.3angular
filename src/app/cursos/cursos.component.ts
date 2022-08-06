import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  
  // Inicializando a variável
  cursos: string[] = ['Java', 'Ext JS', 'Angular'];

  constructor() { 
    this.nomePortal = 'http://loaiane.training';
  }

  ngOnInit(): void {
  }

}
