package place.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import place.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario,Long>{

}
