import { AtividadeService } from './../../service/atividade.service';
import { CriarAtividadeComponent } from './criar-atividade/criar-atividade.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListarAtividadesComponent } from './listar-atividades/listar-atividades.component';



@NgModule({
  declarations: [ CriarAtividadeComponent, ListarAtividadesComponent ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [ CriarAtividadeComponent ]
})
export class AtividadeModule { }
