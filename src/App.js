import React, { Component } from 'react';
import Form from './components/Form';
import Recipes from './components/Recipes';
import key from './config/config';
// import './App.css';

const { API_KEY } = key;
// const API_KEY = '98b4029bf97b17c8110c7430650c4fb7';

class App extends Component {
  state = {
    recipes: []
  };
  getRecipe = async e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const apiCall = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&page=2`
    );
    const data = await apiCall.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  };
  render() {
    return (
      <div className="ui container">
        <header className="">
          <h1 className="ui header large">Recipe Search</h1>
        </header>

        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
