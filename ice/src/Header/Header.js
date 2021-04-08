import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './header.css';

function Header(props) {
  return (
    <div className='header'>
      <div className='header__a' onClick={() => props.history.push('/')}>
        <div className='header__a__a'><h2>ICE</h2></div>
        <div className='header__a__b'><p>Iserman</p> <p>Contracting & Excavating</p></div>
      </div>
      <div className='header__b'>
        <p onClick={() => props.history.push('/services')}>Services</p>
        <p onClick={() => props.history.push('/quote')}>Get a Quote</p>
        <p onClick={() => props.history.push('/login')}>Log in</p>
      </div>
    </div>
  );
}

export default connect()(withRouter(Header));
