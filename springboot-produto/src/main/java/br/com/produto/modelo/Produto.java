package br.com.produto.modelo;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "produto")
public class Produto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@NotBlank(message = "O nome campo obrigatorio")
	@Column(name = "nome")
	private String nome;

	@NotBlank(message = "O descrição campo obrigatorio")
	@Column(name = "descricao")
	private String descricao;

	@Column(name = "criacao_data")
	@CreationTimestamp
	private LocalDateTime criacaoData;

	@Column(name = "ultimo_atualizo")
	@UpdateTimestamp
	private LocalDateTime ultimoAtualizo;

}
