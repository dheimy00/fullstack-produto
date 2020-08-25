package br.com.produto.util;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ProdutoRestExceptionHandler {

	
	@ExceptionHandler
	public ResponseEntity<ProdutoErrorResponse> handleException(ProdutoNotFoundException exc) {
		
		ProdutoErrorResponse error = new ProdutoErrorResponse(
											HttpStatus.NOT_FOUND.value(),
											exc.getMessage(),
											System.currentTimeMillis());
		return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
	}
	
	
	@ExceptionHandler
	public ResponseEntity<ProdutoErrorResponse> handleException(Exception exc) {
		
		ProdutoErrorResponse error = new ProdutoErrorResponse(
											HttpStatus.BAD_REQUEST.value(),
											exc.getMessage(),
											System.currentTimeMillis());
		return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
	}
}
