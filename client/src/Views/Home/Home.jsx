import { useEffect } from "react";
import CardContainer from "../../Components/CardContainer/CardContainer";
import { useDispatch } from "react-redux";
import { getPokemons } from '../../Redux/actions'

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, [])

    return (
        <div>Estoy en Home:
            <CardContainer />
        </div>
    )
};
export default Home;