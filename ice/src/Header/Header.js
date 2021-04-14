import { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Header(props) {

  const [header, setHeader] = useState(false);

  const changeHeader = () => {
    window.scrollY >= 70 ? setHeader(true) : setHeader(false);
  }

  window.addEventListener('scroll', changeHeader);

  return (
    <div className={header ? 'header active' : 'header'}>
      <div className='header__b567' onClick={() => props.history.push('/')}>
        <div className='header__b__b269'>
          <h2 className='header__b__b--i681'>ICE</h2>
        </div>
        <div className='header__b__b431'>
          <p className='header__b__b--i633'>Iserman</p>
          <p className='header__b__b--i633'>Contracting & Excavating</p>
        </div>
      </div>
      <div className='header__b284'>
        <p onClick={() => props.history.push('/services')}>Services</p>
        <p onClick={() => props.history.push('/quote')}>Get a Quote</p>
        <p onClick={() => props.history.push('/login')}>Log in</p>
      </div>
    </div>
  );
}

export default connect()(withRouter(Header));
