import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { ProdutoFormGroup } from 'src/app/model/form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent implements OnInit {

  form: ProdutoFormGroup = new ProdutoFormGroup();
  novoProduto: Produto = new Produto();
  formSubmitted: boolean = false;
  mensagem:string = null;
  submitted: boolean = false;
  
  constructor(private produtoService: ProdutoService,
              private router:Router) { }

  ngOnInit(): void {
  }

  submitForm(form: any) {
    this.formSubmitted = true;
    if (form.valid) {
        this.salvar(this.novoProduto);
        this.novoProduto = new Produto();
        this.formSubmitted = false;
        this.submitted = true;
        this.mensagem = 'Cadastro realizado com sucesso!';
        this.form.reset();
    }
 }

   //Cadastro de produto
   salvar(produto: Produto) {
    this.produtoService.salvarProduto(this.novoProduto)
        .subscribe(data => console.log(data), error => console.log(error));
  }

  listaProduto(){
    this.router.navigate(['/produtos']);
  }

}
