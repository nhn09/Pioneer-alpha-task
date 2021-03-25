import React from 'react'
import '../../../src/App.css'
import NewsItems from './NewsItems'
import styled from 'styled-components'

const CardDiv=styled.div
`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;
background: #30363D;
margin: 5em 5em 5em 5em ;

`;

const Cards = ({items,isLoading }) => {
    return isLoading ? (<h1>Loading</h1> ) :
     
     <section className='cards'>
        {items.map ( items => (
            //<NewsItems key={item.char_id}> item ={ item }</NewsItems>
            <NewsItems key={items.id} item={items} > </NewsItems>
        ))}

     </section>
      
    
}

export default Cards
