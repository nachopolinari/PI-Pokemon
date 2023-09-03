import style from "./Card.module.css"
const Card = (props) => {
    return (
        <div className={style.card}>
            <p>Nombre:{props.name}</p>
            <img className={style.img}src={props.img} alt={props.name} />
            <p>Tipo:{props.types}</p>
{/* 
            id={pokemon.id}
            name={pokemon.name}
            img={pokemon.img}
            
            life={pokemon.life}
            attack={pokemon.attack}
            defense={pokemon.defense}
            speed={pokemon.speed}
            height={}
            weight={} */}
        </div>
    )
};
export default Card;