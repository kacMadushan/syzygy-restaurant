import React from 'react';

const RecipeImage = (props) => {
    const { size, thumb, name } = props;
    return (
        <div>
            <img className={size} src={thumb} alt={name} />
        </div>
    );
}

export default RecipeImage;