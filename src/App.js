import './App.css';
import {
  Logo, Calendar, CoinPot, Shapes, Stars, BtnIcon, CoinRight, CoinLeft, Star1, Star2, Star3, 
  FooterStars } from './assets'

function App() {
  return (
    <section className="hero">
      <div className="container">
        <header className="header">
          <img src={Logo} alt="" className="" />
          <div className="period">
            <img src={Calendar} alt="" className="" />
            <div className="days">
              <h3 className="period__day">Day 1</h3>
              <span className="period__days">of 5</span>
            </div>
          </div>
        </header>

        <h1 className="hero__main__text">
          <span>Unlock to</span> <br />
          Power your dreams! 
        </h1>

        <h4 className="prize">
          Stand a chance to win <br/>
          <span>N3,000,000</span> everyday for the next 5 days
        </h4>

        <div className="how__to__play">
          <div className="">
            <h3 className="title">🚀 How To Play</h3>
            <ol>
              <li className='step'>Guess the right combination of numbers</li>
              <li className='step'>Win <span>N3,000,000</span> instantly</li>
            </ol>
            <p className="step">Sounds unbelievable? Well, guess right & see for yourself!</p>
          </div>
          <div className="dark__section">
            <span>💡</span>
            <p className="narrations">
            Think well before you guess. You have only <span>2</span> attempts per day and even after you wi, you can come back the next day to try for another jackpot!
            </p>
          </div>
        </div>

        <span className="btn__main">
          <span>Play The Game</span>
          <img src={BtnIcon} alt=""/>
        </span>

        <img src={Stars} alt="" className="stars" />

      </div>
        <img src={CoinLeft} alt="" className="coin__left" />
        <img src={CoinRight} alt="" className="coin__right" />
      <div className="shapes">
        <img src={Shapes} alt="" />
      </div>
      {/* Animated Stars */}
        <img src={Star1} alt="" className="animation-star star1" />
        <img src={Star2} alt="" className="animation-star star2" />
        <img src={Star3} alt="" className="animation-star star3" />
        <img src={Star2} alt="" className="animation-star star4" />
        <img src={FooterStars} alt="" className="footer-stars" />
      {/* End of Animated Stars */}
        <img src={CoinPot} alt="" className="coin__pot" />
    </section>
  );
}

export default App;
