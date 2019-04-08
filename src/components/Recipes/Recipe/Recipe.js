import React from 'react';
import Row from '../../Row/Row';
import Columns from '../../Columns/Columns';
import RecipeImage from './RecipeImage';

const Recipe = (props) => {
    const { recipeId, recipeImage, recipeName, recipeDisc, detailsOfRecipes } = props;
    const discription = recipeDisc;
    const resDiscription = discription.substr(0, 80) + '...';
    return (
        <Columns col="col-sm-6">
            <div className="recipe">
                <Row>
                    <Columns col="col-sm-4">
                        <RecipeImage 
                            size="lg-image" 
                            thumb={recipeImage} 
                            name={recipeName}
                        />
                    </Columns>
                    <Columns col="col-sm-8">
                        <div className="recipe-details">
                            <h3 className="recipe-name">{recipeName}</h3>
                            <p className="recipe-disc">{resDiscription}</p>
                            <button 
                                className="btn-black"
                                onClick={() => detailsOfRecipes(recipeId)}
                            >
                                More Details..
                            </button>
                        </div>
                    </Columns>
                </Row>
            </div>
        </Columns>
    );
}

export default Recipe;