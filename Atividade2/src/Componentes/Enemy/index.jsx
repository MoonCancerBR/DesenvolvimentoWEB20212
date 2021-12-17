import style from './style.module.css'

function Enemy(props){
    return(
        <div className={style.enemy}>
            <h3>{props.name}</h3>
            <img src={props.img} alt="" />
        </div>
    )
}

export default Enemy;