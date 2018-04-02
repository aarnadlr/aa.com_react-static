import React from 'react';
import './css/entry.css';
import TopNav from './TopNav/TopNav'
import WelcomeBio from './WelcomeBio/WelcomeBio'
import CoreTools from './CoreTools/CoreTools'
import Footer from './Footer/Footer'
import Ww4 from './Ww4';

const App = ()=>{
    return (
      <div className="">

          <TopNav />

          <WelcomeBio/>

          <Ww4 />
          
          <CoreTools />

          <Footer />

      </div>
    );
  }

export default App;
