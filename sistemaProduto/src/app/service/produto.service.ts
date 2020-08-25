import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl = 'http://localhost:8080/api/produtos';

  constructor(private httpClient: HttpClient) { }


  //Lista produtos
listaProdutos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(`${this.baseUrl}`);
  }

  //Salvar produto
  salvarProduto(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(`${this.baseUrl}`, produto);
  }

  // Editar produto
  editarProduto(id: number, produto: Produto): Observable<Produto> {
    return this.httpClient.put<Produto>(`${this.baseUrl}/${id}`, produto);
  }

  //Excluir produto
  excluirProduto(id: number): Observable<Produto> {
    return this.httpClient.delete<Produto>(`${this.baseUrl}/${id}`);
  }

  //Get produto
  getProduto(id:number):Observable<Produto>{
      return this.httpClient.get<Produto>(`${this.baseUrl}/${id}`);
  }
}
