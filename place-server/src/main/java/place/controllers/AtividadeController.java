package place.controllers;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import place.model.Atividade;
import place.model.Curso;
import place.service.AtividadeService;

@RestController
@RequestMapping("/api")
public class AtividadeController {

	public static final Logger logger = LoggerFactory.getLogger(AtividadeController.class);
	
	@Autowired
	AtividadeService atividadeService;
	
	// ------ Recupera todos os atividades --------------
	@GetMapping(value = "/atividades")
	public ResponseEntity<List<Atividade>> listAtividades(@RequestParam("cursoId") Long cursoId) {
		List<Atividade> atividades = new ArrayList<Atividade>();
		
		if(cursoId == null) {
			atividades = atividadeService.findAll();
		} else {
			Curso curso = new Curso();
			curso.setId(cursoId);
			atividades = atividadeService.findByCurso(curso);
		}
		
		if(atividades.isEmpty()) {
			return new ResponseEntity<List<Atividade>>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Atividade>>(atividades,HttpStatus.OK);
	}
	
	// ------ Recupera um atividade ---------------------
	@GetMapping(value = "/atividades/{id}")
	public ResponseEntity<?> getAtividade(@PathVariable("id") long id){
		logger.info("Buscando Atividade com id {}", id);
		Atividade atividade = atividadeService.findById(id);
		if(atividade == null) {
			logger.error("Atividade com id {} não encontrado.", id);
			return new ResponseEntity<String>("Atividade não encontrado",HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Atividade>(atividade,HttpStatus.OK);
	}

	// ----- Cria um atividade -------------------------
	@PostMapping(value = "/atividades")
	public ResponseEntity<?> criaAtividade(@RequestBody Atividade atividade,UriComponentsBuilder ucBuilder){
		logger.info("Criar atividade : {}",atividade);
		if(atividadeService.isExist(atividade)) {
			logger.error("Atividade já existe {}",atividade.getTitulo());
			return new ResponseEntity<String>("Atividades já cadastrado",HttpStatus.CONFLICT);
		}
		
		atividadeService.save(atividade);
//		HttpHeaders headers = new HttpHeaders();
//		headers.setLocation(ucBuilder.path("/api/atividades/{id}").buildAndExpand(atividade.getId()).toUri());
		return new ResponseEntity<Atividade>(atividade,HttpStatus.CREATED);
	}
	
	// ---------- Atualiza um atividade --------------
	@PutMapping(value = "/atividades/{id}")
	public ResponseEntity<?> updateAtividade(@PathVariable("id") long id , @RequestBody Atividade atividade){
		logger.info("Atualizar o atividade {}",id);
		Atividade currentAtividade = atividadeService.findById(id);
		if(currentAtividade == null) {
			logger.error("Atividade com id {} não encontrado.", id);
			return new ResponseEntity<String>("Atividade não encontrado",HttpStatus.NOT_FOUND);			
		}
		
		currentAtividade.setConteudo(atividade.getConteudo());
		currentAtividade.setTitulo(atividade.getTitulo());
		atividadeService.update(currentAtividade);
		return new ResponseEntity<Atividade>(currentAtividade,HttpStatus.OK);
	}
	
	// ---- Apagar um atividade ------------------------
	@DeleteMapping(value = "/atividades/{id}")
	public ResponseEntity<?> apagarAtividade(@PathVariable("id") long id) {
		logger.info("Buscando e deletando atividade com id {}", id);

		Atividade currentAtividade = atividadeService.findById(id);
		if(currentAtividade == null) {
			logger.error("Atividade com id {} não encontrado.", id);
			return new ResponseEntity<String>("Atividade não encontrado",HttpStatus.NOT_FOUND);			
		}
		
		atividadeService.deleteById(id);
		return new ResponseEntity<Atividade>(HttpStatus.NO_CONTENT);
	}
}


