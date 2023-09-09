import Card from "../Card/Card";
import style from "./CardContainer.module.css"
import { useSelector } from 'react-redux'


const CardContainer = () => {

    const pokemonsRender = useSelector(state => state.pokemonsRender)
console.log(pokemonsRender);
    return (
        <div className={style.cardsContainer}>
            {pokemonsRender.map(pokemon => {
                return <Card
                    key={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.name}
                    img={pokemon.img}
                    types={pokemon.types}
                />
            })}
        </div>
    )
};
export default CardContainer;