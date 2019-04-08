import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const CategoryMenu = (props) => {
    const { categorys, findCategoryByRecipes } = props;
    return (
        <ul className="list-inline category-menu">
            { categorys.map((category) => (
                <li key={category.id} className="list-inline-item">
                    <Button 
                        btnType="btn-border"
                        categoryId={category.id}
                        findCategoryByRecipes={findCategoryByRecipes}
                    >
                        {category.type}
                    </Button>
                </li>
            ))}
        </ul>
    );
}

CategoryMenu.propTypes = {
    categorys: PropTypes.array,
    findCategoryByRecipes: PropTypes.func
}

export default CategoryMenu;