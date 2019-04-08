import React, { Component } from 'react';
import { hot } from 'react-hot-loader'

import Row from '../components/Row/Row';
import Columns from '../components/Columns/Columns';
import Header from '../components/Header/Header';
import CategoryMenu from '../components/CategoryMenu/CategoryMenu';
import Recipes from '../components/Recipes/Recipes';
import DetailMoadl from '../components/DetailModal/DetailModal';

class SyzygyApp extends Component {
    constructor(props) {
        super(props);
        this.findCategoryByRecipes = this.findCategoryByRecipes.bind(this);
        this.detailsOfRecipes = this.detailsOfRecipes.bind(this);
        this.closeModal = this.closeModal.bind(this);
        
        this.state = {
            selectedRecipe: undefined,
            categorys: [
                { id: 0, type: 'All' },
                { id: 1, type: 'Breakfast' },
                { id: 2, type: 'Lunch' },
                { id: 3, type: 'Dinner' }
            ],
            recipes: [
                {
                    recId: 1,
                    recImage: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/03/filopie.jpg?itok=U3rY5cUe',
                    recName: 'Herby spring chicken',
                    recDiscription: 'Minimise your washing-up with this delicious one-pan chicken pie with spinach and herbs and topped with crispy filo pastry. It s ideal for busy weeknights',
                    price: '$45',
                    category: 1
                },
                {
                    recId: 2,
                    recImage: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/satay-sweet-potato-curry_1.jpg',
                    recName: 'Vegan recipes',
                    recDiscription: 'From brownies and pancakes to veggie-packed curries, stir-fries and salads, these vegan recipes are vibrant and delicious.',
                    price: '$32',
                    category: 1
                },
                {
                    recId: 3,
                    recImage: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/healthy-easter-lamb.jpg',
                    recName: 'Easter recipes',
                    recDiscription: 'Find Easter recipes for entertaining and baking over the bank holiday weekend, from roast lamb with all the trimmings to classic bakes',
                    price: '$75',
                    category: 2
                },
                {
                    recId: 4,
                    recImage: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/02/carrot-patch-cake.jpg?itok=jwSK76BN',
                    recName: 'Carrot patch cake',
                    recDiscription: 'Bake a simple and stunning carrot cake with cream cheese frosting for an afternoon tea or mid-morning treat. It tastes even better a day or two later',
                    price: '$42',
                    category: 2
                },
                {
                    recId: 5,
                    recImage: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/02/sticky-chocolate-cake.jpg?itok=vwd3MMS5',
                    recName: 'Sticky chocolate cake',
                    recDiscription: 'Bake this super easy chocolate cake with just a handful of storecupboard ingredients. Use marmalade (or jam if you prefer) to keep it moist and fruity',
                    price: '$32',
                    category: 3
                },
                {
                    recId: 6,
                    recImage: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/02/saddle-of-lamb.jpg?itok=CB4-xMC3',
                    recName: 'Saddle of lamb',
                    recDiscription: 'A classic Easter favourite, this saddle of lamb is stuffed with crunchy shallots, garlic and pancetta for a depth of flavour guaranteed to please your guests',
                    price: '$82',
                    category: 3
                },
            ]
        }
    }

    findCategoryByRecipes(toCategoryId) {
        //console.log(toCategoryId);
        const findToCategory = this.state.recipes.findIndex((recipe) => {
            return recipe.category === toCategoryId;
        });

        const recipes = {
            ...this.state.recipes[findToCategory]
        }
        
        const categoryByRecipe = recipes.category;
        this.setState({ categoryByRecipe });
    }

    detailsOfRecipes(toRecipeId) {
        //console.log(toRecipeId);
        const findRecipeId = this.state.recipes.findIndex((recipe) => {
            return recipe.recId === toRecipeId;
        });

        const setRecipeId = [];
        setRecipeId.push(findRecipeId);

        //const recipeById = recipe.recId;
        this.setState({ selectedRecipe: 'Recipe', setRecipeId })
    }

    closeModal() {
        this.setState({ selectedRecipe: undefined });
    }

    render() {
        const title = 'Syzygy Restaurant App';
        const subtitle = 'We are the only one best food provider';
        return (
            <div>
                <Row>
                    <Columns col="col-sm-6 offset-sm-3">
                        <Header 
                            title={title} 
                            subtitle={subtitle} 
                        />
                    </Columns>
                </Row>
                <Row>
                    <Columns col="col-sm-6 offset-sm-3">
                        <CategoryMenu 
                            categorys={this.state.categorys} 
                            findCategoryByRecipes={this.findCategoryByRecipes}
                        />
                    </Columns>
                </Row>
                <Row>
                    <Recipes 
                        recipes={this.state.recipes} 
                        categoryByRecipe={this.state.categoryByRecipe}
                        detailsOfRecipes={this.detailsOfRecipes}
                    />
                </Row>
                <DetailMoadl 
                    selectedRecipe={this.state.selectedRecipe}
                    selectedRecipeId={this.state.setRecipeId} 
                    recipes={this.state.recipes}
                    closeModal={this.closeModal}
                />
            </div>
        );
    }
}

export default hot(module)(SyzygyApp);