import React from 'react'
import styled from 'styled-components'
import {PartOne,PartTwo,PartThree} from './Parts';

const Space= styled.div`
  width: 10px;
  height: 10px;
  `
  ;



const WholeBoxDecor=styled.div
`
width: 100%;
height: 90vh;
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

@media (max-width: 768px) {
  flex-direction: column;

}

`;

const WholeBoxTitle = styled.h1
`
font-family: Zilla Slab;
font-style: normal;
font-weight: normal;
color: #FFFFFF;
text-align:center;
margin-bottom:5%;

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
width:70%;
`;




const WholeBox = () => {
    return (
       <WholeBoxDecor>
           <WholeBoxTitle>Lorem ipsum dolor sit amet.</WholeBoxTitle>
           <WholeBoxPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </WholeBoxPara>
           <Space/>
           <FlexParts>
               <PartOne></PartOne>
               <Space/>
               <PartTwo> </PartTwo>
               <Space/>
               <PartThree></PartThree>
            </FlexParts>
           
           

       </WholeBoxDecor>
    )
}

export default WholeBox
