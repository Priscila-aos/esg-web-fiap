import { AppComponent } from './app.component';
import { CriarAtividadeComponent } from './componentes/atividade/criar-atividade/criar-atividade.component';
import { Routes } from '@angular/router';
import { ListarAtividadesComponent } from './componentes/atividade/listar-atividades/listar-atividades.component';

export const routes: Routes = [

    {
        path: "",
        component: AppComponent,
        children: [
            {
                path: "criarAtividade",
                component: CriarAtividadeComponent
            },
            {
                path: "editarAtividade/:id",
                component: CriarAtividadeComponent
            },
            {
                path: "listarAtividades",
                component: ListarAtividadesComponent
            }
        ]
    }
];
