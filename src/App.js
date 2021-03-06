import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';


const App = () => {

const APP_ID = '1a1a4ae1';
const APP_KEY = '97cb80a4cb02c5ae312b9485b3663642';

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('beef');


useEffect(() => {
  getRecipes();
}, [query]);


const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
   console.log(data.hits)
};

const updateSearch = e => {
  setSearch(e.target.value);
};


const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
};

  return(
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input onChange={updateSearch} className='search-bar' type='text' value={search}/>
        <button className='search-button' type='submit'>Search</button>
      </form>  
      <div className='recipes'>
      {recipes.map(recipe => (
        <Recipe
        key={recipe.recipe.label}
         title={recipe.recipe.label}
         calories={recipe.recipe.calories}
         image={recipe.recipe.image} 
         ingredients={recipe.recipe.ingredients}
         directions={recipe.recipe.url}
         />
         ))}   
         </div>
         </div>
         );
};

export default App;
