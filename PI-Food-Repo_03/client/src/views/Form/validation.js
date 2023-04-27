const validation = (form) => {
    const errors = {};
    
    if (!form.name) {
        errors.name = "Debe completar este espacio";
    }
    if (!form.summary) {
        errors.summary = "Debe completar este espacio";
    }
    if (!form.healthScore && (form.healthScore.length < 0 || form.healthScore.length > 100)) {
        errors.healthScore = "Debe completar este espacio con valores de 0 a 100";
    }
    if (!form.steps) {
        errors.steps = "Debe completar este espacio con al menos un paso";
    }
    if (!form.image) {
        errors.image = "Debe proporcionar la URL de la imagen de la receta";
    }
    if (!form.dietTypes) {
        errors.dietTypes = "Debe proporcionar al menos un tipo de dieta";
    }
    return errors;
};

export default validation;