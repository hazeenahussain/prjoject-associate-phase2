import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <div>
           {/* /.content-wrapper */}
<footer className="main-footer">
  {/* imgggg */}
<div>
<img className="center1"src="dist/img/logo ict.png" />
</div>
{/* .......... */}
  <strong className='copywright'>Copyright © ICTAK Team Five <a href="https://adminlte.io">ICTAK Hall Booking Portal</a>.</strong>
  All rights reserved.
  <div className="float-right d-none d-sm-inline-block">
    <b>ICT Academy</b> of Kerala
  </div>
</footer>

        </div>
    );
}

export default Footer;