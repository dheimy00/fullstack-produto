package br.com.produto.servico;

import java.util.List;

import br.com.produto.modelo.Produto;

public interface ProdutoServico {
	
  List<Produto> lista();
  
  Produto salvar(Produto produto);
  
  void exlcuir(Integer id);
  
  Produto editar(Integer id,Produto produto);
  
  Produto getProduto(Integer id);
}
