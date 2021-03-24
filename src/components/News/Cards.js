import React from 'react'
import '../../../src/App.css'
import NewsItems from './NewsItems'

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
