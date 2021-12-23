import { ServicoDeTransferencia, Transferencia } from '../../servicos/transferencia.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  ListarTransferencias: Transferencia[]

  constructor(private ServicoDeTransferencia:ServicoDeTransferencia, private router:Router) {
    this.ListarTransferencias = []
   }

  ngOnInit(): void {
    this.listaDeTransferencias()
  }

  listaDeTransferencias(){
    this.ServicoDeTransferencia.mostrarTranferencias().subscribe({
      next: (resultado) => {console.log(resultado)
                            this.ListarTransferencias = <any>resultado},
      error: (erro) => console.error(erro),
      complete: () => console.info('complete')
    })
  }

  excluir(id:any){
    this.ServicoDeTransferencia.excluirTransferencia(id).subscribe({
      next: (resultado) => {console.log("Transferência Excluída com Sucesso")
                            this.listaDeTransferencias()},
      error: (erro) => console.error(erro),
      complete: () => console.info('Tudo Certo!')
    })
  }

  // funcão para excluir uma tarefa pelo seu id
  editar(id:any){
    this.router.navigate(['/editar/' + id])
  }
}
