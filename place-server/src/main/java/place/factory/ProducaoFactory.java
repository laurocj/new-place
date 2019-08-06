package place.factory;

import org.springframework.stereotype.Component;

import place.model.Producao;

@Component
public class ProducaoFactory {

	public Producao getInstance(Producao currentProducao,Producao atividade) {
		currentProducao.setConteudo(atividade.getConteudo());
		return currentProducao;
	}
	
}
