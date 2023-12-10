import { AppComponent } from './app.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { CriarAtividadeComponent } from './componentes/atividade/criar-atividade/criar-atividade.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [ AppComponent, CriarAtividadeComponent, CabecalhoComponent, RodapeComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
