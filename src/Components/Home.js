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
import TextField from '@material-ui/core/TextField';
import AttachFile from '@material-ui/icons/AttachFile';
import {HomeStyle} from './HomeStyle.js'
import { Button } from '@material-ui/core';



class Home extends React.Component{
  constructor(){
    super();
  
 this.state = {
            Open: false,
            listTitle: "Select a format",
            file: null
        }}

handle_ListTitle = () => {
          this.setState({ Open: !this.state.Open });
}

handle_ListChild = ( text ) => {
  this.setState({ Open: !this.state.Open, listTitle: text });
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
            <div className="col-md-5">
              <div className="right-feature-text">
                <h4>Manipulate your video</h4>
                <h5>Please select a format from below :</h5>
                <List
                component="nav"
                aria-labelledby="nested-list-subheader" style={{width:"50%"}} >

                <ListItem button onClick={this.handle_ListTitle} style={{border:"1px solid #ccc",borderRadius:5}}>
                    <ListItemIcon style={{minWidth:'25px'}}>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={this.state.listTitle} />
                    {Open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={Open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {
                            ['Only Audio', 'Only Video', 'Gif Preview']
                                .map((text, index) => (
                                    <ListItem button  onClick={()=>this.handle_ListChild(text)} 
                                    style={index === 2 ? HomeStyle.ListChild_Last: HomeStyle.ListChild }>
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
            <h5>Enter video url below :</h5>

          <input style={HomeStyle.inputStyle}  placeholder="Enter video URL" type="text"/>
<br></br>            
                <Button
                  raised="true"
                   component="label" 
                   color="primary"
                   variant="contained"
                   style={{width:'30%', marginTop:'5%', backgroundColor:'#ffbb05'}}
                  >
                    <AttachFile />
                  <input
                    onChange={e => this.setState({file: e.target.files[0]})}
                    style= {{ display: 'none' }}
                    type="file"
                  />
                  <p style={HomeStyle.fileButtonText}>{this.state.file && this.state.file.name}</p>
                </Button>
             
                {/* <div className="primary-button">
                  <a href="#">Discover More</a>
                </div> */}
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

export default Home;