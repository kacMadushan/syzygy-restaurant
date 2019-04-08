import React from 'react';
import Modal from 'react-modal';
import Cancel from '../../img/cancel.png';
import Row from '../Row/Row';
import Columns from '../Columns/Columns';
import RecipeImage from '../Recipes/Recipe/RecipeImage';

const DetailMoadl = (props) => {
    const { selectedRecipe, selectedRecipeId, recipes, closeModal } = props;
    const id = selectedRecipeId;
    let showRecipe = null;

    if(id) {
        showRecipe = (
            <Row>
                <Columns col="col-sm-12">
                    <div className="colse-modal">
                        <div className="inner-border" onClick={closeModal}>
                            <img src={Cancel} alt="cancel" />
                        </div>
                    </div>
                </Columns>
                <Columns col="col-sm-4">
                    <RecipeImage 
                        size="lg-image" 
                        thumb={recipes[id].recImage} 
                        name={recipes[id].recName} />
                </Columns>
                <Columns col="col-sm-8">
                    <div className="recipe-full-details">
                        <div className="recipe-header">
                            <h2 className="recipe-of-name">{recipes[id].recName}</h2>
                            <span className="price-lable">Price: {recipes[id].price}</span>
                        </div>
                        <p className="recipe-of-dis">{recipes[id].recDiscription}</p>
                    </div>
                </Columns>
            </Row>
        );
    };

    const customStyles = {
        content : {
          top                   : '40%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          width                 :  '50%', 
          paddingBottom         :  '60px',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
    };

    return (
        <div>
            <Modal 
                isOpen={!!selectedRecipe}
                style={customStyles}
                contentLabel="Selected Recipe"
            >
                <Row>
                    <Columns col="col-sm-12">
                        <div>
                            {showRecipe}
                        </div>
                    </Columns>
                </Row>
            </Modal>
        </div>
    );
}

export default DetailMoadl;