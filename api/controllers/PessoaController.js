const database = require('../models');

class PessoaController {
    static async pegarTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.findAll();
        
            return res.status(200).json(todasAsPessoas);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegarUmaPessoa(req, res) {
        const id = req.params.id;

        try {
            const pessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            });

            return res.status(200).json(pessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criarPessoa(req, res) {
        const novaPessoa = req.body;

        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa);

            return res.status(200).json(novaPessoaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarPessoa(req, res) {
        const id = req.params.id;
        const novasInfos = req.body;

        try {
            await database.Pessoas.update(novasInfos, { 
                where: {
                    id: Number(id)
                }
            });


            const pessoaAtualizada = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            });

            return res.status(200).json(pessoaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletarPessoa(req, res) {
        const id = req.params.id;

        try {
            await database.Pessoas.destroy({
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

    static async pegarTodasAsMatriculasDeUmaPessoa(req, res) {
        const idPessoa = req.params.idPessoa;

        try {
            const todasAsMatriculas = await database.Matriculas.findAll({
                where: {
                    estudante_id: Number(idPessoa)
                }
            });

            return res.status(200).json(todasAsMatriculas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegarUmaMatricula(req, res) {
        const idPessoa = req.params.idPessoa;
        const idMatricula = req.params.idMatricula;

        try {
            const matricula = database.Matriculas.findOne({
                where: {
                    id: Number(idMatricula),
                    estudante_id: Number(idPessoa)
                }
            })

            return res.status(200).json(matricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criarMatricula(req, res) {
        const idPessoa = req.params.idPessoa;
        const informacoesDaNovaMatricula = { ...req.body, estudante_id: idPessoa};

        try {
            const novaMatricula = database.Matriculas.create(informacoesDaNovaMatricula);

            return res.status(200).json(informacoesDaNovaMatricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;