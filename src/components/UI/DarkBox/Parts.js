import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const PartsStyle=styled.div
`
font-family: Zilla Slab;
font-style: normal;
font-weight: normal;
text-align: center;
color: #FFFFFF;
justify-content:center;
width:100%;
height:5em;
padding:1em;




`;

const Partsh=styled.h1`
font-family: Zilla Slab;
font-style: normal;
font-weight: normal;
`;

const PartP=styled.p`
font-family: Montserrat;
font-style: normal;
font-weight: normal;
text-align: center;
font-size:.7em;
line-height: 1em;
color: #CBCFD4;
`;


const Parts = () => {
    return (
        <PartsStyle>
            <AccountCircleIcon/>
            <Partsh>Magna Aliqua</Partsh>
            <PartP>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</PartP>
        </PartsStyle>
            
        
    )
}

export default Parts
