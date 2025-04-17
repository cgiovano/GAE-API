const CorrecaoCriterio = require('../models/CorrecaoCriterioModel');
const CorrecaoQuestao = require('../models/CorrecaoQuestaoModel');
const CriterioService = require('../services/CriterioService');
const QuestaoService = require('./QuestaoService');

class CorrecaoService {

    static async criarCorrecao(correcao) {
        const correcoesQuestoes = await this.criarCorrecaoQuestao(await QuestaoService.listarQuestoesPorAtividade(correcao.id_atividade), correcao);
        const correcoesCriterios = await this.criarCorrecaoCriterio(correcoesQuestoes);

        console.log(correcoesQuestoes);
        console.log(correcoesCriterios);

        return {
            correcoesQuestoes,
            correcoesCriterios
        }
    }

    static async criarCorrecaoQuestao(questoes, correcao) {
        let res = [];

        for(let questao of questoes) {
            try {
                let correcaoQuestao = await CorrecaoQuestao.create({
                    id_correcao: correcao.id,
                    id_questao: questao.id,
                    pontuacao: 0,
                    descricao_correcao: ""
                });

                console.log('CorrecaoQuestao criada:', JSON.stringify(correcaoQuestao));
    
                if (!correcaoQuestao)
                    throw new Error("Não foi possível criar o item de correcao questao");
                else
                    res.push(correcaoQuestao);    
            } catch (error) {
                console.error("Erro!" + error);
            }
        }

        return res;
    }

    static async criarCorrecaoCriterio(correcoesQuestoes) {
        let res = [];

        for (let correcaoQuestao of correcoesQuestoes) {
            try {
                const criteriosQuestoes = await CriterioService.ListarCriterioPorQuestao(correcaoQuestao.id_questao);
                console.log('CorrecaoQuestao criada:', JSON.stringify(criteriosQuestoes));

                for (let criterioQuestao of criteriosQuestoes) {
                    let correcaoCriterioQuestao = await CorrecaoCriterio.create({
                        id_correcao_questao: correcaoQuestao.id,
                        id_item_criterio: null,
                        id_criterio: criterioQuestao.id,
                        pontuacao: 0
                    });

                    if(!correcaoCriterioQuestao)
                        throw new Error("Não foi possível criar correção para o criterio.");
                    else
                        res.push(correcaoCriterioQuestao)
                }
            } catch (error) {
                console.error("Erro!" + error);
            }
        }

        return res;
    }

}

module.exports = CorrecaoService;