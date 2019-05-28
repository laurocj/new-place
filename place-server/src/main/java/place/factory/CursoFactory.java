package place.factory;

import org.springframework.stereotype.Component;

import place.model.Curso;

@Component
public class CursoFactory {
	
	public Curso getInstance(Curso curso) {
		curso.getAtividades().forEach(atividade -> atividade.setCurso(curso));
		return curso;
	}

	public Curso getInstance(Curso currentCurso, Curso curso) {
		currentCurso.setConteudo(curso.getConteudo());
		currentCurso.setTitulo(curso.getTitulo());
		currentCurso.getAtividades().clear();
		currentCurso.addAtividades(curso.getAtividades());
		currentCurso = getInstance(currentCurso);
		return currentCurso;
	}
}
