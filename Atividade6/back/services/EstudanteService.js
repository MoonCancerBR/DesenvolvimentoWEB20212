const EstudanteModel = require('../models/EstudanteModel')

class EstudanteService{
    static register(req,res){
        EstudanteModel.create(req.body)
        .then(
            (estudante) => {
                res.status(201).json(estudante)
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error)
            }
        )
    }

    static list (req,res){
        EstudanteModel.find()
        .then(
            (estudantes)=>{
                res.status(201).json(estudantes)
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error)
            }
        )
    }

    static update(req,res){
        EstudanteModel.findByIdAndUpdate(req.params._id, req.body,{'new':true}).then(
            (estudante)=>{
                res.status(201).json(estudante)            
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error)
            }
        )
    }

    static delete(req,res){
        console.log('**',req.params._id)
        EstudanteModel.findByIdAndRemove(req.params._id)
        .then(
            (estudante)=>{
                res.status(201).json(estudante)
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error)
            }
        )
    }
    static retrieve(req,res){
        EstudanteModel.findById(req.params._id).then(
            (estudantes)=>{
                res.status(201).json(estudantes)
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error)
            }
        )
    }
}

/*let estudantes = []
let _id = 0

class EstudanteService{
    static register(data){
        let estudante = new EstudanteModel(
        _id++,
        data.nome,
        data.curso,
        data.IRA
        )
    estudantes.push(estudante)
    return estudante    
    }
    static list(){
        return estudantes
    }

    static update(_id, data){
        for(let e of estudantes){
            if(e._id==_id){
                e.nome = data.nome
                e.curso = data.curso
                e.IRA = data.IRA
                return e
            }
        }
        return null
    }
    static delete(_id){
        for(let i = 0; i<estudantes.length; i++){
            if(estudantes[i]._id==_id){
                estudantes.splice(i,1)
                return true
            }
        }
        return false
    }

    static retrieve(_id){
        for(let i = 0; i<estudante.length;i++){
            if(estudantes[i]._id==_id){
                return estudantes[i]
            }
        }
        return {}
    }
}
*/
module.exports = EstudanteService