package br.com.produto.servicoImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.produto.modelo.Produto;
import br.com.produto.repositories.ProdutoRespository;
import br.com.produto.servico.ProdutoServico;

@Service
public class ProdutoServicoImpl implements ProdutoServico {
	
	@Autowired
	private ProdutoRespository produtoRespository;

	@Override
	public List<Produto> lista() {
		
		return produtoRespository.findAll();
	}

	@Override
	public Produto salvar(Produto produto) {
		
		return produtoRespository.save(produto);
	}

	@Override
	public void exlcuir(Integer id) {
	
		produtoRespository.deleteById(id);
		
	}

	@Override
	public Produto editar(final Integer id,final Produto produto) {

		Produto p = produtoRespository.findById(id).get();
		p.setNome(produto.getNome());
		p.setDescricao(produto.getDescricao());
		return produtoRespository.save(p);
	}

	@Override
	public Produto getProduto(Integer id) {
		// TODO Auto-generated method stub
		return produtoRespository.findById(id).get();
	}

}
