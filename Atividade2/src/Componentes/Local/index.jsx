import style from './style.module.css'

function Local(props){
    return(
        <div className={style.local}>
            <h3>{props.name}</h3>
            <img src={props.img} alt= " " /> 
        </div>
    )
}

export default Local;