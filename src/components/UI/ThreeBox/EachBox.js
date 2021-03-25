import React from 'react'
import styled from 'styled-components'
import ForumIcon from '@material-ui/icons/Forum';
import {TiWeatherPartlySunny} from 'react-icons/ti';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const PinkBox=styled.div
`
width: 80%;
height: 100%;
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
width: 80%;
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


export const PinkRectangleOne = () => {
    return (
        <PinkBox> 
          <ForumIcon/>  
          <p>Messages</p>
          <p>Posted By our Users</p>

        </PinkBox>
    )
}

export const WhiteRectangle = () => {
    return (
      <WhiteBox>
          <LocationOnIcon/>
          <p>Messages</p>
          <p>Posted By our Users</p>


      </WhiteBox>
    )
}

export const PinkRectangleTwo = () => {
    return (
        <PinkBox> 
          <TiWeatherPartlySunny/>  
          <p>Messages</p>
          <p>Posted By our Users</p>

        </PinkBox>
    )
}




