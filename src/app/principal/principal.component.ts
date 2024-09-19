import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

  cliente = new Cliente

  btnCadastro: boolean = true;

  clientes: Cliente[] = [];

  constructor(private servico:ClienteService){}

  selecionar(): void {
    this.servico.selecionar().subscribe(retorno => this.clientes = retorno);
  }

  cadastrar(): void {
    this.servico.cadastrar(this.cliente)
    .subscribe(retorno => { this.clientes.push(retorno); });
  }

  ngOnInit(){
    this.selecionar();
  }

}
