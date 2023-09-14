import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  let types = "";

  if (Array.isArray(props.types)) {
    // Verifica si los tipos son objetos anidados y obtén los nombres
    types = props.types.map((type) => {
      return typeof type === 'string' ? type : type.name;
    }).join(" ");
  }

  return (
    <div className={style.card}>
      <Link to={`/detail/${props.id}`} className={style.linkCard}>
        <h3>{props.name}</h3>
        <img className={style.img} src={props.img} alt={props.name} />
        <p>Attack {props.attack}</p>
        {/* Renderiza los tipos solo si existen */}
        {types && <p>{types}</p>}
      </Link>
    </div>
  );
};

export default Card;
