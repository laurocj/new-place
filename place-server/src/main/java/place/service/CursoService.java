package place.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import place.factory.CursoFactory;
import place.model.Curso;
import place.repository.CursoRepository;

@Service
public class CursoService {

	@Autowired
    private CursoRepository cursoRepository;
	
	@Autowired
	private CursoFactory cursoFactory;

	public List<Curso> findAll() {
		return cursoRepository.findAll();
	}

	public Curso findById(long id) {
		Optional<Curso> curso = cursoRepository.findById(id);
		return curso.orElse(null);
	}

	public boolean isExist(Curso curso) {
		// TODO Auto-generated method stub
		return false;
	}

	public boolean save(Curso curso) {
		Curso cursoSave = cursoRepository.save(cursoFactory.getInstance(curso));
		return cursoSave.getId() != null;
	}

	public Curso update(Long id,Curso curso) {
		Curso currentCurso = findById(id);
		
		if(currentCurso == null) {
			return null;
		}
						
		return cursoRepository.saveAndFlush(cursoFactory.getInstance(currentCurso,curso));
	}

	public void deleteById(long id) {
		cursoRepository.deleteById(id);
	}

}
