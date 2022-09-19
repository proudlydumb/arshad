import React from "react";
import styled from "styled-components";
function about() {
  return (
    <About id="About">
      <HeadingSection>
        <Heading>ABOUT ME:- </Heading>
      </HeadingSection>

      <TextSection>
        <Text>
          Hi,My name is Arshad Khan,love to build things live on internet. My
          interest in web devlopment started back from 2020 when I entered in my
          bachler’s degree.
          <br />
          <br />
          Fast-forward to today,I am currently focus on <span>Web 3.0</span>
          <br />
          <br />
          My end goal is to be a
          <br />
          <span>FRONT-END BLOCKCHAIN DEVLOPER!</span>
          <br />
          <br />
            Here are the technologies I’m working with <br />
            <Tech>
            <div>
            {"\u2022"}Javascript(es6+)<br />
            {"\u2022"}Java<br />
             {"\u2022"}React
            </div>
            <div>{"\u2022"}Blockchain
            <br />
            {"\u2022"}Node.js</div>
            </Tech>
        </Text>
        <Photo>

          <img src="arshad.jpg" alt="arshad"/>
        </Photo>
      </TextSection>
    </About>
  );
}

export default about;

//Styled Components

const About = styled.div`
  margin-top: 25%;
  margin: 17% 3% 0 10%;
  line-height: 25px;
 
`;
const HeadingSection = styled.div`
`;
const Heading = styled.h1`
  font-family: "Roboto Mono", monospace;
  font-weight: bolder;
  font-size: 2.5rem;
  color: #fff;
`;

const TextSection = styled.div`
  display: flex;
  @media(min-width: 320px) and (max-width: 768px){
    flex-direction:column;
  }
`;

const Text = styled.p`
font-weight:bolder;
  font-family:'Montserrat';
  font-size:1.1rem;
 @media(min-width: 320px) and (max-width: 768px){
    font-size: 1rem;
    width: 90%;
  }
  width: 50%;
   color: #23add9;
   span{
    color:white;
    &hover{
      text-decoration:underline;
    }
   }

`;
const Photo = styled.div`
margin-left:2%;
img{
  @media(min-width: 320px) and (max-width: 768px){
    width: 70%;
  }
  width:50%;
  transition:filter 0.75s;
  border-radius:20px;
  hieght:25%;
  &:hover{
filter:drop-shadow(8px 8px 10px white);
  }
}
`;

const Tech = styled.div`
display:flex;
div{
  margin:1%;
}
`