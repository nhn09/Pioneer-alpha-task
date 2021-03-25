import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhonelinkIcon from '@material-ui/icons/Phonelink';
import StoreMallDirectorySharpIcon from '@material-ui/icons/StoreMallDirectorySharp';

// We can use inline-style
const ColorIcon= {
    background: 'linear-gradient(90deg, #F27A54 0%, #A154F2 186.42%)',
   
  };

export default function InlineStyle() {
  return <AccountCircleIcon style={ColorIcon}>inline-style</AccountCircleIcon>;
}