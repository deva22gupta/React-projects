import React, {useState,useEffect} from 'react'
import axios from 'axios'
import RecipeMap from './RecipeMap'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      margin: '10px auto',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    
  }));
  

function Recipe() {
    const classes = useStyles();

const APP_ID='028e1446'
const APP_KEY='04f3c29e3ccff7e192e1afe6eb51b2b6'
const [recipes,setRecipes] = useState([])
const [search,setSearch]= useState('')
const [query,setQuery] = useState('banana juice')
 //const [count,setCount] = useState(0)
 useEffect(
     () => {
         getRecipe();
         //console.log('effect runs')
     },[query]
 )

const getRecipe = async () =>{
    const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
   setRecipes(response.data.hits)
    console.log(response.data.hits)

};
const updateSearch = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
}
const updateQuery = (e) =>{
    e.preventDefault()
    setQuery(search)
}

    return (
        <div >

<Paper onSubmit={updateQuery} component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
type='text' value= {search} onChange={updateSearch}

        className={classes.input}
        placeholder="Search from Recipe"
        inputProps={{ 'aria-label': 'search from recipe' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
     
     
    </Paper>


            {/* <form >
                <input  />
                <button type='submit'>Search</button>
            </form> */}
            {/* {count} */}
            {/* <button onClick= {()=> setCount(count+1)}>Click</button> */}
           
           
           
           <Grid container>
            {
                recipes.map(
                    (rec) => (
                        <Grid item xs={3}>
                        <RecipeMap
                        key={rec.recipe.label}
                        title={rec.recipe.label}
                        calories={rec.recipe.calories}
                        image={rec.recipe.image}
                        ingredients={rec.recipe.ingredients}
                        
                        >

</RecipeMap>
</Grid>
                    )
                )
            }

          </Grid> 
            
        </div>
    )
}

export default Recipe


