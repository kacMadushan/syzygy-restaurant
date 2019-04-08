import React from 'react';

const Button = (props) => {
    const { categoryId, findCategoryByRecipes } = props;
    const { btnType } = props;
    return <button 
                className={btnType} 
                onClick={() => findCategoryByRecipes(categoryId)}>
                    { props.children }
            </button>
}

export default Button;