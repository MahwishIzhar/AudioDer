import React from 'react';

const Welcome=(prop)=>{
return(
    <li className="selected animated fadeInRight">
       
         
    <div className="heading">
        <h1>AudioDer</h1>
        <span>Easily manipulate your video into wonders</span>
    </div>
    <div className="cd-full-width first-slide">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="content first-content">
                        <h4>Let's explore AudioDer</h4>
                        <p>AudioDer is free and open source video manipulation platform. It is designed on top of ffmpeg library to give users a user friendly platform
                            where the users can upload a video or place the URL of the video and get the desired results. 
                        </p>
                       {/* <div className="primary-button">
                           <a href="#" onClick={()=>prop.onClick('home')}>Get Started</a> 
                        </div>  */}
                        <button className="primary-button" onClick={()=>prop.onClick('home')}>Get Started</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
   
</li>

);
}

export default Welcome;