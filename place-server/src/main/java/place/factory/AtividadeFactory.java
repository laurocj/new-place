package place.factory;

import org.springframework.stereotype.Component;

import place.model.Atividade;

@Component
public class AtividadeFactory {

	public Atividade getInstance(Atividade currentAtividade,Atividade atividade) {
		currentAtividade.setTitulo(atividade.getTitulo());
		currentAtividade.setConteudo(atividade.getConteudo());
		return currentAtividade;
	}
	
}
