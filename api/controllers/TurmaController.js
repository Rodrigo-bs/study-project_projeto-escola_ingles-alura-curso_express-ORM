const database = require('../models');

class TurmaController {
    static async pegarTodasAsTurmas(req, res) {
        try {
            const todasAsTurmas = await database.Turma.findAll();
        
            return res.status(200).json(todasAsTurmas);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegarUmaTurma(req, res) {
        const id = req.params.id;

        try {
            const turma = await database.Turma.findOne({
                where: {
                    id: Number(id)
                }
            });

            return res.status(200).json(turma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criarTurma(req, res) {
        const novaTurma = req.body;

        try {
            const novaTurmaCriada = await database.Turma.create(novaTurma);

            return res.status(200).json(novaTurmaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarTurma(req, res) {
        const id = req.params.id;
        const novasInfos = req.body;

        try {
            await database.Turma.update(novasInfos, { 
                where: {
                    id: Number(id)
                }
            });


            const TurmaAtualizada = await database.Turma.findOne({
                where: {
                    id: Number(id)
                }
            });

            return res.status(200).json(TurmaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletarTurma(req, res) {
        const id = req.params.id;

        try {
            await database.Turma.destroy({
                where: {
                    id: Number(id)
                }
            });

            return res.status(200).json( {
                message: `Id ${id} deletado`
            } );
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = TurmaController;