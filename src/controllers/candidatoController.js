const candidatoModel = require('../models/candidatoModel')

async function findAll(req, res){
    try{
        const candidatos = await candidatoModel.findAll()
        res.json(candidatos)
    }catch(e){
        console.log(e)
    }
}

async function createCandidato(req, res){
    candidatoModel.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    }).then((result) => res.json(result))
}

async function login(req, res){
    const candidato = candidatoModel.findOne({where: {
        email: req.body.email,
        senha: req.body.senha,
      },
    }).then((candidato) => {
        if(candidato === null){
            res.json({message: "Credenciais incorretas"})
        }else{
            res.json({message: "Logado"})
        }
    })
}

module.exports = {
    findAll,
    createCandidato,
    login
}