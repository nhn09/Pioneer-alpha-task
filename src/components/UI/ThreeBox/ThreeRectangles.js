import React from 'react'
import styled from 'styled-components'
import {Space} from '../../News/Buttons'
import { PinkRectangleOne, PinkRectangleTwo, WhiteRectangle } from './EachBox';

const AllBox=styled.div
`
width: 100%;
height: 200px;
padding:1em;
display:grid;
grid-gap:10%;
background-color: #30363D;
grid-template-columns: repeat(3, 1fr);
justify-content:center;`;


const ThreeRectangles = () => {
    return (
       <AllBox>

           <PinkRectangleOne></PinkRectangleOne>
           <WhiteRectangle/>
           <PinkRectangleTwo/>

       </AllBox>
    )
}

export default ThreeRectangles
