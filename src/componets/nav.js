/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
import styled from 'styled-components'

function nav() {
  return (
    <NavBar>
        <Logo>          
          <img src="logo.png" alt="#" />
        </Logo>
        <Navitems>
          <a href="#About">ABOUT</a>
          <a href="https://github.com/proudlydumb">
              <i class="fa-brands fa-github"></i>
            </a>
        </Navitems>
    </NavBar>
  )
}

export default nav

//Styled Componets

const NavBar = styled.nav`
font-family: 'Roboto Serif', serif;
display:flex;
`
const Logo = styled.div`
img{
  margin-left:25%;
  margin-top:10%;
  width: 40%;
   @media(min-width: 320px) and (max-width: 768px){
  width:20%;
   }
}
`
const Navitems = styled.div`
display:flex;
justify-content:flex-end;
width:70%;
padding: 2.7% 3% 0 0;
a{
  font-weight:bolder;
  color:white;
  font-size:0.8rem;
  padding:5px;
  text-decoration:none;
  &:hover{
    text-decoration: underline;
    transition: 0.10s;
}
 @media(min-width: 320px) and (max-width: 425px){
  font-size: 0.5rem;
   }
    @media(min-width: 320px) and (max-width: 768px){
      margin-top:2%;
    }
}

`;