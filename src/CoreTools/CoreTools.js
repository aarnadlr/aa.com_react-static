import React from "react";
import "./CoreTools.css";

const CoreTools = () => (
  <div id="coretools" className="flex container">
    <div className="justify-center coreskills-box lightest-blue ">


      <div className="coreskills-box__core-col blue0">
        <h1 className="">Core Tools</h1>
        <p>Software and libraries I often work with in projects.</p>
        <ul>
          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-pencil rainbow1" />
            </span>
            Sketch</li>



          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-html5 rainbow2" />
            </span>
            HTML5</li>


          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-css3 rainbow3" />
            </span>
            CSS3</li>


          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-th-large rainbow4" />
            </span>
            CSS Grid</li>


          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-bars rainbow5" />
            </span>
            CSS Flexbox</li>


          <li className="skill">
            <span className="fa-stack">
              {/* <i className="fa fa-file-photo-o rainbow6" /> */}
              <i className="fab fa-sass rainbow6"></i>
            </span>{""}Sass/scss</li>

          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-youtube-play rainbow7" />
            </span>
            After Effects</li>

          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-camera rainbow8" />
            </span>
            Photoshop</li>


          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-picture-o rainbow8" />
            </span>
            Illustrator</li>



          <li className="skill">
            <span className="fa-stack">
              <i className="fab fa-js-square rainbow9"></i>
            </span>
            Javascript ES6
          </li>

            
          <li className="skill">
            <span className="fa-stack">
              {/* <i className="fab fa-react rainbow9" /> */}
              <i className="fab fa-react rainbow9"></i>
            </span>
            React
          </li>
          

          <li className="skill">
            <span className="fa-stack">
            <i className="fa fa-code rainbow9" />
            </span>
            NextJS
          </li>

          <li className="skill">
            <span className="fa-stack">
            {/* <i className="fa fa-code rainbow9" /> */}
            🔥 
            </span>
            Firebase
          </li>



          <li className="skill">
            <span role='img' aria-label="skill" className="f4">💅 </span> &nbsp;Styled-Components
          </li>


          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-th-large rainbow9" />
            </span>{" "}
            Bootstrap 4</li>

       

          {/* <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-language rainbow13" />
            </span>{" "}
            Babel</li> */}

          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-bolt rainbow10" />
            </span>{" "}
            Tachyons</li>


          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-magic rainbow11" />
            </span>{" "}
            jQuery</li>
            
          {/* <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-laptop rainbow16" />
            </span>{" "}
            IBM Color Library</li> */}


          {/* <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-adjust rainbow17" />
            </span>{" "}
            Palx</li> */}

            
          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-file-video-o rainbow12" />
            </span>{" "}
            Greensock/GSAP</li>


          {/* <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-first-order rainbow17" />
            </span>{" "}
            SemanticUI</li> */}


          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-window-maximize rainbow12" />
            </span>{" "}
            SVG</li>
            
            <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-git rainbow13" />
            </span>{" "}
            Git/GitHub</li>


          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-cube rainbow13" />
              
            </span>{" "}
            Blender3D</li>


          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-facebook-square rainbow14" />
            </span>{" "}
            Facebook AR Studio</li>

{/*             
          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-columns rainbow14" />
            </span>{" "}
            InDesign</li> */}

        </ul>
      </div>





      <div className="coreskills-box__core-col blue0">
        <h1 className="">Secondary Tools</h1>
        <p>Software I work with, and I am actively learning.</p>
        <ul>
          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-terminal rainbow11" />
            </span>{" "}
            NodeJS
          </li>
          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-random rainbow12" />
            </span>{" "}
            Express
          </li>
          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-file-code-o rainbow13" />
            </span>{" "}
            MongoDB
          </li>
          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-briefcase rainbow14" />
            </span>{" "}
            PostCSS
          </li>
          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-code-fork rainbow14" />
            </span>{" "}
            Gulp
          </li>

          {/* <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-space-shuttle rainbow16" />
            </span>{" "}
            Meteor
          </li> */}

          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-language rainbow15" />
            </span>{" "}
            Babel
          </li>


          <li className="skill">
            <span className="fa-stack">
              <i className="fa fa-cube rainbow17" />
            </span>{" "}
            Webpack
          </li>
        </ul>
      </div>



    </div>
  </div>
);

export default CoreTools;
