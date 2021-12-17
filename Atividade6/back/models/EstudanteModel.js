var mongoose = require('mongoose')
var EstudanteSchema = mongoose.Schema(
    {
        nome:{type:String,required:true, max:150},
        curso:{type:String,required:true, max:100},
        IRA:{type:Number,required:true}
    }
)
/*class EstudanteModel{
    constructor(_id, nome, curso, IRA){
        this._id = _id
        this.nome = nome
        this.curso = curso
        this.IRA = IRA
    }
}*/
var EstudanteModel = mongoose.model('estudantes',EstudanteSchema)
module.exports = EstudanteModel