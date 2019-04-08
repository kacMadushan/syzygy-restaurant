import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.showDetailsRecipe = this.showDetailsRecipe.bind(this);
        this.findRecipeInBreakfast = this.findRecipeInBreakfast.bind(this);
        this.handleAddNewRecipe = this.handleAddNewRecipe.bind(this);

        this.nameTextInput = React.createRef();
        this.infoTextarea = React.createRef();
        this.selectCategory = React.createRef();

        this.state = {
            errors: undefined,
            showDtails: false,
            recipe: [{ name: '', info: ''}],
            recipes: [
                { recId: 1, name: 'Shrimp De Jonghe', info: 'this is demo text', catId: 2 },
                { recId: 2, name: 'Lemon Cream Cake', info: 'this is demo text', catId: 1 },
                { recId: 3, name: 'Pork Chops', info: 'this is demo text', catId: 3 },
                { recId: 4, name: 'Add New', info: 'this is demo text', catId: 2 },
            ],
            categorys: [
                { id: 0, type: 'All' },
                { id: 1, type: 'Breakfast' },
                { id: 2, type: 'Lunch' },
                { id: 3, type: 'Dinner' }
            ]
        }
    }

    componentDidMount() {
        const json = localStorage.getItem('recipes');
        const recipes = JSON.parse(json);

        if(recipes) {
            this.setState(() => ({ recipes }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.recipes.length !== this.state.recipes.length) {
            const json = JSON.stringify(this.state.recipes);
            localStorage.setItem('recipes', json);
        };
    };

    handleAddNewRecipe(e) {
        e.preventDefault();

        const recId = 4;
        const name = this.nameTextInput.current.value;
        const discription = this.infoTextarea.current.value;
        const category = this.selectCategory.current.value;

        const categoryId = parseInt(category);
        console.log(categoryId);
        
        this.setState({ recipes: this.state.recipes.push({ 'recId': recId + 1, 'name': name, 'info': discription, 'catId': categoryId })})
        console.log(this.state.recipes);
    }

    findRecipeInBreakfast(toBreakfastId) {

        const recipeId = this.state.recipes.findIndex((recipe) => {
            return recipe.catId === toBreakfastId;
        })

        const recipe = {
            ...this.state.recipes[recipeId]
        }

        const getId = recipe.catId
        this.setState({ getId });
    }

    showDetailsRecipe(recipeToId) {
        const findToRecipeID = this.state.recipes.findIndex((recipe) => {
            return recipe.recId === recipeToId;
        });

        const setRecipeId = [];
        setRecipeId.push(findToRecipeID);

        const showDtails = this.state.showDtails;

        this.setState({ setRecipeId, showDtails: !showDtails });
    }

    render() {
        let passId = this.state.setRecipeId;
        let categoryId = this.state.getId;
        let showRecipes = [];

        this.state.recipes.forEach((recipe) => {
            if(recipe.catId === categoryId) {
                showRecipes.push(
                    <div className="col-sm-4" key={recipe.recId}>
                        <h4>{recipe.name}</h4>
                        <p>{recipe.info}</p>
                        <button 
                            onClick={() => this.showDetailsRecipe(recipe.recId)}
                        >
                            Show Details
                        </button>
                    </div>
                ) 
            }
        })

        return (
            <div>
                <h2>Syzygy Retuarent</h2>
                <hr/>

                <div>
                    <form onSubmit={this.handleAddNewRecipe}>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>Recipe Name</label>
                                    <input ref={this.nameTextInput} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>Discription</label>
                                    <textarea ref={this.infoTextarea} className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>Select Category</label>
                                    <select className="form-control" ref={this.selectCategory}>
                                        <option>Select category</option>
                                        {this.state.categorys.map((category) => {
                                            return <option key={category.id} value={category.id}>{category.type}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <button>Add New</button>
                            </div>
                        </div>
                    </form>
                </div>

                <hr/>

                <div className="row">
                    <div className="col-sm-6">
                        {this.state.categorys.map((category) => <button 
                                                                    onClick={() => this.findRecipeInBreakfast(category.id)} 
                                                                    key={category.id}
                                                                >
                                                                    {category.type}
                                                                </button>)}
                    </div>
                </div>

                <hr/>

                <div>
                    <div className="row">
                        {showRecipes.length === 0 ? 
                            this.state.recipes.map((recipe) => {
                                return  <div className="col-sm-4" key={recipe.recId}>
                                            <h4>{recipe.name}</h4>
                                            <p>{recipe.info}</p>
                                            <button 
                                                onClick={() => this.showDetailsRecipe(recipe.recId)}
                                            >
                                                Show Details
                                            </button>
                                        </div>
                            })
                            : showRecipes 
                        }
                    </div>
                    <div className="row" style={{ marginTop: '20px'}}>
                        {this.state.showDtails && (
                            <div className="col-sm-6">
                                <hr/>
                                <h4>{this.state.recipes[passId].name}</h4>
                                <p>{this.state.recipes[passId].info}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}