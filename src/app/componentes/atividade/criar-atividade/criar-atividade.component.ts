import { Component, Inject, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atividade } from '../../../model/atividade.model';
import { Categoria } from '../../../model/categoria.enum';
import { AtividadeService } from '../../../service/atividade.service';

@Component({
  selector: 'app-criar-atividade',
  templateUrl: './criar-atividade.component.html',
  styleUrls: ['./criar-atividade.component.css']
})
export class CriarAtividadeComponent implements OnInit {

  atividades: Atividade[] = [

  ];

  atividade = {
    id: -1,
    titulo: "",
    descricao: "",
    categoria: "COLETA_SELETIVA",
    usuarioId: 1
  }

  constructor(@Inject(Injector) private injector: Injector,
    private service: AtividadeService,
    private router: Router,
    private route: ActivatedRoute) {
    this.service = this.injector.get(AtividadeService);
  }


  ngOnInit(): void {
    this.atividades = this.retornaAtividades();
    let idAtividade = this.route.snapshot.paramMap.get('id');
    console.log(idAtividade);
    if(idAtividade != undefined){
      if(this.router.url === '/editarAtividade/' + idAtividade) {
        this.service.getAtividade(Number(idAtividade)).subscribe(result =>
          this.atividade = result
        )
      }
    } else if (this.router.url === '/criarAtividade') {
      this.atividade = {
        id: -1,
        titulo: "",
        descricao: "",
        categoria: "COLETA_SELETIVA",
        usuarioId: 1
      }
    }

  }

  private retornaAtividades(): Atividade[] {
    this.service.getAtividades().subscribe(result => {
      this.atividades = result
    }, error => {
      alert("Something went wrong")
    })
    return this.atividades;
  }


  onSaveAtividade(): void {
    if (this.router.url === '/criarAtividade') {
      this.service.postAtividade(this.atividade).subscribe(result => {
        this.atividades.push(result);
        this.router.navigate(['/listarAtividades'])
      }, error => {
        alert("Something went wrong")
      })
    } else if (this.router.url === '/editarAtividade/' + this.atividade.id) {
      this.service.putAtividade(this.atividade.id, this.atividade).subscribe(result => {
        this.atividades = this.atividades.map(atv => {
          if (atv.id == result.id) {
            return result;
          } else {
            return atv;
          }
        });
        this.router.navigate(['/listarAtividades'])
      }, error => {
        alert("Something went wrong")
      })
    }
  }

  cancelar() {
    this.router.navigate(['listarAtividades']);
  }

}

