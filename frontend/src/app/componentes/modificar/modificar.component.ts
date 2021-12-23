// importando o arquivo de service de tarefas
import { ServicoDeTransferencia, Transferencia } from 'src/app/servicos/transferencia.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  transferencia:Transferencia = {
    id_transferencia:0,
    nomeCliente:'',
    valorTransferencia:0,
    contaCliente: 0,
    digitoConta: 0,
  }

  constructor(private ServicoDeTransferencia:ServicoDeTransferencia,
              private router:Router,
              private ativarRota:ActivatedRoute) { }

  ngOnInit(): void {
    const id_movimentacao = <any>this.ativarRota.snapshot.params['id']
    console.log('id da movimentacao ' + id_movimentacao);
    this.ServicoDeTransferencia.mostrarUmaTransferencia(id_movimentacao).subscribe({
      next: (resultado)=> {console.log(resultado);
                          this.transferencia = resultado},
      error:(erro)=>console.error(erro),
      complete:()=>console.info('Tudo Certo!')
    })

  }
  modificar(){
    this.ServicoDeTransferencia.editarTransferencia(this.transferencia.id_transferencia, this.transferencia).subscribe({
      next: (resultado)=> console.log("Transferência Editada com Sucesso"),
      error:(erro)=>console.error(erro),
      complete:()=>console.info('Tudo Certo!')
    })
    this.router.navigate(['/lista-de-clientes'])
  }
}
