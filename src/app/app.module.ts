import { CabecalhoModule } from './componentes/shared/cabecalho/cabecalho.module';
import { AtividadeModule } from './componentes/atividade/atividade.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RodapeModule } from './componentes/shared/rodape/rodape.module';
import { NgModule } from '@angular/core';


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
