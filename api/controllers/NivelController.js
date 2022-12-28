const database = require('../models');

class NivelController {
    static async pegarTodosOsNiveis(req, res) {
        try {
            const todosOsNiveis = await database.Nivel.findAll();
        
            return res.status(200).json(todosOsNiveis);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegarUmNivel(req, res) {
        const id = req.params.id;

        try {
            const nivel = await database.Nivel.findOne({
                where: {
                    id: Number(id)
                }
            });

            return res.status(200).json(nivel);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criarNivel(req, res) {
        const novoNivel = req.body;

        try {
            const novoNivelCriado = await database.Nivel.create(novoNivel);

            return res.status(200).json(novoNivelCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarNivel(req, res) {
        const id = req.params.id;
        const novasInfos = req.body;

        try {
            await database.Nivel.update(novasInfos, { 
                where: {
                    id: Number(id)
                }
            });


            const nivelAtualizado = await database.Nivel.findOne({
                where: {
                    id: Number(id)
                }
            });

            return res.status(200).json(nivelAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletarNivel(req, res) {
        const id = req.params.id;

        try {
            await database.Nivel.destroy({
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

module.exports = NivelController;