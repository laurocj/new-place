package place.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import place.model.Atividade;
import place.model.Curso;

public interface AtividadeRepository extends JpaRepository<Atividade,Long>{

	List<Atividade> findByCurso(Curso cursoId);

}
