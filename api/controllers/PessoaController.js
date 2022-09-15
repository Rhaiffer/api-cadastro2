const database = require('../models')

class PessoaController {
    static async pegaTodasAsPessoas(req, res){
        try{
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error){
            return res.status(500).json(error.message)

        }
    }

    static async pegaUmaPessoa(req, res){
        const {id} = req.params
        try{
            const umaPessoa = await database.Pessoas.findOne({where: 
                {id:Number(id)
                }
            })
            return res.status(200).json(umaPessoa)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async criaPessoa(req, res){
        const novaPessoa = req.body
        try{
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa(req, res){
        const {id} = req.params
        const novasInfos = req.body
        try{
            await database.Pessoas.update(novasInfos,{where: {id:Number (id)} })
            const pessoaAtualizada = await database.Pessoas.findOne({where: 
                {id:Number(id)
                }
            })
            return res.status(200).json(pessoaAtualizada)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaPessoa(req, res){
        const {id} = req.params
        try{
            await database.Pessoas.destroy({where: {id:Number (id)} })
            return res.status(200).json({ mensagem: `id ${id} deletado` })
        }catch (error){
            return res.status(500).json(error.message)

        }
     }

     static async pegaUmaMatricula(req, res){
        const {estudante_id, matricula_id} = req.params
        try{
            const umaMatricula = await database.Matriculas.findOne({where: 
                {id:Number(matricula_id),
                estudante_id: Number(estudante_id)
                }
            })
            return res.status(200).json(umaMatricula)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async criaMatricula(req, res){
        const {estudante_id} = req.params
        const novaMatricula = {...req.body, estudante_id:Number(estudante_id)}
        try{
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaMatricula(req, res){
        const {estudante_id, matricula_id} = req.params
        const novasInfos = req.body
        try{
            await database.Matriculas.update(novasInfos,{
                where: {id:Number (matricula_id), estudante_id:Number(estudante_id)}})
            const MatriculaAtualizada = await database.Matriculas.findOne({where: 
                {id:Number(matricula_id)
                }
            })
            return res.status(200).json(MatriculaAtualizada)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaMatricula(req, res){
        const {estudante_id,matricula_id} = req.params
        try{
            await database.Matriculas.destroy({
                where: {id:Number (matricula_id)}})
            return res.status(200).json({ mensagem: `id ${matricula_id} deletado` })
        }catch (error){
            return res.status(500).json(error.message)

        }
     }

}
   

 
module.exports = PessoaController