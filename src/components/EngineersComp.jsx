import '../components/Engineers.css';
import { Link } from 'react-router-dom';

// Se utiliza el react-router-dom
function Engineer({ name = "name", degree = "degree", description = "description" }) {
    return (
        <div className="engineer">
            <Link to={name}>
                <h2>{name}</h2>
            </Link>
            <h3>{degree}</h3>
            <p>{description}</p>

        </div>
    )
}

export default Engineer;