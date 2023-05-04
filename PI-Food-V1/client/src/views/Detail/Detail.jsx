import useRecipe from "../../hooks/useRecipe";
import style from "./Detail.module.css";
import React from "react";

const Detail = () => {

    const recipe = useRecipe();
    
    return(
        <div className={style.detailCards}>
            {/* <h1>Vista Detail</h1> */}
            {recipe.title ? (     // aca se pregunta si ya llego el name, y si si muestra las siguientes lineas
                <>
                <div>
                    <h2>ID: {recipe.id}</h2>
                    <h2>Name: {recipe.title}</h2>
                    <h2>Summary: {recipe.summary.replace(/<[^>]*>/g,"")}</h2>
                    <h2>Health Score: {recipe.healthScore}</h2>                
                    <h2>Instructios: {recipe.instructions.replace(/<[^>]*>/g,"")}</h2>
                    <h2>Image: src={recipe.image} alt={`${recipe.id}`}</h2>
                    <h2>Diets: {recipe.diets.join(', ')}</h2>
                </div>
                </>
            ) : (
                <div className={style.Loading}>
                    <h1></h1>
                    <p>Loading...</p>
                </div>
            )}
        </div>
    )
}
export default Detail;