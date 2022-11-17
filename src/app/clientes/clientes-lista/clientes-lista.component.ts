import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../clientes.service';
import { Cliente } from '../cliente';
import {Router} from '@angular/router'

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes : Cliente[] = [];
  clienteSelecionado : Cliente;
  menssagemSucesso : string;
  menssagemErro : string;

  constructor(private service: ClientesService, private router: Router) { }

  ngOnInit(): void {
    this.service.getClientes().
    subscribe( resposta => this.clientes = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/clientes/form'])
  }

  preparaDelecao(cliente : Cliente){
    this.clienteSelecionado = cliente;
  }

  deletarCliente(){
    this.service.deletar(this.clienteSelecionado).
    subscribe(
      response => {
        this.menssagemSucesso ='Deletado com sucesso'
        this.ngOnInit()
      },
    erro => this.menssagemErro = 'Erro ao deletar esse cliente'
    )
  }

}
