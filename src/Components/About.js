import React from 'react';
import About1 from '../Assets/img/mehwish.jpeg';
import About2 from '../Assets/img/mulla.jpeg';
import About3 from '../Assets/img/hur.jpeg';

const About =()=>{
    return(
        <li className="selected animated fadeInRight">
<div className="heading">
  <h1>About Us</h1>
  <span>Get More Info About Team AudioDer</span> 
</div>
<div className="cd-half-width second-slide">   
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="content second-content">
          <div className="row" >
            <div className="col-md-5 left-image">
              <img src={About2} style={{height:'40%',width:'40%',objectFit:'contain'}}/>
            </div>
            <div className="col-md-7">
              <div className="right-about-text">
                <h4>Mudassir Ahmed kidwai</h4>
                <p>Data Scientist and algorithm development enthusiast. Highly skilled Nodejs developer, 
                  who looked after the backend development and the integration of ffmpeg with Nodejs, by developing restful APIs.</p>
         
            
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="left-about-text">
                <h4>Mahwish Izhar</h4>
                <p>With experience in .Net FrameWork and MERN Stack development, she developed the responsive and smooth user-interface 
                  of AudioDer. Integrated the backend-routes with front-end developed on Reactjs.
                </p> 
              </div>
            </div>
            <div className="col-md-5 right-image">
              <img src={About1} style={{height:'30%',width:'40%',objectFit:'contain'}}/>
            </div>
          </div>
          <div className="row" style={{paddingBottom:'20px'}}>
            <div className="col-md-5 left-image" >
              <img src={About3} style={{height:'60%',width:'50%',objectFit:'contain'}}/>
            </div>
            <div className="col-md-7">
              <div className="right-about-text">
                <h4>Muhammad Hur Ali</h4>
                <p>Having worked as a full-stack and Mobile application developer, his job was to cater the both backend and frontend. Looked after 
                  the integration of material-ui elements and several nodejs libraries like multerjs and so.
                </p>
         
            
              </div>
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