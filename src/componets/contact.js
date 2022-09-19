/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import styled from "styled-components";
function contact() {
  return (
    <Contact id="Contact">
        <Social>
          <h4>
            My inbox is always open, whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </h4>
          <Icons>
            <a href="https://www.instagram.com/__arshadkhan___/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com/__ARSHADKHAN___">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/thearshadkhan/">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </Icons>
        </Social>
    </Contact>
  );
}
export default contact;

const Contact = styled.div`
background-color:white;
  margin: 20% 0% 0 0%;
`;

const Social = styled.div` 
text-align:center;
width:100%;
display:flex;

   @media(min-width: 320px) and (max-width: 768px){
    margin-top:0;
    width: 90%;
  }
  h4 {
    @media(min-width: 320px) and (max-width: 400px){
  font-size: 0.9rem;
}
      font-family: "Roboto Mono", monospace;
    margin-left:1%;
    color: black;
    font-size:1rem;

  }
`;
const Icons = styled.div`

 @media(min-width: 320px) and (max-width: 768px){
      margin-top:5%;
      margin-left: 2%;
      display:block;
    }
}
  display: flex;
justify-content:lex-end;
  font-size: 1.5rem;
  padding:1.4%;
  a {
    padding-right: 13px;
    color: black;
    &:hover {
      curser: pointer;
      color: blue;
       transition:0.75s;
    }
  }
`;

  