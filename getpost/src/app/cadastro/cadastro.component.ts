import { CadastroService } from './../services/cadastro.service';
import { Estudante } from './../model/Estudante';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  estudante: Estudante = new Estudante()
  listaEstudantes: Estudante[]

  constructor(
    private router: Router,
    private estudanteService: CadastroService
  ) { }

  ngOnInit(): void {
    this.getAllEstudante()
  }

  getAllEstudante(){
    this.estudanteService.getAllEstudantes().subscribe((resp: Estudante[]) => {
      this.listaEstudantes = resp
      console.log("topzera"+JSON.stringify(this.listaEstudantes));
    })
  }

  cadastrar(){
    this.estudanteService.postEstudantes(this.estudante).subscribe((resp: Estudante) => {
      this.estudante = resp
      alert('Postagem realizada com sucesso!')
      this.estudante = new Estudante()
      this.getAllEstudante()
    })
  }


}
