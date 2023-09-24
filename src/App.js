import React from 'react';
import {Article, Brand, CTA, Feature, Navbar} from "./Components"
import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from "./Components/Containers"
import "./App.css"




function App() {

  return(
    <div className='App'>
     <div className='gradient__bg'>
        <Navbar />
        <Header />
     </div>
     <Brand />
     <WhatGPT3 />
     <Features />
     <Possibility />
     <CTA />
     <Blog />
     <Footer />
    </div>
  )
}
 


export default App;
