import axios from "axios";
import { useState } from "react";
import validation from "./validation";

const Form = () => {
    const [form, setForm] = useState({
        name:"",
        summary:"",
        healthScore:"",
        steps:"",
        image:"",
        dietTypes:""
    })

    const [errors, setErrors] = useState({
        name:"",
        summary:"",
        healthScore:"",
        steps:"",
        image:"",
        dietTypes:""
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        
        setErrors(validation({ ...form, [property]:value }))
        setForm({ ...form, [property]:value })
    };

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/recipes",form)
        .then(res=>alert("Receta creada con exito"))
        .catch(err=>alert(err))
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text"
                    value={form.title} 
                    placeholder='Escribe el nombre de la receta'
                    name="name"
                    onChange={changeHandler}
                    />
                    {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="summary">Summary: </label>
                <input 
                    type="text"
                    value={form.summary}
                    placeholder='Escribe el resumen de la receta'
                    name="summary"
                    onChange={changeHandler}
                    />
                    {errors.summary && <p style={{color:"red"}}>{errors.summary}</p>}
            </div>

            <div>
                <label htmlFor="healthScore">HealthScore: </label>
                <input 
                    type="text"
                    value={form.healthScore}
                    placeholder='Escribe el Nivel de comida saludable de la receta'
                    name="healthScore"
                    onChange={changeHandler}
                    />
                    {errors.healthScore && <p style={{color:"red"}}>{errors.healthScore}</p>}
            </div>

            <div>
                <label htmlFor="steps">Steps: </label>
                <input
                    type="text"
                    value={form.steps}
                    placeholder='Escribe el paso a paso de la receta'
                    name="steps"
                    onChange={changeHandler}
                    />
                    {errors.steps && <p style={{color:"red"}}>{errors.steps}</p>}
            </div>

            <div>
                <label htmlFor="image">Image: </label>
                <input 
                    type="text"
                    value={form.image}
                    placeholder='Digita la URL de la imagen de la receta'
                    name="image"
                    onChange={changeHandler}
                    />
                    {errors.image && <p style={{color:"red"}}>{errors.image}</p>}
            </div>

            <div>
                <label htmlFor="dietTypes">DietTypes: </label>
                <input
                    type="text"
                    value={form.dietTypes}
                    placeholder='Escribe el tipo de dieta de la receta'
                    name="dietTypes"
                    onChange={changeHandler}
                    />
                    {errors.dietTypes && <p style={{color:"red"}}>{errors.dietTypes}</p>}
            </div>
            <button type="submit">SUBMIT</button>
        </form>
    )
}

export default Form;