import React from 'react';
import videoplayback from './Assets/videos/video.mp4';
import './Assets/css/bootstrap.min.css'
import './Assets/css/bootstrap-theme.min.css'
import './Assets/css/fontAwesome.css'
import './Assets/css/templatemo-style.css'
import './Assets/css/animate.css'
import homeIcon from './Assets/img/home-icon.png';
import aboutIcon from './Assets/img/about-icon.png';
import featuredIcon from './Assets/img/featured-icon.png';
import projectsIcon from './Assets/img/projects-icon.png';
import welcomeIcon from './Assets/img/welcome.png';
import $ from 'jquery';
import Welcome from './Components/Welcome';
import About from './Components/About';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

class App extends React.Component {

  componentDidMount() {
    $(document).ready(function ($) {
      var slidesWrapper = $('.cd-hero-slider');
      if (slidesWrapper.length > 0) {
        var primaryNav = $('.cd-primary-nav'),
          sliderNav = $('.cd-slider-nav'),
          navigationMarker = $('.cd-marker'),
          slidesNumber = slidesWrapper.children('li').length,
          visibleSlidePosition = 0,
          autoPlayId,
          autoPlayDelay = 5000;
        uploadVideo(slidesWrapper);

        //autoplay slider
        setAutoplay(slidesWrapper, slidesNumber, autoPlayDelay);


        function setAutoplay(wrapper, length, delay) {
          if (wrapper.hasClass('autoplay')) {
            clearInterval(autoPlayId);
            autoPlayId = window.setInterval(delay);
            //console.log("here")
          }
        }



        function uploadVideo(container) {
          container.find('.cd-bg-video-wrapper').each(function () {
            var videoWrapper = $(this);
            if (videoWrapper.is(':visible')) {
              // if visible - we are not on a mobile device 
              var videoUrl = videoWrapper.data('video'),
                video = $('<video loop><source src="' + videoUrl + '.mp4" type="video/mp4" /><source src="' + videoUrl + '.webm" type="video/webm" /></video>');
              video.appendTo(videoWrapper);
              // play video if first slide
              if (videoWrapper.parent('.cd-bg-video.selected').length > 0) video.get(0).play();
            }
          });
        }


      }
    });
  }

  constructor() {
    super()
    this.state = {
      display: 'welcome',
    }
  }

  setDisplay = (newDisplay) => {
    this.setState({ display: newDisplay });
  }

  render() {
    return (
      <div>
        <div className="overlay"></div>
        <section className="top-part">
          <video autoPlay loop>
            <source src={videoplayback} type="video/mp4" />
            <source src="./Assets/videos/video.ogg" type="video/ogg" />
            Your browser does not support the video tag.
            </video>
        </section>

        <section className="cd-hero">
          <div>

            <div className="cd-slider-nav">
              <nav >
                <span className="cd-marker item-1"></span>
                <ul>
                  <li><div className="image-icon" onClick={() => this.setDisplay('welcome')}><img src={welcomeIcon} /></div><h6>Welcome</h6></li>
                  <li><div className="image-icon" onClick={() => this.setDisplay('home')}><img src={homeIcon} /></div><h6>Home</h6></li>                 
                  <li><div className="image-icon" onClick={() => this.setDisplay('about us')}><img src={aboutIcon} /></div><h6>About Us</h6></li>
                  {/* <li><div className="image-icon" onClick={() => this.setDisplay('projects')}><img src={projectsIcon} /></div><h6>Projects</h6></li>
                  <li><div className="image-icon" onClick={() => this.setDisplay('contact')}><img src={contactIcon} /></div><h6>Contact Us</h6></li> */}
                </ul>
              </nav>
            </div>

          </div>

          <ul className="cd-hero-slider">
            {
              this.state.display === 'welcome'
                ? <Welcome onClick={this.setDisplay}/>
                : this.state.display === 'about us'
                  ? <About />
                  : this.state.display === 'home'
                    ? <Home />
                    // : this.state.display === 'projects'
                    //   ? <Projects />
                    //   : this.state.display === 'contact'
                    //     ? <Contact />
                        : console.log()
            }

          </ul>

        </section>

      </div>
    );
  }

}

export default App;
