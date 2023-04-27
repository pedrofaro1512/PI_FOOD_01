import { useNavigate } from 'react-router-dom';
import style from "./Landing.module.css"

const Landing = () => {

    const navigate = useNavigate();
    function handleButtonClick() {
        navigate('/home')
    };

    return (
            <div className={style.landing}>
                <h1>CHEF EN CASA</h1>
                
                <p>Bienvenidos a nuestro sitio web de recetas de comidas. 
                Aquí encontrarás una amplia variedad de platos deliciosos para cualquier ocasión, 
                adaptados a diferentes tipos de dietas y preferencias alimentarias. Desde recetas 
                rápidas y fáciles para la cena de la semana, hasta comidas elaboradas para sorprender 
                a tus invitados en ocasiones especiales.
                <br />
                <br />
                En nuestra página además, contamos con opciones vegetarianas, veganas, sin gluten, 
                bajas en calorías y muchas otras opciones para adaptarse a tus necesidades dietéticas. 
                Todas nuestras recetas están cuidadosamente seleccionadas y probadas por nuestro 
                equipo de chefs y expertos en cocina, para asegurarnos de ofrecerte las mejores 
                opciones para tus comidas.
                <br />
                <br />
                <em> ¿Qué esperas para descubrir nuestras recetas y comenzar a disfrutar de la 
                comida en casa como nunca antes? Haz clic en el botón de abajo para comenzar a 
                explorar nuestro sitio web. </em> </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                
                <button className={style.btn} onClick={handleButtonClick}>let's go cook</button>
            </div>
    )
}

export default Landing;