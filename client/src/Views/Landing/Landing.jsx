import { Link } from 'react-router-dom'
const Landing = () => {
    return (
        <div>
            <div>Estoy en Landing</div>
            <Link to='/home'>
                <button>IR A HOME</button>
            </Link>
        </div>
    )
};
export default Landing;