import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Atividade } from '../../../model/atividade.model';
import { AtividadeService } from '../../../service/atividade.service';

@Component({
  selector: 'app-criar-atividade',
  templateUrl: './criar-atividade.component.html',
  styleUrls: ['./criar-atividade.component.css']
})
export class CriarAtividadeComponent implements OnInit {

  atividades: Atividade[] = [

  ];

  atividade: Atividade = {
    id: -1,
    titulo: "",
    descricao: "",
    categoria: "",
    usuarioId: 1
  }

  constructor(private service: AtividadeService) {
   
  }


  ngOnInit(): void {
    this.atividades = this.retornaAtividades();
  }

  ngOnChange(): void {

  }


  private retornaAtividades(): Atividade[] {
    this.service.getAtividades().subscribe(result => {
      this.atividades = result;
      console.log(result);
    }, error => {
      alert("Something went wrong")
    })
    return this.atividades;
  }


  onSaveAtividade() {
    console.log(this.atividade.titulo);
  
    this.service.postAtividade(this.atividade).subscribe(result => {
      this.atividades.push(result);
      console.log(result);
      console.log(this.atividades);
    }, error => {
      alert("Something went wrong")
    })
  }

  onEdit(atividade: Atividade) {
    console.log(atividade);
    this.service.putAtividade(atividade.id, atividade).subscribe(result => {
      this.atividades.push(result);
      console.log(result);
      console.log(this.atividades);
    }, error => {
      alert("Something went wrong")
    })
  }

  onDelete(atividade: Atividade) {
    console.log(atividade);
    this.service.deleteAtividade(atividade.id).subscribe(() => {
      this.atividades = this.atividades.filter(atv => atv.id == atividade.id)
    }, error => {
      alert("Something went wrong")
    })
  }




}
