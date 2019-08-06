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

import place.model.Producao;
import place.model.Curso;
import place.service.ProducaoService;

@RestController
@RequestMapping("/api")
public class ProducaoController {

	public static final Logger logger = LoggerFactory.getLogger(ProducaoController.class);
	
	@Autowired
	ProducaoService producaoService;
	
	// ------ Recupera todos os producoes --------------
	@GetMapping(value = "/producoes")
	public ResponseEntity<List<Producao>> listProducaos(@RequestParam("cursoId") Long cursoId) {
		List<Producao> producoes = new ArrayList<Producao>();
		
		if(cursoId == null) {
			producoes = producaoService.findAll();
		} else {
			Curso curso = new Curso();
			curso.setId(cursoId);
//			producoes = producaoService.findByCurso(curso);
		}
		
		if(producoes.isEmpty()) {
			return new ResponseEntity<List<Producao>>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Producao>>(producoes,HttpStatus.OK);
	}
	
	// ------ Recupera um producao ---------------------
	@GetMapping(value = "/producoes/{id}")
	public ResponseEntity<?> getProducao(@PathVariable("id") long id){
		logger.info("Buscando Producao com id {}", id);
		Producao producao = producaoService.findById(id);
		if(producao == null) {
			logger.error("Producao com id {} não encontrado.", id);
			return new ResponseEntity<String>("Producao não encontrado",HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Producao>(producao,HttpStatus.OK);
	}

	// ----- Cria um producao -------------------------
	@PostMapping(value = "/producoes")
	public ResponseEntity<?> criaProducao(@RequestBody Producao producao,UriComponentsBuilder ucBuilder){
		logger.info("Criar producao : {}",producao);
		if(producaoService.isExist(producao)) {
//			logger.error("Producao já existe {}",producao.getTitulo());
			return new ResponseEntity<String>("Producaos já cadastrado",HttpStatus.CONFLICT);
		}
		
		producaoService.save(producao);
//		HttpHeaders headers = new HttpHeaders();
//		headers.setLocation(ucBuilder.path("/api/producoes/{id}").buildAndExpand(producao.getId()).toUri());
		return new ResponseEntity<Producao>(producao,HttpStatus.CREATED);
	}
	
	// ---------- Atualiza um producao --------------
	@PutMapping(value = "/producoes/{id}")
	public ResponseEntity<?> updateProducao(@PathVariable("id") long id , @RequestBody Producao producao){
		logger.info("Atualizar o producao {}",id);
		Producao currentProducao = producaoService.findById(id);
		if(currentProducao == null) {
			logger.error("Producao com id {} não encontrado.", id);
			return new ResponseEntity<String>("Producao não encontrado",HttpStatus.NOT_FOUND);			
		}
		
		currentProducao.setConteudo(producao.getConteudo());
		producaoService.update(currentProducao);
		return new ResponseEntity<Producao>(currentProducao,HttpStatus.OK);
	}
	
	// ---- Apagar um producao ------------------------
	@DeleteMapping(value = "/producoes/{id}")
	public ResponseEntity<?> apagarProducao(@PathVariable("id") long id) {
		logger.info("Buscando e deletando producao com id {}", id);

		Producao currentProducao = producaoService.findById(id);
		if(currentProducao == null) {
			logger.error("Producao com id {} não encontrado.", id);
			return new ResponseEntity<String>("Producao não encontrado",HttpStatus.NOT_FOUND);			
		}
		
		producaoService.deleteById(id);
		return new ResponseEntity<Producao>(HttpStatus.NO_CONTENT);
	}
}


