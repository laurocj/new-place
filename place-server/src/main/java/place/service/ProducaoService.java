package place.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import place.factory.ProducaoFactory;
import place.model.Curso;
import place.model.Producao;
import place.repository.ProducaoRepository;

@Service
public class ProducaoService {

	@Autowired
    private ProducaoRepository producaoRepository;

	@Autowired
    private ProducaoFactory producaoFactory;
	
	
	public List<Producao> findAll() {
		return producaoRepository.findAll();
	}
	
//	public List<Producao> findByCurso(Curso curso) {
//		return producaoRepository.findByCurso(curso);
//	}

	public Producao findById(long id) {
		Optional<Producao> producao = producaoRepository.findById(id);
		return producao.get();
	}

	public boolean isExist(Producao producao) {
		// TODO Auto-generated method stub
		return false;
	}

	public boolean save(Producao producao) {
		Producao producaoSave = producaoRepository.save(producao);
		return producaoSave.getId() != null;
	}
	
	public void update(Producao currentProducao) {
		producaoRepository.save(currentProducao);
		
	}

	public void deleteById(long id) {
		producaoRepository.deleteById(id);
	}

}
