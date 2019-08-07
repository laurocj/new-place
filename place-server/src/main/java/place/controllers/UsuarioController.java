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

import place.model.Usuario;
import place.service.UsuarioService;

@RestController
@RequestMapping("/api")
public class UsuarioController {

	public static final Logger logger = LoggerFactory.getLogger(UsuarioController.class);
	
	@Autowired
	UsuarioService usuarioService;
	
	// ------ Recupera todos os usuarios --------------
	@GetMapping(value = "/usuarios")
	public ResponseEntity<List<Usuario>> listUsuarios() {
		List<Usuario> usuarios = usuarioService.findAll();
		if(usuarios.isEmpty()) {
			return new ResponseEntity<List<Usuario>>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Usuario>>(usuarios,HttpStatus.OK);
	}
	
	// ------ Recupera um usuario ---------------------
	@GetMapping(value = "/usuarios/{id}")
	public ResponseEntity<?> getUsuario(@PathVariable("id") long id){
		logger.info("Buscando Usuario com id {}", id);
		Usuario usuario = usuarioService.findById(id);
		if(usuario == null) {
			logger.error("Usuario com id {} não encontrado.", id);
			return new ResponseEntity<String>("Usuario não encontrado",HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Usuario>(usuario,HttpStatus.OK);
	}

	// ----- Cria um usuario -------------------------
	@PostMapping(value = "/usuarios")
	public ResponseEntity<?> criaUsuario(@RequestBody Usuario usuario,UriComponentsBuilder ucBuilder){
		logger.info("Criar usuario : {}",usuario);
		if(usuarioService.isExist(usuario)) {
			logger.error("Usuario já existe {}",usuario.getEmail());
			return new ResponseEntity<String>("Usuarios já cadastrado",HttpStatus.CONFLICT);
		}
		
		usuarioService.save(usuario);
//		HttpHeaders headers = new HttpHeaders();
//		headers.setLocation(ucBuilder.path("/api/usuarios/{id}").buildAndExpand(usuario.getId()).toUri());
		return new ResponseEntity<Usuario>(usuario,HttpStatus.CREATED);
	}
	
	// ---------- Atualiza um usuario --------------
	@PutMapping(value = "/usuarios/{id}")
	public ResponseEntity<?> updateUsuario(@PathVariable("id") long id , @RequestBody Usuario usuario){
		logger.info("Atualizar o usuario {}",id);
		Usuario currentUsuario = usuarioService.update(id,usuario);
		if(currentUsuario == null) {
			logger.error("Usuario com id {} não encontrado.", id);
			return new ResponseEntity<String>("Usuario não encontrado",HttpStatus.NOT_FOUND);			
		}
		
		return new ResponseEntity<Usuario>(currentUsuario,HttpStatus.OK);
	}
	
	// ---- Apagar um usuario ------------------------
	@DeleteMapping(value = "/usuarios/{id}")
	public ResponseEntity<?> apagarUsuario(@PathVariable("id") long id) {
		logger.info("Buscando e deletando usuario com id {}", id);

		Usuario currentUsuario = usuarioService.findById(id);
		if(currentUsuario == null) {
			logger.error("Usuario com id {} não encontrado.", id);
			return new ResponseEntity<String>("Usuario não encontrado",HttpStatus.NOT_FOUND);			
		}
		
		usuarioService.deleteById(id);
		return new ResponseEntity<Usuario>(HttpStatus.NO_CONTENT);
	}
}


