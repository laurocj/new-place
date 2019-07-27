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
	
	
	public List<Atividade> findAll() {
		return atividadeRepository.findAll();
	}
	
	public List<Atividade> findByCurso(Curso curso) {
		return atividadeRepository.findByCurso(curso);
	}

	public Atividade findById(long id) {
		Optional<Atividade> atividade = atividadeRepository.findById(id);
		return atividade.get();
	}

	public boolean isExist(Atividade atividade) {
		// TODO Auto-generated method stub
		return false;
	}

	public boolean save(Atividade atividade) {
		Atividade atividadeSave = atividadeRepository.save(atividade);
		return atividadeSave.getId() != null;
	}
	
	public boolean save(Set<Atividade> atividades,Curso curso) {
		boolean tudoCerto = true;
		if(curso.getId() == null) {
			tudoCerto = false;
		} else {
			for (Atividade atividade : atividades) {
				atividade.setCurso(curso);
				tudoCerto = tudoCerto && save(atividade);
			}
		} 
		return tudoCerto;
	}

	public void update(Atividade currentAtividade) {
		atividadeRepository.save(currentAtividade);
		
	}

	public void deleteById(long id) {
		atividadeRepository.deleteById(id);
	}

	public void save(Set<Atividade> currentAtividades, Set<Atividade> atividades, Curso currentCurso) {
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
				save(currentAtividade);
			} else {
				deleteById(id);				
			}
		});
	}

}
