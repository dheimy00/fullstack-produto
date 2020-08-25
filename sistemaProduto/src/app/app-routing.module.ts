import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroProdutoComponent } from './components/cadastro-produto/cadastro-produto.component';
import { DetalhesProdutoComponent } from './components/detalhes-produto/detalhes-produto.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';
import { ListaProdutoComponent } from './components/lista-produto/lista-produto.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
{ path:'editar/:id',component: EditarProdutoComponent },
{ path:'detalhes/:id',component: DetalhesProdutoComponent },
{ path:'produtos',component: ListaProdutoComponent },
{ path:'cadastro',component: CadastroProdutoComponent },
{ path: '', redirectTo: 'cadastro', pathMatch: 'full' },
{path:'**',component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
