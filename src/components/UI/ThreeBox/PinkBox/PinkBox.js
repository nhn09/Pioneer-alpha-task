import React from 'react'
import styled from 'styled-components'

const Space= styled.div`
  width: 10px;
  height: 20px;
  `
  ;

  const FlexParts = styled.div
`
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;

`;


const Pinkbox=styled.div
`
background: linear-gradient(90deg, #F27A54 -21.05%, #A154F2 121.05%);
box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.1);
justify-content:center;
color: #FFFFFF;
width:100%;
height:20em;
align-items: center;

`;


const PinkTitle=styled.h1`

font-family: Zilla Slab;
font-style: normal;
font-weight: normal;
text-align: center;
font-size:1.5em;
flex-direction:column;
`;

const PinkPara=styled.p`

font-family: Montserrat;
font-style: normal;
font-weight: normal;
line-height:1.2 em;
text-align: center;
margin:5%;
opacity: 0.8;
`;

const WhiteButton= styled.button`

background: #FFFFFF;
border-radius: 20px;
width: 190px;
height: 40px;
border: none;
color: rgba(255, 255, 255, 1);
justify-content:center;
`
 ;

 const WhiteButtonText= styled.h1`
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 10px;
text-align:center;
text-transform: uppercase;
color: #3C444C;
`;


const PinkBox = () => {
    return (
        <Pinkbox>
            <FlexParts>
            <Space/>
            <Space/>
            <PinkTitle>Lorem Ipsum Dolor</PinkTitle>
            <Space/>
            <PinkPara> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </PinkPara>
            <WhiteButton> <WhiteButtonText>Read More</WhiteButtonText></WhiteButton>
            </FlexParts>
            
          
          
        </Pinkbox>
    )
}

export default PinkBox
