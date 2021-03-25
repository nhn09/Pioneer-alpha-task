import React from 'react'
import styled from 'styled-components'
import { FooterComponentColumnFour, FooterComponentColumnOne, FooterComponentColumnThree, FooterComponentColumnZero, FooterComponentColumnTwo } from './FooterComponents';

const FooterBody= styled.div
`
width: 100%;
height: 60vh;
background-color: #3C444C;
padding:2em;
display:grid;
grid-gap:2%;
background-color: #red;
grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
justify-content:center;

@media all and (max-width: 800px) {
    grid-template-columns: repeat(2,1fr);
    height: 120vh;
  }

`
;


const FooterMain = () => {
    return (
        <FooterBody>

         <FooterComponentColumnZero/>
         <FooterComponentColumnOne/>
         <FooterComponentColumnTwo/>
         <FooterComponentColumnThree/>
         <FooterComponentColumnFour/>
        </FooterBody>
    )
}

export default FooterMain
