import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicoDeTransferencia {
  url = '/transferencias'

  constructor(private http: HttpClient) { }

  mostrarTranferencias(){
    return this.http.get(this.url)
  }
  mostrarUmaTransferencia(id:any){
    return this.http.get(this.url + '/' + id)
  }

  fazerTransferencia(transferencia:Transferencia){
    return this.http.post(this.url, transferencia)
  }

  excluirTransferencia(id:any){
    return this.http.delete(this.url + '/' + id)
  }

  editarTransferencia(id:any, transferencia:Transferencia){
    return this.http.put(this.url + '/' + id, transferencia)
  }
}

export interface Transferencia{
  id_transferencia?:number
  nomeCliente?:string
  valorTransferencia?:number
  contaCliente?:number
  digitoConta?:number
}
