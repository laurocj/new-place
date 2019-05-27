package place.factory;

import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import place.model.Atividade;
import place.model.Curso;

@Component
public class CursoFactory {
	
	@Autowired
	private AtividadeFactory atividadeFactory;

	
	public Curso getInstance(Curso curso) {
		curso.getAtividades().forEach(atividade -> atividade.setCurso(curso));
		return curso;
	}

	public Curso getInstance(Curso currentCurso, Curso curso) {
		currentCurso.setConteudo(curso.getConteudo());
		currentCurso.setTitulo(curso.getTitulo());
		
		Set<Atividade> atividades = currentCurso.getAtividades();
		atividades
			.stream()
			.map(currentAtividade -> {
				Long id = currentAtividade.getId();
				
				Optional<Atividade> atividade = curso.getAtividades()
					.stream()
				    .filter(a -> a.getId() == id)
				    .findFirst();
				
				if(atividade.isEmpty()) {
					currentAtividade = null;
				} else {
					currentAtividade = atividadeFactory.getInstance(currentAtividade,atividade.get());
				}
								
				return currentAtividade;
			})
			.filter(Objects::nonNull)
			.collect(Collectors.toSet());
		
		currentCurso.setAtividades(atividades);

		return currentCurso;
	}
}
