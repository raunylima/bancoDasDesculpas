import { ModificarComponent } from './componentes/modificar/modificar.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'lista-de-clientes', component:ClientesComponent},
  {path:'fazer-transferencia', component:CadastrarComponent},
  {path:'editar/:id', component:ModificarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
