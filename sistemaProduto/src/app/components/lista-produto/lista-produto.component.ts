import { Component, OnInit } from '@angular/core';
import {ProdutoService} from 'src/app/service/produto.service';
import {Produto} from 'src/app/model/produto'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss']
})
export class ListaProdutoComponent implements OnInit {

  produtos:Observable<Produto[]>;

  constructor(private produtoService:ProdutoService,
              private router:Router) { }

  ngOnInit(){
    this.listaProdutos();
  }

  //Lista de produto
  listaProdutos(){
    this.produtos = this.produtoService.listaProdutos();
  }

  //Excluir produto
  excluirProduto(id:number){
    
    this.produtoService.excluirProduto(id)
    .subscribe( data =>{
      console.log(data);
      this.listaProdutos();

    },
   error => console.log(error));
  }

  //Detahes de produto
  detalhesProduto(id:number){
 
    this.router.navigate(['detalhes',id]);
  
  }

  //Editar produto
  editarProduto(id: number){
    this.router.navigate(['editar', id]);
  }

}
