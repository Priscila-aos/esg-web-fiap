import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { RodapeComponent } from "./componentes/rodape/rodape.component";
import { CriarTemaComponent } from "./componentes/categoriza\u00E7\u00E3o/criar-tema/criar-tema.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CabecalhoComponent, RodapeComponent, CriarTemaComponent]
})
export class AppComponent {
  title = 'atv_esg_fiap';
}
