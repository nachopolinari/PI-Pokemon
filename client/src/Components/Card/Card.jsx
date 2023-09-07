import style from "./Card.module.css"
const Card = (props) => {
    return (
        <div className={style.card}>
            <p>Nombre:{props.name}</p>
            <img className={style.img}src={props.img} alt={props.name} />
            <p>Tipo:{props.types}</p>

        </div>
    )
};
export default Card;