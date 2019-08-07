package place.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import place.factory.UsuarioFactory;
import place.model.Usuario;
import place.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
    private UsuarioRepository usuarioRepository;
	
	@Autowired
	private UsuarioFactory usuarioFactory;

	public List<Usuario> findAll() {
		return usuarioRepository.findAll();
	}

	public Usuario findById(long id) {
		Optional<Usuario> usuario = usuarioRepository.findById(id);
		return usuario.orElse(null);
	}

	public boolean isExist(Usuario usuario) {
		// TODO Auto-generated method stub
		return false;
	}

	public boolean save(Usuario usuario) {
		Usuario usuarioSave = usuarioRepository.save(usuario);
		return usuarioSave.getId() != null;
	}

	public Usuario update(Long id,Usuario usuario) {
		Usuario currentUsuario = findById(id);
		
		if(currentUsuario == null) {
			return null;
		}
						
		return usuarioRepository.saveAndFlush(usuarioFactory.getInstance(currentUsuario,usuario));
	}

	public void deleteById(long id) {
		usuarioRepository.deleteById(id);
	}

}
