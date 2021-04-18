import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import rightArrow from '../a_assets/images/rightArrow.png';
import Excavating from '../a_assets/images/Excavating.png';
import Snowblowing from '../a_assets/images/Snowblower.png';

function Home() {

  const dispatch = useDispatch();
  const token = process.env.ZUPERPRO;

  let title = "Your heavy lifting ends here!";
  let description = "Are you looking for industry leading contractors that are reliable, quality, and fair priced? Well I guess we couldn't hide forever. See what ICE Contractors can do for your projects with a 2 minute quote!";
  let quoteDescription = "Get a quote in under 2 minutes for your excavating, contracting and snow removal needs. Enter your zip code.";

  let customer = {
    "customer": {
      "customer_first_name": "John",
      "customer_last_name": "Doe",
      "customer_email": "johndoe@zuper.com",
      "customer_category": "Residential",
    },
  };

  const [active, setActive] = useState('notActive');

  const createCustomer = () => {
    console.log('in createCustomer');
    axios({
      method: 'POST',
      url: 'https://zuperpro.com/api/customers',
      data: customer,
      headers: { "Authorization": `Bearer ${token}` }
    });
  };

  const getCustomer = () => {
    console.log('in getCustomer');

    axios({
      method: 'GET',
      url: '/customer'
    }).then(res => {
      console.log('sending response', res.data);
      dispatch({
        type: 'SET_CUSTOMER',
        payload: res.data
      });
    }).catch(err => {
      console.error(err);
    });
  }


  return (
    <div className='home'>
      <div className='home__b491'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className='home__b__b516'>
          <p className='home__b__b--i900'>{quoteDescription}</p>
          <div className='home__b__b__b912'>
            <input className='home__b__b__b--i582' placeholder='Enter your zipcode' />
            <button className='home__b__b__b--i368'>Get my Quote <img className='home__b__b__b--i--i440' src={rightArrow} alt='' /></button>
          </div>
        </div>
      </div>
      <div className='home__b383'>
        <div
          className={active === 'snowActive' || active === 'notActive' ? 'home__b__b746' : 'home__b__b746 path-active'}
          onMouseEnter={() => setActive('snowActive')}
          onMouseLeave={() => setActive('notActive')}
        >
          <img className='home__b__b--i478' src={Snowblowing} alt='' />
          <p className='home__b__b--i416'>Snow Removal</p>
        </div>
        <div
          className={active === 'excavatingActive' || active === 'notActive' ? 'home__b__b198' : 'home__b__b198 path-active'}
          onMouseEnter={() => setActive('excavatingActive')}
          onMouseLeave={() => setActive('notActive')}
        >
          <img className='home__b__b--i618' src={Excavating} alt='' />
          <p className='home__b__b--i785'>Excavation</p>
        </div>
      </div>
      <div className='home__b226'>
        Expectations
      </div>
      <div className='home_b808'>
        Reviews
      </div>
    </div >
  );
}

export default Home;
