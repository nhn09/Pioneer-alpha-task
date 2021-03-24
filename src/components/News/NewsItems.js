import React from 'react'
import styled from 'styled-components'

const NewsItems = ( {item} ) => {
    return (
        <div className='card'>
           <img src={item.imageUrl} alt='' />
           <div className='card-container'>
             <h1>{item.title}</h1>
             <p>

             {item.summary}
             </p>
             <button>Read More</button>
             

             
            </div>
         </div>


      
      
    )
  }
    
export default NewsItems
