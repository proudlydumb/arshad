import React from 'react'
import styled from 'styled-components'

function form() {
  return (
      <Form>
        <form>
          <input type="text" placeholder="Name"></input>
          <input type="email" placeholder="Email"></input>
          <textarea rows="15" cols="50" placeholder="Message"></textarea>
          <button>Send <i class="fa-solid fa-paper-plane"></i></button>
        </form>
      </Form>
  )
}

export default form

//Styled Components

const Form = styled.div`
input{
  outline: none;
  text-align:center;
  padding: 2%;
  border-radius: 10px;
  margin-top:2%;
  width: 400px;
   @media(min-width: 320px) and (max-width: 768px){
  width: 85%;
  }
  &::placeholder{
    font-weight:bolder;
  }
  &:focus{
    border: 2px solid grey;
    text-align:left;
     box-shadow:inset 0 0 5px 5px #888;
  }
}

textarea{
  outline: none;
  text-align:center;
  border-radius: 10px;
  margin-top:2%;
  width: 418px;
   @media(min-width: 320px) and (max-width: 768px){
  width:88%;
   }
   &::placeholder{
    font-weight:bolder;
  }
  &:focus{
    text-align:left;
    border: 2px solid grey;
    box-shadow:inset 0 0 5px 5px #888;
  }
}

margin: 2.8% 0 0 10%;
background-color: none;
border-radius: 50px;
height: 470px;
width:43%;
 @media(min-width: 320px) and (max-width: 768px){
  width: 90%;
  height:400px;
  margin: 1.8% 0 0 3%;

  }
form{
  margin-top:10%;
  justify-content:center;
  align-items:center;
  display:flex;
  flex-direction:column;
}
button{
  curser:pointer;
  color:white;
  border-radius: 10px;
  margin-top:2%;
  padding:2%;
  background-color: #7E7373;
  border: 1px transparent;
  width: 350px;
 @media(min-width: 320px) and (max-width: 768px){
  width:85%;
  }
  &:hover{
  background: #f5f5f5;
  background-image: -webkit-linear-gradient(top, #f5f5f5, #7e7373);
  background-image: -moz-linear-gradient(top, #f5f5f5, #7e7373);
  background-image: -ms-linear-gradient(top, #f5f5f5, #7e7373);
  background-image: -o-linear-gradient(top, #f5f5f5, #7e7373);
  background-image: linear-gradient(to bottom, #f5f5f5, #7e7373);
  text-decoration: none;    color:black;
  background: #f5f5f5;
  background-image: -webkit-linear-gradient(top, #f5f5f5, #7e7373);
  background-image: -moz-linear-gradient(top, #f5f5f5, #7e7373);
  background-image: -ms-linear-gradient(top, #f5f5f5, #7e7373);
  background-image: -o-linear-gradient(top, #f5f5f5, #7e7373);
  background-image: linear-gradient(to bottom, #f5f5f5, #7e7373);
  text-decoration: none;
  }
}

`