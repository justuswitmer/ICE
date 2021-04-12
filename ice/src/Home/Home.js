import './Home.css';
import rightArrow from '../assets/images/rightArrow.png';

function Home() {

  let title = "Your heavy lifting ends here!";
  let description = "Are you looking for industry leading contractors that are reliable, quality, and fair priced? Well I guess we couldn't hide forever. See what ICE Contractors can do for your projects with a 2 minute quote!";
  let quoteDescription = "Get a quote in under 2 minutes for your excavating, contracting and snow removal needs. Enter your zip code.";

  return (
    <div className='home'>
      <div className='home__b491'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className='home__b__b516'>
          <p className='home__b__b--e900'>{quoteDescription}</p>
          <div className='home__b__b__b912'>
            <input className='home__b__b__b--e582' value='Enter your zipcode' />
            <button className='home__b__b__b--e368'>Get my Quote <img className='home__b__b__b--e--e440' src={rightArrow} alt='' /></button>
          </div>
        </div>
      </div>
      <div className='home__b383'>
        Snow removal & Excavating
      </div>
      <div className='home__b226'>
        Expectations
      </div>
      <div className='home_b808'>
        Reviews
      </div>
    </div>
  );
}

export default Home;
