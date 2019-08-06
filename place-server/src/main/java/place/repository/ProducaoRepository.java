package place.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import place.model.Curso;
import place.model.Producao;

public interface ProducaoRepository extends JpaRepository<Producao,Long>{

//	List<Producao> findByCurso(Curso cursoId);

}
