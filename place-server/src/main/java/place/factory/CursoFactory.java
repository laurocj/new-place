package place.factory;

import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import place.model.Atividade;
import place.model.Curso;
import place.service.AtividadeService;

@Component
public class CursoFactory {
	
	@Autowired
	private AtividadeFactory atividadeFactory;
	
	@Autowired
	private AtividadeService atividadeService;
	
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
					Atividade a = atividadeService.findById(currentAtividade.getId());
					currentAtividade = atividadeFactory.getInstance(a,currentAtividade);
				}
				
				return currentAtividade;
			});
		currentCurso.setAtividades(atividades);
//		currentCurso.setAtividades(
//				curso.getAtividades()
//				.stream()
//				.map(atividade -> {
//					if(atividade.getId() == null) {
//						atividade.setCurso(currentCurso);
//					} else {
//						Atividade a = atividadeService.findById(atividade.getId());
//						atividade = atividadeFactory.getInstance(a,atividade);
////						Long id = atividade.getId();
////						Optional<Atividade> currentAtividade = currentCurso.getAtividades()
////							.stream()
////						    .filter(a -> a.getId() == id)
////						    .findFirst();
////							
////						if(currentAtividade.isEmpty()) {
////							atividade.setCurso(currentCurso);
////						} else {
////							currentAtividade.get().setTitulo(atividade.getTitulo());
////							currentAtividade.get().setConteudo(atividade.getConteudo());
////							atividade = currentAtividade.get();
////						}
//					}
//					return atividade;
//				})
//				.collect(Collectors.toSet())
//			);
//		

		return currentCurso;
	}
}
