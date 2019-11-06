import React from 'react';

const Contact =()=>{
return(
    <li className="selected animated fadeInRight">
    <div className="heading">
      <h1>Contact us</h1>
      <span>You'll be responded within 48 hrs</span> 
    </div>
    <div className="cd-half-width fivth-slide">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content fivth-content">
              <div className="row">
                <div className="col-md-4">
                  <div className="left-info">
                    <p>Maecenas imperdiet sagittis lacus, ut consequat velit iaculis id. Praesent eu consequat urna. Morbi justo dolor, ornare sed lorem et, auctor iaculis ligula.
                    <br></br>
                    <em>3344 Donec mollis libero<br/>at metus luctus 10110</em>
                    </p>
                    <ul className="social-icons">
                      <i><a href="#"><i className="fa fa-facebook"></i></a></i>
                      <i><a href="#"><i className="fa fa-twitter"></i></a></i>
                      <i><a href="#"><i className="fa fa-linkedin"></i></a></i>
                      <i><a href="#"><i className="fa fa-rss"></i></a></i>
                      <i><a href="#"><i className="fa fa-behance"></i></a></i>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8">
                 
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

export default Contact;