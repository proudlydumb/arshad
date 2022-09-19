/* eslint-disable no-unused-vars */

import React from 'react';
import './App.css';
import Nav from "./componets/nav"
import Body from "./componets/mainBody"
import About from "./componets/about"
import Contact from "./componets/contact"
import {
  ScrollContainer,
  ScrollPage, batch, Fade, FadeIn,
  FadeOut, Move, MoveIn,
  MoveOut, Sticky, StickyIn,
  StickyOut, Zoom, ZoomIn, ZoomOut, Animator
} from "react-scroll-motion";
function App() {
  return (
    <>

      <Nav />
      <Body />
      <About />
      <Contact />
    </>
  );
}

export default App;
