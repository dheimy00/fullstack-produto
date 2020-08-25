import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { ProdutoFormGroup } from 'src/app/model/form';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss']
})
export class EditarProdutoComponent implements OnInit {

  form: ProdutoFormGroup = new ProdutoFormGroup();
  produto: Produto = new Produto();
  id: number;

  constructor(private produtoService: ProdutoService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.produto = new Produto();
    this.id = this.route.snapshot.params['id'];
    this.produtoService.getProduto(this.id)
      .subscribe(data => { this.produto = data }, error => console.log(error));
  }

  atualizado() {
    this.produtoService.editarProduto(this.id, this.produto)
      .subscribe(data => console.log(data), error => console.log(error));
      this.listaProduto();
  }

  onSubmit() {
    this.atualizado()
  }

  listaProduto(){
    this.router.navigate(['/produtos'])
  }

}
