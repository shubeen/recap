import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

 const [heroes, setHeroes] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setHeroes(data){
      
    })
  },[])

  const hero = ['Tom Hanks', 'arnold', 'brad pitt', 'russel crow', 'denzel']
  const moviesCount = ['35','20','45','30','24']
  return (
    <div className="App">

      <MoviesCounter></MoviesCounter>
      <MoviesCounter></MoviesCounter>
         
           
           {
             hero.map(hro=> <Heroes name={hro}></Heroes>)
             
           }
           {/* {
              moviesCount.map(mvo=> <Heroes movies={mvo}></Heroes>)
             } */},
           
           
         {/* <Heroes name = {heroesNames[2]} movies={moviesCount[3]}></Heroes>
         <Heroes name = {hero[0]} movies={moviesCount[2]}></Heroes>
         {/* <Heroes name = {heroesNames[3]} movies={moviesCount[0]}></Heroes>
         <Heroes name = {heroesNames[1]} movies={moviesCount[1]}></Heroes> */} 
         
      <header className="App-header">

        
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>

            );
        }
        

function MoviesCounter (){

   const[count,setCount]= useState(0);

  const clickHandle=()=>setCount(count+1);
  
   const counterStyle={
    border: '4px solid yellow',
    margin:'10px',
    backgroundColor:'lightgray',
    borderRadius: '10px',
    boxSHadow:'5px 8px gray'
  }

  return (
    <div style={counterStyle}>
      <button onClick={clickHandle}>movies</button>
      <h3>Number of movies: {count}</h3>
      <MoviesDisplayNumber movies={count}></MoviesDisplayNumber>
    </div>
  )
}
function MoviesDisplayNumber(props){
return <h3>Display Number: {props.movies} </h3>
}
function Heroes(props){
  const heroesStyle={
    border: '3px solid gray',
    margin: '10px',
    backgroundColor: 'lightgray',
    borderRadius: '10px',
    boxShadow: '5px 8px gray',

  }
  return (
    <div style = {heroesStyle}>
      <h1>Name : {props.name}</h1>
      <h3>Movies: {props.movies}</h3>
    </div>
  )
}

export default App;
