import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhonelinkIcon from '@material-ui/icons/Phonelink';
import StoreMallDirectorySharpIcon from '@material-ui/icons/StoreMallDirectorySharp';

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


export const PartOne = () => {
    return (
        <PartsStyle>
            <AccountCircleIcon/>
            <Partsh>Magna Aliqua</Partsh>
            <PartP>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</PartP>
        </PartsStyle>
            
        
    )
}

export const PartTwo = () => {
    return (
        <PartsStyle>
            <PhonelinkIcon/>
            <Partsh>Magna Aliqua</Partsh>
            <PartP>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</PartP>
        </PartsStyle>
            
        
    )
}


export const PartThree = () => {
    return (
        <PartsStyle>
            <AccountCircleIcon/>
            <Partsh>Magna Aliqua</Partsh>
            <PartP>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</PartP>
        </PartsStyle>
            
        
    )
}



