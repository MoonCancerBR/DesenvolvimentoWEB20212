import style from './style.module.css'

function  Hero(props){
    return(
        <div className={style.hero}>
            <h3>{props.name}</h3>
            <img src={props.img} alt="" />
        </div>
    )
}

export default Hero;