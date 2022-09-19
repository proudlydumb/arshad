import React from "react";
import styled from "styled-components";

function mainBody() {
  return (
    <MainBody>
      <SmallName>Hi my name is,</SmallName>
      <BigName>ARSHAD KHAN.</BigName>
      <Heading>I build things for web!</Heading>
      <TagLine>
        My main attentiveness is toward Web Devlopment, wants to make tools that
        makes life easy and enjoyable for everyone!
      </TagLine>
    </MainBody>
  );
}

export default mainBody;

//Styled components

const MainBody = styled.div`
  font-family: "Ubuntu";
  margin: 10% 3% 0 10%;
`;

const SmallName = styled.h4`
  font-family: "Roboto Mono", monospace;
  color: #fff;
  margin: 0;
  @media(min-width: 320px) and (max-width: 425px){
    font-size:10px;
  }
`;

const BigName = styled.h1`
  color: #fff;
  font-size: 5rem;
  margin: 0;
  @media(min-width: 320px) and (max-width: 425px){
    font-size: 4.4rem;
  }
`;

const Heading = styled.h1`
  color: #23add9;
  margin: 0;
  font-size: 5rem;
  @media(min-width: 320px) and (max-width: 425px){
    font-size: 4.4rem;
  }

`;
const TagLine = styled.h4`
  font-family: "Roboto Mono", monospace;
  color: #bfd923;
  width: 50%;
  margin-top: 4%;
  font-size: 0.9rem;
   @media(max-width: 320px){
    width: 90%;
  }
`;
