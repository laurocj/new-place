package place.factory;

import org.springframework.stereotype.Component;

import place.model.Curso;

@Component
public class CursoFactory {
	

	public Curso getInstance(Curso currentCurso, Curso curso) {
		currentCurso.setConteudo(curso.getConteudo());
		currentCurso.setTitulo(curso.getTitulo());
		return currentCurso;
	}
}
