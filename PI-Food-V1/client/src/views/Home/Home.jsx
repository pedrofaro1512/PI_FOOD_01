import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByName, getRecipes } from "../../redux/actions";
import style from "./Home.module.css";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {

    const dispatch = useDispatch();
    const recipes = useSelector( state => state.recipes);
    const [searchString, setSearchString] = useState("");

    const changeHandler = (event) => {
        setSearchString(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(getByName(searchString))
    }

    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch]) 

    return (
        <div className={style.home}>
            <h1>Vista Home</h1>
            <NavBar.SearchBar changeHandler={changeHandler} submitHandler={submitHandler}/>
            <CardsContainer recipes={recipes}/>
        </div>
    ) 
}

export default Home;