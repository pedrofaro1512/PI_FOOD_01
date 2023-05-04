import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({
    id,
    name,
    image,
    diets
}) => {
    return (
        <div className={style.card}>
            <Link to={`/detail/${id}`}>
                <h2>name: {name}</h2>
            </Link>
            <h2>image: {image}</h2>
            <h2>diets: {diets}</h2>

            {/* <h2>Este componente debe mostrar la info de 
            cada receta mapeada y darnos un link para
            ir al detalle de la receta</h2> */}
        </div>
    )
}

export default Card;