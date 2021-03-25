import React from 'react'
import styled from 'styled-components'
import Parts from './Parts';

const Space= styled.div`
  width: 10px;
  height: 10px;
  `
  ;



const WholeBoxDecor=styled.div
`
width: 100%;
height: 20em;
background-color: #3C444C;
box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.1);
align-items:center;
display:flex;
flex-direction:column;
justify-content:center;`;

const FlexParts = styled.div
`
display: flex;
justify-content:center;

`;

const WholeBoxTitle = styled.h1
`
font-family: Zilla Slab;
font-style: normal;
font-weight: normal;
color: #FFFFFF;
text-align:center;

`;

const WholeBoxPara = styled.p
`
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 1em;
line-height: 1.5em;
text-align: center;
color: #CBCFD4;
`;




const WholeBox = () => {
    return (
       <WholeBoxDecor>
           <WholeBoxTitle>Lorem ipsum dolor sit amet.</WholeBoxTitle>
           <Space/>
           <WholeBoxPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </WholeBoxPara>
           <Space/>
           <FlexParts>
               <Parts></Parts>
               <Space/>
               <Parts> </Parts>
               <Space/>
               <Parts></Parts>
            </FlexParts>
           
           

       </WholeBoxDecor>
    )
}

export default WholeBox
