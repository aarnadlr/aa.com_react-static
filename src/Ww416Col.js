import React from "react";
// import Tilt from "react-tilt";
import "./css/entry.css";
// import projects from "./projects.js";
// import styled from "styled-components";
// const uuidv1 = require("uuid/v1");


// --------- END STYLED-COMPONENTS ---------

const Ww416Col = () => {
  return (
    <div id="JSXWrapper" className='avenir tc f4'>
      {/* // Grid template: */}
      <div className="col-wrapper flex pa3">
          <div className='col-16 w-1-16th bg-blue'>a</div>
          <div className='col-16 w-1-16th bg-blue'>a</div>
          <div className='col-16 w-1-16th bg-blue'>a</div>
          <div className='col-16 w-1-16th bg-blue'>a</div>
          <div className='col-16 w-1-16th bg-blue'>a</div>
          <div className='col-16 w-1-16th bg-blue'>a</div>
          <div className='col-16 w-1-16th bg-blue'>a</div>
          <div className='col-16 w-1-16th bg-blue'>a</div>
          <div className='col-16 w-1-16th bg-blue'>a</div>
          <div className='col-16 w-1-16th bg-blue'>a</div>
          <div className='col-16 w-1-16th bg-blue'>a</div>
          <div className='col-16 w-1-16th bg-blue'>a</div>
          <div className='col-16 w-1-16th bg-blue'>a</div>
          <div className='col-16 w-1-16th bg-blue'>a</div>
          <div className='col-16 w-1-16th bg-blue'>a</div>
          <div className='col-16 w-1-16th bg-blue'>a</div>
      </div>
      {/* // Grid CONTENT: */}
      <div className="col-wrapper flex">
          <div className='col-16 w-1-16th bg-blue'>a</div>
          <div className='col-16 w-2-16ths bg-blue'>a</div>
          <div className='col-16 w-3-16ths bg-blue'>a</div>
          <div className='col-16 w-4-16ths bg-blue'>a</div>
          <div className='col-16 w-6-16ths bg-blue'>a</div>
          {/* <div className='col-16 w-1-16ths bg-blue'>a</div>
          <div className='col-16 w-1-16ths bg-blue'>a</div>
          <div className='col-16 w-1-16ths bg-blue'>a</div>
          <div className='col-16 w-1-16ths bg-blue'>a</div>
          <div className='col-16 w-1-16ths bg-blue'>a</div>
          <div className='col-16 w-1-16ths bg-blue'>a</div>
          <div className='col-16 w-1-16ths bg-blue'>a</div>
          <div className='col-16 w-1-16ths bg-blue'>a</div>
          <div className='col-16 w-1-16ths bg-blue'>a</div>
          <div className='col-16 w-1-16ths bg-blue'>a</div>
          <div className='col-16 w-1-16ths bg-blue'>a</div> */}
      </div>

      {/* // FOUR-COL GRID from 16-col, with side gutters: */}
      <p className="white avenir mt6">FOUR COL GRID:</p>

      <div className="col-wrapper flex">
          <div className='col-16 w-2-16ths ba b--blue'>a</div>
          <div className='col-16 w-3-16ths bg-pink'>one</div>
          <div className='col-16 w-3-16ths bg-red'>two</div>
          <div className='col-16 w-3-16ths bg-orange'>three</div>
          <div className='col-16 w-3-16ths bg-gold'>four</div>
          <div className='col-16 w-2-16ths ba b--blue'>a</div>
      </div>


      {/* // THREE-COL GRID from 16-col, with side gutters: */}
      <p className="white avenir">THREE COL GRID:</p>

      <div className="col-wrapper flex">
          <div className='col-16 w-2-16ths ba b--blue'>one</div>
          <div className='col-16 w-4-16ths bg-pink'>one</div>
          <div className='col-16 w-4-16ths bg-red'>two</div>
          <div className='col-16 w-4-16ths bg-orange'>three</div>
          <div className='col-16 w-2-16ths ba b--blue'>a</div>
      </div>
    </div>
  );
};

export default Ww416Col;
