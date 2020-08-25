import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroProdutoComponent } from './components/cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './components/lista-produto/lista-produto.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';
import { DetalhesProdutoComponent } from './components/detalhes-produto/detalhes-produto.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroProdutoComponent,
    ListaProdutoComponent,
    EditarProdutoComponent,
    DetalhesProdutoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
