const Atividade = require('../models/AtividadeModel');
const QuestaoModel = require('../models/QuestaoModel');

class QuestaoService {
    static async listarQuestoesPorAtividade(idAtividade) {
        try {
            const questoes = await QuestaoModel.findAll({where: {
                id_atividade: idAtividade
            }});

            if(questoes)
                return questoes
            else
                return "Não foram econtradas questões"
        } catch (error) {
            return error;
        }
    }
}

module.exports = QuestaoService;