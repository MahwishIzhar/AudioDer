import React from 'react';
import About1 from '../Assets/img/left-about-image.jpg';
import About2 from '../Assets/img/right-about-image.jpg';

const About =()=>{
    return(
        <li className="selected animated fadeInRight">
<div className="heading">
  <h1>About Us</h1>
  <span>Get More Info About Our Agency</span> 
</div>
<div className="cd-half-width second-slide">   
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="content second-content">
          <div className="row">
            <div className="col-md-7 left-image">
              <img src={About1}/>
            </div>
            <div className="col-md-5">
              <div className="right-about-text">
                <h4>Who we are?</h4>
                <p>Fusce neque leo, dapibus sed imperdiet sed, vulputate sed purus. Nam eget justo in nibh facilisis rhoncus. Donec et risus non mauris lobortis convallis. Aliquam id urna quis ante blandit semper.</p>
         
                <button className="primary-button" onClick={()=>console.log()}>Discover More</button>
                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="left-about-text">
                <h4>What we do?</h4>
                <p>Nam aliquam ultrices interdum. Vivamus metus mi, accumsan a tincidunt a, efficitur id felis. Vivamus non nibh malesuada, vestibulum nulla in, iaculis sem. Aenean tincidunt faucibus ipsum, ac aliquet nunc accumsan sed. Nulla sodales nunc sit amet libero egestas, ut interdum ex congue.</p>
                <button className="primary-button" onClick={()=>console.log()}>Discover More</button>
              </div>
            </div>
            <div className="col-md-5 right-image">
              <img src={About2}/>
            </div>
          </div>
        </div>
      </div>
    </div>                  
  </div>
</div>
</li>
    );
}

export default About;