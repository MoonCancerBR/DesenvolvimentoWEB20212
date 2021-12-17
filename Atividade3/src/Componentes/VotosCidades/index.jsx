import React,{Component} from 'react'
const cidadesStr = ['Caucaia','Fortaleza', 'Quixadá']
export default class VotosCidades extends Component{

    constructor(props){
        super(props)
        this.state = {caucaia:0, fortaleza:0, quixada:0,
                      maior:0, menor:0, total:0}
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.caucaia !== this.state.caucaia ||
            prevState.fortaleza !== this.state.fortaleza ||
            prevState.quixada !== this.state.quixada
            ){

            const cidades = [this.state.caucaia , this.state.fortaleza , this.state.quixada]
            
            let localMaior = this.state.maior
            for (let i = 0; i < cidades.length; i++){
                if(cidades[i]>localMaior)
                localMaior = cidades[i]
            }
            this.setState({maior:localMaior})

            let localMenor = this.state.maior
            for (let i = 0; i < cidades.length; i++){
                if(cidades[i]<localMenor)
                localMenor = cidades[i]
            }
            this.setState({menor:localMenor})

            let votosTotal = this.state.total
            for (let i = 0; i < cidades.length; i++){
                votosTotal = (this.state.caucaia + this.state.fortaleza + this.state.quixada)
            }
            this.setState({total:votosTotal})

        }
    }
        maisVotadas(){
            let saida = ' '
            const cidades = [this.state.caucaia, 
                this.state.fortaleza,this.state.quixada]
            for (let i = 0; i < cidades.length; i++){
                if(cidades[i]===this.state.maior) 
                saida += cidadesStr[i] + ' '
            }
            return saida
        }

        menosVotadas(){
            let saida = ' '
            const cidades = [this.state.caucaia, this.state.fortaleza,
                this.state.quixada]
            for (let i = 0; i < cidades.length; i++){
                if(cidades[i]===this.state.menor) 
                saida += cidadesStr[i] + ' '
            }
            return saida
        }
        
        totalVotos(){
            let saida = ' '
            const cidades = [this.caucaia, this.fortaleza,this.quixada]
            for (let i = 0; i > cidades.length; i++){
                if(cidades[i]===this.state.total) 
                saida+=cidadesStr[i] + ' '
            }
            return saida
        }

    render(){
        return(
        <div>
            <h2>Caucaia: {this.state.caucaia}</h2>
            <h2>Fortaleza: {this.state.fortaleza}</h2>
            <h2>Quixada: {this.state.quixada}</h2>
            <h4>Maior: {this.maior} {this.maisVotadas()}</h4>
            <h4>Menor: {this.menor}{this.menosVotadas()}</h4>
            <h4>Total: {this.state.total}{this.totalVotos()}</h4> 

            <button onClick = {()=> this.setState
            ({caucaia:this.state.caucaia+1})}
            >Votar em Caucaia</button>

            <button onClick = {()=> this.setState
            ({fortaleza:this.state.fortaleza+1})}
            >Votar em Fortaleza</button>
            
            <button onClick = {()=> this.setState
            ({quixada:this.state.quixada+1})}
            >Votar em Quixadá</button>
            
        </div>
        )
    }
}