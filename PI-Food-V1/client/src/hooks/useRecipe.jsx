import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeDetail, cleanDetail } from "../redux/actions";

const useRecipe = () => {
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipeDetail);
  const { detailId } = useParams();

  useEffect(() => {
    dispatch(getRecipeDetail(detailId));

    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, detailId]);

  return recipe;
};

export default useRecipe;