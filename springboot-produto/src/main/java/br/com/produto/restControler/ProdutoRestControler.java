package br.com.produto.restControler;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.produto.modelo.Produto;
import br.com.produto.servico.ProdutoServico;
import br.com.produto.util.ProdutoNotFoundException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
@Api(value = "API REST Produtos")
public class ProdutoRestControler {

	@Autowired
	private ProdutoServico produtoServico;

	public static final Logger logger = LoggerFactory.getLogger(ProdutoRestControler.class);

	/*----------------Lista produto---------------*/
	@GetMapping(path = "/produtos")
	@ApiOperation(value = "Retorno uma lista de produtos")
	public ResponseEntity<List<Produto>> lista() {
		List<Produto> produtos = produtoServico.lista();
		if (produtos.isEmpty()) {
			return new ResponseEntity<>(produtos, HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(produtos, HttpStatus.OK);
	}

	/*----------------Salvar produto---------------*/
	@PostMapping(path = "/produtos")
	@ApiOperation(value = "Salvar um produto")
	public ResponseEntity<Produto> salvar(@Valid @RequestBody Produto produto) {
		Produto salvar = produtoServico.salvar(produto);
		return new ResponseEntity<Produto>(salvar, HttpStatus.CREATED);

	}
	
	/*----------------Editar produto---------------*/
	@PutMapping(path = "/produtos/{id}")
	@ApiOperation(value = "Retorno editar um produto")
	public ResponseEntity<Produto> editar(@PathVariable("id") Integer id,@Valid @RequestBody  Produto produto){
		
		Produto get = produtoServico.getProduto(id);
		if(get == null ) {
			throw new ProdutoNotFoundException("Não foi possível atualizar. Produto com id " + id + " não encontrado");
		}
		Produto editar =  produtoServico.editar(id, produto);
		return new ResponseEntity<>(editar,HttpStatus.OK);
	}
	
	/*----------------Retorno get um produto---------------*/
	@GetMapping(path = "/produtos/{id}")
	@ApiOperation(value = "Retorno get um produto")
	public ResponseEntity<Produto> getProduto(@PathVariable("id") Integer id){
		
		Produto get = produtoServico.getProduto(id);
		if(get == null ) {
			throw new ProdutoNotFoundException("Produto com id " + id + " não encontrado");
		}
		Produto getProduto = produtoServico.getProduto(id);
		return new ResponseEntity<>(getProduto,HttpStatus.OK);
	}
	
	/*----------------Excluir um produto---------------*/
	@DeleteMapping(path = "/produtos/{id}")
	@ApiOperation(value = "Excluir um produto")
	public ResponseEntity<String> exlcuir(@PathVariable("id") Integer id){
		
		Produto get = produtoServico.getProduto(id);
		if(get == null ) {
			throw new ProdutoNotFoundException("Produto com id " + id + " não encontrado");
		}
		produtoServico.exlcuir(id);
		return new ResponseEntity<>("Sucesso", HttpStatus.NO_CONTENT);
	}
	
	

}
