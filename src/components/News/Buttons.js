import React from 'react'
import styled from 'styled-components'

const Space= styled.div`
  width: 10px;
  height: 10px;
  `
  ;

const WhiteButton= styled.button`

background: transparent;
border-radius: 20px;
width: 190px;
height: 40px;
border: none;
color: rgba(255, 255, 255, 1);
border: 1px solid #FFFFFF;
`
 ;

const Pinkbutton= styled.button`
  background: linear-gradient(90deg, #F27A54 0%, #A154F2 100%);
  border-radius: 20px;
  width: 190px;
  height: 40px;
  border: none;
  color: rgba(255, 255, 255, 1);
  `
  ;


const Buttons = ({nameOne,nameTwo}) => {
    return (
        <>
        <Pinkbutton>{nameOne}</Pinkbutton>
        <Space></Space>
        <WhiteButton>{nameTwo}</WhiteButton>
        </>
    );
};

export default Buttons;
