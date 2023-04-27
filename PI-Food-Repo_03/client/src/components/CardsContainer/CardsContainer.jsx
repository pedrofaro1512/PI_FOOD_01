import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = ({recipes}) => {
    //const recipesList = recipes;

    return (
        <div className={style.container}>
            {recipes.map(recipe=>{
                return <Card 
                    id={recipe.id}
                    name={recipe.title}
                    image={recipe.image}
                    diets={recipe.diets}
                />
            })}
            
            {/* <p>Este componente debe tomar un array de 
            recetas y por cada receta, renderizar un 
            componente Card</p> */}
        </div>
    );
}

// const CardsContainer = () => {
//     const recipes = useSelector( state => state.recipes);

//     return (
//         <div className={style.container}>
//             {recipes.map(recipe=>{
//                 return <Card 
//                     id={recipe.id}
//                     name={recipe.title}
//                     image={recipe.image}
//                     diets={recipe.diets}
//                 />
//             })}
            
//             {/* <p>Este componente debe tomar un array de 
//             recetas y por cada receta, renderizar un 
//             componente Card</p> */}
//         </div>
//     );
// }

export default CardsContainer;