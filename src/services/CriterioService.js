const CriterioModel = require('../models/CriterioModel');
const Questao = require('../models/QuestaoModel');

class CriterioService {
    static async ListarCriterioPorQuestao(idQuestao) {
        try {
            const criterios = await CriterioModel.findAll({
                include: {
                    model: Questao, 
                    where: {id: idQuestao}, 
                    through: {attributes: []}}
            });

            if (criterios) 
                return criterios;
            else
                return "Não foram encontrados criterios";
        } catch (error) {
            return error;
        }
    }
}

module.exports = CriterioService;