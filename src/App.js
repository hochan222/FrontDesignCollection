import React from 'react';
import {ThemeProvider} from "styled-components"
import './App.css';

import Footer from "./components/Footer/Footer";
// import Letter from './components/lib/letter';
import SideBox from './components/lib/SideBox';
import Theme from './components/Styles/Theme';
import Timer from './components/lib/Timer';
import Body from './components/Body'

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <SideBox/>
        <Timer/>
        {/* <Letter/> */}
        <Body/>
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
