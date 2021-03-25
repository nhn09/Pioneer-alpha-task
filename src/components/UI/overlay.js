import React from 'react'
import Buttons from '../News/Buttons'
import styled from 'styled-components'

const Pwrapper= styled.h1 `
  font-family: Zilla Slab;
  font-style: normal;
  font-weight: normal;
  font-size: 44px;
  line-height: 56px;
  text-align: center;
  color: #FFFFFF;
  margin-top:20px;
  margin-bottom:30px;
`;

const ParaWrapper= styled.p `

font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 19px;
line-height: 30px;
text-align: center;
color: #FFFFFF;
margin-top:20px;
margin-bottom:30px;

`;



export const OverCover = () => {
    return (
        <div className='overlay'>
            <div className='content-overlay'>

            <Pwrapper>Lorem ipsum dolor sit amet.</Pwrapper>
            <ParaWrapper>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi a perferendis nemo error vero in.</ParaWrapper>
            <div className='flex-button'><Buttons nameOne={'Get Started'} nameTwo={'Read more'}/></div>

            </div>
            
        </div>  
       
       )
}


