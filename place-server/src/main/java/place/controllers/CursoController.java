package place.controllers;

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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import place.model.Curso;
import place.service.CursoService;

@RestController
@RequestMapping("/api")
public class CursoController {

	public static final Logger logger = LoggerFactory.getLogger(CursoController.class);
	
	@Autowired
	CursoService cursoService;
	
	// ------ Recupera todos os cursos --------------
	@GetMapping(value = "/cursos")
	public ResponseEntity<List<Curso>> listCursos() {
		List<Curso> cursos = cursoService.findAllCursos();
		if(cursos.isEmpty()) {
			return new ResponseEntity<List<Curso>>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Curso>>(cursos,HttpStatus.OK);
	}
	
	// ------ Recupera um curso ---------------------
	@GetMapping(value = "/cursos/{id}")
	public ResponseEntity<?> getCurso(@PathVariable("id") long id){
		logger.info("Buscando Curso com id {}", id);
		Curso curso = cursoService.findById(id);
		if(curso == null) {
			logger.error("Curso com id {} não encontrado.", id);
			return new ResponseEntity<String>("Curso não encontrado",HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Curso>(curso,HttpStatus.OK);
	}

	// ----- Cria um curso -------------------------
	@PostMapping(value = "/cursos")
	public ResponseEntity<?> criaCurso(@RequestBody Curso curso,UriComponentsBuilder ucBuilder){
		logger.info("Criar curso : {}",curso);
		if(cursoService.isCursoExist(curso)) {
			logger.error("Curso já existe {}",curso.getTitulo());
			return new ResponseEntity<String>("Cursos já cadastrado",HttpStatus.CONFLICT);
		}
		
		cursoService.saveCurso(curso);
//		HttpHeaders headers = new HttpHeaders();
//		headers.setLocation(ucBuilder.path("/api/cursos/{id}").buildAndExpand(curso.getId()).toUri());
		return new ResponseEntity<Curso>(curso,HttpStatus.CREATED);
	}
	
	// ---------- Atualiza um curso --------------
	@PutMapping(value = "/cursos/{id}")
	public ResponseEntity<?> updateCurso(@PathVariable("id") long id , @RequestBody Curso curso){
		logger.info("Atualizar o curso {}",id);
		Curso currentCurso = cursoService.updateCurso(id,curso);
		if(currentCurso == null) {
			logger.error("Curso com id {} não encontrado.", id);
			return new ResponseEntity<String>("Curso não encontrado",HttpStatus.NOT_FOUND);			
		}
		
		return new ResponseEntity<Curso>(currentCurso,HttpStatus.OK);
	}
	
	// ---- Apagar um curso ------------------------
	@DeleteMapping(value = "/cursos/{id}")
	public ResponseEntity<?> apagarCurso(@PathVariable("id") long id) {
		logger.info("Buscando e deletando curso com id {}", id);

		Curso currentCurso = cursoService.findById(id);
		if(currentCurso == null) {
			logger.error("Curso com id {} não encontrado.", id);
			return new ResponseEntity<String>("Curso não encontrado",HttpStatus.NOT_FOUND);			
		}
		
		cursoService.deleteCursoById(id);
		return new ResponseEntity<Curso>(HttpStatus.NO_CONTENT);
	}
}


