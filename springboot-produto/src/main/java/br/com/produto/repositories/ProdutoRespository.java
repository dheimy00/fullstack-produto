package br.com.produto.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.produto.modelo.Produto;

@Repository
public interface ProdutoRespository extends JpaRepository<Produto, Integer> {
	
	

}
