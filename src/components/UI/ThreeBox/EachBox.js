import React from 'react'
import styled from 'styled-components'
import ForumIcon from '@material-ui/icons/Forum';
import {TiWeatherPartlySunny} from 'react-icons/ti';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const PinkBox=styled.div
`
width: 90%;
height: 50vh;
background: linear-gradient(135deg, #F27A54 0%, #A154F2 100%);
border-radius: 6px;
font-family: Montserrat;
font-style: normal;
font-weight: 300;
font-size: 1.5em;
display: flex;
flex-direction:column;
align-items: center;
text-align: center;
color: #FFFFFF;
text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);

`;

const WhiteBox= styled.div
`
background: linear-gradient(180deg, rgba(60, 68, 77, 0) 0%, #3C444D 100%);
width: 100%;
height: 100%;
font-family: Montserrat;
font-style: normal;
font-weight: 300;
border-radius: 6px;
display: flex;
font-size: 1.5em;
display: flex;
flex-direction:column;
align-items: center;
text-align: center;
color: #FFFFFF;
text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);

`;

const Addrs= styled.text`
margin-top:25%;
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: .5em;
line-height: 1.4em;
text-align: center;
color: #CBCFD4;


`;


const Pinkbutton= styled.button`
  background: linear-gradient(90deg, #F27A54 0%, #A154F2 100%);
  border-radius: 20px;
  width: 40%;
  height: 15%;
  border: none;
  margin-top:4%;
  color: rgba(255, 255, 255, 1);

  `
  ;

const IconShaping= styled.div`

  margin:15px 5px 0px 5px;
  `;


const BoxTopic= styled.text
`
margin-top:25%;
font-size:.7em;
font-family: Zilla Slab;
font-style: normal;
font-weight: normal;
text-align: center;
text-shadow:text-shadow: 2px 2px 4px #000000;
`;

const BoxPara= styled.p
`
margin-top:3%;
font-size:.6em;
font-family: Zilla Slab;
font-style: italic;
opacity:.7;
`;


const Number= styled.div
`
margin-top:3%;
font-size:2em;
font-family: Montserrat;
font-style: normal;
`;


const Dotdot= styled.div
`
`;

export const PinkRectangleOne = () => {
    return (
        <PinkBox> 
          <IconShaping><ForumIcon/> </IconShaping>
          <Number>2564</Number> 
          <BoxTopic>Messages</BoxTopic>
          <BoxPara>Posted By our Users</BoxPara>

        </PinkBox>
    )
}

export const WhiteRectangle = () => {
    return (
      <WhiteBox>
          <LocationOnIcon/>
          <Addrs>138 Mount Pleasant Bracknell, RG12 9EA Berkshire, UK </Addrs>
          <Pinkbutton>Get Direction</Pinkbutton>

      </WhiteBox>
    )
}

export const PinkRectangleTwo = () => {
    return (
        <PinkBox> 
          
          <IconShaping> <TiWeatherPartlySunny/>  </IconShaping>
          <Number>18ºC</Number> 
          <BoxTopic>Craiova, RO</BoxTopic>
          <BoxPara>Sunny and raining</BoxPara>

        </PinkBox>
    )
}




