package place.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import place.factory.AtividadeFactory;
import place.model.Atividade;
import place.model.Curso;
import place.repository.AtividadeRepository;

@Service
public class AtividadeService {

	@Autowired
    private AtividadeRepository atividadeRepository;

	@Autowired
    private AtividadeFactory atividadeFactory;
	
	
	public List<Atividade> findAllAtividades() {
		return atividadeRepository.findAll();
	}
	
	public List<Atividade> findAtividadesByCurso(Curso curso) {
		return atividadeRepository.findByCurso(curso);
	}

	public Atividade findById(long id) {
		Optional<Atividade> atividade = atividadeRepository.findById(id);
		return atividade.get();
	}

	public boolean isAtividadeExist(Atividade atividade) {
		// TODO Auto-generated method stub
		return false;
	}

	public boolean saveAtividade(Atividade atividade) {
		Atividade atividadeSave = atividadeRepository.save(atividade);
		return atividadeSave.getId() != null;
	}
	
	public boolean saveAtividade(Set<Atividade> atividades,Curso curso) {
		boolean tudoCerto = true;
		if(curso.getId() == null) {
			tudoCerto = false;
		} else {
			for (Atividade atividade : atividades) {
				atividade.setCurso(curso);
				tudoCerto = tudoCerto && saveAtividade(atividade);
			}
		} 
		return tudoCerto;
	}

	public void updateAtividade(Atividade currentAtividade) {
		atividadeRepository.save(currentAtividade);
		
	}

	public void deleteAtividadeById(long id) {
		atividadeRepository.deleteById(id);
	}

	public void saveAtividade(Set<Atividade> currentAtividades, Set<Atividade> atividades, Curso currentCurso) {
		currentAtividades
		.forEach(currentAtividade -> {
			Long id = currentAtividade.getId();
			
			Optional<Atividade> atividade = atividades
				.stream()
			    .filter(a -> a.getId() == id)
			    .findFirst();
			
			if(atividade.isPresent()) {
				currentAtividade = atividadeFactory.getInstance(currentAtividade,atividade.get());
				currentAtividade.setCurso(currentCurso);
				saveAtividade(currentAtividade);
			} else {
				deleteAtividadeById(id);				
			}
		});
	}

}
