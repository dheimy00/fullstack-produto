package br.com.produto.util;



public class ProdutoNotFoundException extends RuntimeException {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ProdutoNotFoundException() {
	}

	public ProdutoNotFoundException(String message) {
		super(message);
	}

	public ProdutoNotFoundException(Throwable cause) {
		super(cause);
	}

	public ProdutoNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}

	public ProdutoNotFoundException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

}
