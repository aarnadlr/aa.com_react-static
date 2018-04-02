import React from 'react';
import './Footer.css';
import '../css/entry.css';

const Footer = () => (
<footer className="pb6 lightest-blue">

    {/* <!-- THANK YOU --> */}
    <div id="contact" className="container container--martop70">
      <p className='f3'>
        Thank You
      </p>
    </div>

    {/* <!-- CONTACT / EMAIL --> */}
    <div className="container container--marbot80 container--pad10">
      <a href="mailto:aaron.adler@gmail.com">
        <p className="grow lightest-blue f5">
          <i className="fa fa-envelope-o blue5 mr2" aria-hidden="true"></i> aaron.adler(at)gmail(.com)
        </p>
      </a>
    </div>

  </footer>

);


export default Footer;
