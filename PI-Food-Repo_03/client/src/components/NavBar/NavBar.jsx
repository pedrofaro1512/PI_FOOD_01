import { Link } from 'react-router-dom';
import style from "./NavBar.module.css";

export const NavBar = () => {
    return (
        <div className={style.mainContainer}>
            <Link to="/home">HOME</Link>
            <Link to="/create">FORM</Link>
            <Link to="/">LANDING</Link>
        </div> 
    )
};

export const SearchBar = ({changeHandler, submitHandler}) => {
    return (
        <div className={style.buscarNombre}>
            <form onChange={changeHandler}>
                <input type="search" placeholder='Nombre Receta' />
                <button type='submit' onClick={submitHandler}>Buscar</button>
            </form>
        </div>
    )
}; 

export default { NavBar, SearchBar };