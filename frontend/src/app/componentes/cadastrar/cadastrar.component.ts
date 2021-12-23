import { Component, OnInit } from '@angular/core';
import { Transferencia, ServicoDeTransferencia} from '../../servicos/transferencia.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  transferencia:Transferencia = {
    id_transferencia:0,
    nomeCliente:'',
    valorTransferencia: 0,
    contaCliente: 0,
    digitoConta: 0,
  }

  constructor(private ServicoDeTransferencia:ServicoDeTransferencia, private router:Router) { }

  ngOnInit(): void {
  }

  novaTransferencia(){
    delete this.transferencia.id_transferencia

    this.ServicoDeTransferencia.fazerTransferencia(this.transferencia).subscribe({
      next: (resultado) => console.log("Transferencia Realizada"),
      error: (erro) => console.error(erro),
      complete: () => console.info('Tudo Certo!')
    })
    this.router.navigate(['/lista-de-clientes'])
  }
}
