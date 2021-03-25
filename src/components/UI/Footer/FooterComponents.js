import React from 'react'
import styled from 'styled-components'


const FooterComponentColumn_Zero = styled.div
`
display:flex;
flex-direction:column;
font-family: Montserrat;
font-style: normal;
padding:5px;
color: #FFFFFF;
`;

const NewsName= styled.text
`
font-family: Viga;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 56px;
display: flex;
color: #FFFFFF;
margin-bottom:10%;
`
;

const OtherTitle= styled.text
`
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 12px;
/* identical to box height */

display: flex;
align-items: center;
text-transform: uppercase;

color: #FFFFFF;
`;


const FooterComponentColumn_One = styled.div
`
display:flex;
flex-direction:column;
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size:10px;
line-height: 22px;
color: #CBCFD4;
padding:10px;
text-transform: uppercase;

`;

const FooterP= styled.p
`
margin-top:10px;
margin-bottom:10px;

`;




export const FooterComponentColumnZero = () => {
    return (
        <FooterComponentColumn_Zero>
             <NewsName>NEWS</NewsName>
             <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum, quasi eaque maxime ut perspiciatis 
             </p>

        </FooterComponentColumn_Zero>
      
        
    )
}

export const FooterComponentColumnOne = () => {
    return (
        
       <FooterComponentColumn_One>
           <OtherTitle>
           Company
           </OtherTitle>
           <FooterP>About Us</FooterP>
           <FooterP>Our Services</FooterP>
           <FooterP>The Team</FooterP>
           <FooterP>Investors</FooterP>
           

       </FooterComponentColumn_One>
    )
}

export const FooterComponentColumnTwo = () => {
    return (
        <FooterComponentColumn_One>
            <OtherTitle>
            Resources
           </OtherTitle>
           <FooterP>About Us</FooterP>
           <FooterP>Our Services</FooterP>
           <FooterP>The Team</FooterP>
           <FooterP>Investors</FooterP>
           
        </FooterComponentColumn_One>
    )
}


export const FooterComponentColumnThree = () => {
    return (
        <FooterComponentColumn_One>
            <OtherTitle>
           Company
           </OtherTitle>
           <FooterP>About Us</FooterP>
           <FooterP>Our Services</FooterP>
           <FooterP>The Team</FooterP>
           <FooterP>Investors</FooterP>
           
        </FooterComponentColumn_One>
    )
}


export const FooterComponentColumnFour = () => {
    return (
        <FooterComponentColumn_One>
            <OtherTitle>
           Company
           </OtherTitle>
           <FooterP>About Us</FooterP>
           <FooterP>Our Services</FooterP>
           <FooterP>The Team</FooterP>
           <FooterP>Investors</FooterP>
           
        </FooterComponentColumn_One>
    )
}



