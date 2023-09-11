import style from "./Card.module.css"
import { Link } from "react-router-dom"

const Card = (props) => {
    return (
        <div className={style.card}>
            <Link to={`/detail/${props.id}`} className={style.linkCard}>
                <h3>{props.name}</h3>
                <img className={style.img} src={props.img} alt={props.name} />
                <p>Attack {props.attack}</p>
                <p>{props.types}</p>
            </Link>

        </div>
    )
};
export default Card;