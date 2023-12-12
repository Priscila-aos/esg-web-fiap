import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Atividade } from '../../../model/atividade.model';
import { AtividadeService } from '../../../service/atividade.service';

@Component({
  selector: 'app-listar-atividades',
  templateUrl: './listar-atividades.component.html',
  styleUrls: ['./listar-atividades.component.css']
})
export class ListarAtividadesComponent implements OnInit {

  atividades: Atividade[] = [];

  constructor(private service: AtividadeService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAtividades().subscribe((atividades) => {
      this.atividades = atividades
    })
  }

  onEdit(atividade: Atividade) {
    this.router.navigate(['/editarAtividade/' + atividade.id]);
  }

  onDelete(atividade: Atividade) {
    console.log(atividade);
    this.service.deleteAtividade(atividade.id).subscribe(() => {
      this.atividades = this.atividades.filter(atv => atv.id != atividade.id)
    }, error => {
      alert("Something went wrong")
    })
  }

  adicionarAtividade() {
    this.router.navigate(['criarAtividade']);
  }

}
