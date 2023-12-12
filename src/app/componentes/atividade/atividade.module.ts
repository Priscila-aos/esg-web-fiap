import { CriarAtividadeComponent } from './criar-atividade/criar-atividade.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListarAtividadesComponent } from './listar-atividades/listar-atividades.component';
import { CabecalhoModule } from "../shared/cabecalho/cabecalho.module";
import { RodapeModule } from '../shared/rodape/rodape.module';


@NgModule({
    declarations: [CriarAtividadeComponent, ListarAtividadesComponent],
    exports: [CriarAtividadeComponent, ListarAtividadesComponent],
    imports: [
        CommonModule, FormsModule,
        CabecalhoModule, RodapeModule
    ]
})
export class AtividadeModule { }
