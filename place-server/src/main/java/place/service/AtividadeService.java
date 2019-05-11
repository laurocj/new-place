package place.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import place.model.Atividade;
import place.model.Curso;
import place.repository.AtividadeRepository;

@Service
public class AtividadeService {

	@Autowired
    private AtividadeRepository atividadeRepository;

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

	public void updateAtividade(Atividade currentAtividade) {
		atividadeRepository.save(currentAtividade);
		
	}

	public void deleteAtividadeById(long id) {
		atividadeRepository.deleteById(id);
	}

}
