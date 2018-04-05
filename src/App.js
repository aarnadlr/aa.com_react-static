import React from 'react';
import './css/entry.css';
import TopNav from './TopNav/TopNav'
import WelcomeBio from './WelcomeBio/WelcomeBio'
import CoreTools from './CoreTools/CoreTools'
import Footer from './Footer/Footer'
import Cards from './Cards/Cards';

const App = ()=>{
    return (
      <div className="">

          <TopNav />

          <WelcomeBio/>

          <Cards />
          
          <CoreTools />

          <Footer />

      </div>
    );
  }

export default App;
