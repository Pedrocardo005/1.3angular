import { NgModule } from '@angular/core';
// Contém as principais diretivas que irá utilizar
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  // Quais coisas desses módulos você quer exportar a outro módulo
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
