package place.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import place.model.Curso;
import place.repository.CursoRepository;

@Service
public class CursoService {

	@Autowired
    private CursoRepository cursoRepository;

	public List<Curso> findAllCursos() {
		return cursoRepository.findAll();
	}

	public Curso findById(long id) {
		Optional<Curso> curso = cursoRepository.findById(id);
		return curso.get();
	}

	public boolean isCursoExist(Curso curso) {
		// TODO Auto-generated method stub
		return false;
	}

	public boolean saveCurso(Curso curso) {
		Curso cursoSave = cursoRepository.save(curso);
		return cursoSave.getId() != null;
	}

	public void updateCurso(Curso currentCurso) {
		cursoRepository.save(currentCurso);
		
	}

	public void deleteCursoById(long id) {
		cursoRepository.deleteById(id);
	}

}
