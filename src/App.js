import React, {useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Card from './components/News/Cards';
import Header from './components/UI/header'

const App=() => {
  const[items,setItems] = useState ([])
  const[isLoading,setIsLoading] = useState ([true])


 useEffect(()=>
 {
   const fetchItems = async () => 
   {
     const result = await axios (`https://test.spaceflightnewsapi.net/api/v2/articles`)

     console.log(result.data)
     setItems(result.data)
     setIsLoading(false)
   }

   fetchItems()
 },[])


  return (
    <div >
     <Header/>
     <Card  isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
