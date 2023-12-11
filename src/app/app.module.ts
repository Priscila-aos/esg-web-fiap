import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { AtividadeModule } from './componentes/atividade/atividade.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { CriarAtividadeComponent } from './componentes/atividade/criar-atividade/criar-atividade.component';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RodapeModule } from './componentes/rodape/rodape.module';


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AtividadeModule, 
    CabecalhoModule,
    RodapeModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
