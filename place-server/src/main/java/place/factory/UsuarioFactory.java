package place.factory;

import org.springframework.stereotype.Component;

import place.model.Usuario;

@Component
public class UsuarioFactory {


	public Usuario getInstance(Usuario currentUsuario, Usuario usuario) {
		currentUsuario.setEmail(usuario.getEmail());
		currentUsuario.setNome(usuario.getNome());
		currentUsuario.setSenha(usuario.getSenha());
		return currentUsuario;
	}
}
