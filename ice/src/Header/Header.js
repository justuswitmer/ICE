import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './header.css';

function Header(props) {
  return (
    <div className='header'>
      <div className='header__b567' onClick={() => props.history.push('/')}>
        <div className='header__b__b269'><h2>ICE</h2></div>
        <div className='header__b__b431'><p>Iserman</p> <p>Contracting & Excavating</p></div>
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
