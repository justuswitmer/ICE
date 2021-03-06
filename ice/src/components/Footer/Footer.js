import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import location from '../../a_assets/images/location.png';
import truck from '../../a_assets/images/truck.png';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__b780'>
        <div className='footer__b__b759'>
          <h2 className='footer__b__b__b700'>ICE</h2>
        </div>
        <div className='footer__b__b892'>
          <p className='footer__b__b__b397'>Iserman</p>
          <p className='footer__b__b__b397'>Contracting & Excavating</p>
        </div>
      </div>
      <div className='footer__b538'>
        <div className='footer__b__b141'>
          <img src={location} alt="location of ICE" />
        </div>
        <div className='footer__b__b340'>
          <p>289 Windsor Lane<br /> New Brighton MN<br /> 55112</p>
          <p className='footer__b__b__b256'>(612) 743-8351</p>
        </div>
        <div className='footer__b__b160'>
          <button>Sign up</button>
        </div>
      </div>
      <div className='footer__b803'>
        <div className='footer__b__b187'>
          <img src={truck} alt='truck' />
        </div>
      </div>
      <div className='footer__b798'>
        <p className='footer__b__b874'>Copyright © 2021. All rights reserved.</p>
        <p className='footer__b__b874'>Designed by AB.UXD. Developed by Justus Witmer.</p>
      </div>
    </div>
  );
}

export default connect()(withRouter(Footer));
