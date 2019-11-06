import React from 'react';
import FeaturedImage from '../Assets/img/left-feature-image.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

class Featured extends React.Component{
  constructor(){
    super();
  
 this.state = {
            Open: false,
        }}

        handleClick = () => {
          this.setState({ Open: !this.state.Open });
          // this.props.DeselectItem();
      }

  render(){

    const { Open } = this.state;

  return(
        <li className="selected animated fadeInRight">
<div className="heading">
  <h1>Audioder</h1>
  <span>Easily manipulate your video into wonders</span> 
</div>
<div className="cd-half-width third-slide">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="content third-content">
          <div className="row">
            {/* <div className="col-md-7 left-image">
              <img src={FeaturedImage}/>
            </div> */}
            <div className="col-md-5">
              <div className="right-feature-text">
                <h4>Manipulate your video</h4>
                <List
                component="nav"
                aria-labelledby="nested-list-subheader" style={{width:"15vw"}} >

                <ListItem button onClick={this.handleClick}>
                    <ListItemIcon style={{minWidth:'25px'}}>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Select a format" />
                    {Open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={Open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {
                            ['Only Audio', 'Only Video', 'Gif Preview']
                                .map((text, index) => (
                                    <ListItem button  onClick={()=>console.log(text)}>
                                        <ListItemIcon style={{marginLeft:'10px',minWidth:'25px'}}>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText primary={text} key={text} />
                                    </ListItem>
                                ))

                        }

                    </List>
                </Collapse>
            </List>

                <p>Lorem ipsum dolor amet, consecte adipiscing elit, quisque dictum convallis mi. In dapibus auctor dictum donec mattis quis eros ultricies feugiat. Morbi congue faucibus mi, ague blandit curabitur ac lacinia.</p>
                <div className="feature-list">
                  <ul>
                    <p>- Suspendisse mattis finibus sem</p>
                    <p>- Pellentesque et urna vel lectus</p>
                    <p>- Vestibulum iaculis nisi dui</p>
                    <p>- Donec sagittis eros , ac tempus ligula</p>
                    <p>- Integer sapien risus, auctor</p>
                  </ul>
                </div>
                <div className="primary-button">
                  <a href="#">Discover More</a>
                </div>
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
  
}

export default Featured;