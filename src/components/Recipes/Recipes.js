import React, { Fragment } from 'react';
import Recipe from './Recipe/Recipe';

const Recipes = (props) =>  {
    const { recipes, categoryByRecipe, detailsOfRecipes } = props;
    const setCategoryBy = categoryByRecipe;
    const listOfRecipes = [];

    recipes.forEach(recipe => {
        if(recipe.category === setCategoryBy) {
            listOfRecipes.push(
                <Recipe 
                    key={recipe.recId}
                    recipeId={recipe.recId}
                    recipeImage={recipe.recImage} 
                    recipeName={recipe.recName}
                    recipeDisc={recipe.recDiscription}
                    recipePrice={recipe.price}
                    detailsOfRecipes={detailsOfRecipes}  
                />
            )
        }
    });

    const viewAllRecipes = recipes.map(recipe => (
        <Recipe 
                key={recipe.recId}
                recipeId={recipe.recId}
                recipeImage={recipe.recImage} 
                recipeName={recipe.recName}
                recipeDisc={recipe.recDiscription}
                recipePrice={recipe.price}  
                detailsOfRecipes={detailsOfRecipes}
        />
    ));

    return (
        <Fragment>
            { listOfRecipes.length === 0 ? viewAllRecipes :  listOfRecipes }
        </Fragment>
    );
};

export default Recipes;