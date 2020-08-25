import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.scss']
})
export class DetalhesProdutoComponent implements OnInit {

  id: number;
  produto: Produto;

  constructor(private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.produto = new Produto();

    this.id = this.route.snapshot.params['id'];

    this.produtoService.getProduto(this.id).subscribe(
      data => {
        this.produto = data;
      },
      error => console.log(error));

  }

  lista() {
    this.router.navigate(['produtos'])
  }
}
