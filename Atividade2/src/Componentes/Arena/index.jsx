import Hero from '../Hero'
import Enemy from '../Enemy'
import Local from '../Local'
import style from './style.module.css'

const Arena = ({arena,local,hero,enemy})=>{
    return (
        <div className={style.arena}>
            <h2>{arena}</h2>
            <Local name = {local.name} img = {local.img}/>
            <div>
            <Enemy name={enemy.name} img={enemy.img}/>  
            <Hero name={hero.name} img={hero.img}/>
            </div>  
        </div>
    )
}

export default Arena;