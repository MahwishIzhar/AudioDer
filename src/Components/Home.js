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
import AttachFile from '@material-ui/icons/AttachFile';
import {HomeStyle} from './HomeStyle.js'
import { Button } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import Download from '@axetroy/react-download';


class Home extends React.Component{
  constructor(){
    super();
  
 this.state = {
            Open: false,
            listTitle: "Select a format",
            file: null,
            showToast: false,
            showStartbtn: false,
            vertical: 'top',
            horizontal: 'center',
            downloaded_file: null
        }}

handle_ListTitle = () => {
          this.setState({ Open: !this.state.Open });
}

handle_ListChild = ( text ) => {
  this.setState({ Open: !this.state.Open, listTitle: text, showStartbtn: true });
}

 handle_btnStart =  () => {

if( this.state.file )
{
  if( this.state.listTitle == 'Convert To Audio' )
  {
    let data = new FormData()
    data.append('file', this.state.file)

    this.props.setActive(true)
    let that = this
  
    fetch('http://192.168.1.108:5000/convertToaudio', {
      method: "POST",
      body: data
    }).then(function(response) {
  //  console.log(response.)
      return response.blob();
    }).then(function(data) {

      that.props.setActive(false)

      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download','audio.mp3');  // 3. Append to html page
      document.body.appendChild(link);  // 4. Force download
      link.click();  // 5. Clean up and remove the link
      link.parentNode.removeChild(link);
   
    });
  }

  if( this.state.listTitle == 'Convert To GIF preview' )
  {
    let data = new FormData()
    data.append('file', this.state.file)
    this.props.setActive(true)
let that = this
  
    fetch('http://192.168.1.108:5000/convertTogif', {
      method: "POST",
      body: data
    }).then(function(response) {
  //  console.log(response.)
  return response.blob();
}).then(function(data) {
  that.props.setActive(false)
  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download',`preview.gif`);  // 3. Append to html page
  document.body.appendChild(link);  // 4. Force download
  link.click();  // 5. Clean up and remove the link
  link.parentNode.removeChild(link);
    });
  }

  if( this.state.listTitle == 'Only Video' )
  {
    let data = new FormData()
    data.append('file', this.state.file)
    this.props.setActive(true)
    let that = this
    let name = this.state.file.name.split('.')
  
    fetch('http://192.168.1.108:5000/onlyVideo', {
      method: "POST",
      body: data
    }).then(function(response) {
   return response.blob();
}).then(function(data) {
  that.props.setActive(true)
  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download',`video.${name[1]}`);  // 3. Append to html page
  document.body.appendChild(link);  // 4. Force download
  link.click();  // 5. Clean up and remove the link
  link.parentNode.removeChild(link);
    });
  }
}

else
{
  alert('Please select a conversion format');
}
 
 
};

 


  render(){

    const { Open } = this.state;

  return(
        <li className="selected animated fadeInRight">
<div className="heading">
  <h1>Audioder</h1>
  <span>Easily manipulate your video into wonders</span> 
</div>
<div className="cd-half-width third-slide"  >
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
                aria-labelledby="nested-list-subheader" style={{width:"65%"}} >

                <ListItem button onClick={this.handle_ListTitle} style={{border:"1px solid #ccc",width:'100%',borderRadius:5}}>
                    <ListItemIcon style={{minWidth:'25px'}}>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={this.state.listTitle} />
                    {Open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={Open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {
                            ['Convert To Audio', 'Only Video', 'Convert To GIF preview']
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
            {/* <h5>Enter video url below :</h5>

          <input style={HomeStyle.inputStyle}  placeholder="Enter video URL" type="text"/> */}
<br></br>            

{/* <h3 style={{marginLeft:'20%'}}>OR</h3> */}
<div style={{display:'flex',flexDirection:'row', justifyContent:'space-between',alignItems:'center',width:'60%'}}>
<h5 style={{width: '100%'}}>Attach a video :</h5>

                <Button
                  raised="true"
                   component="label" 
                   color="primary"
                   variant="contained"
                   style={{width:'55%', marginTop:'2%', backgroundColor:'#2f4ba8'}}
                  >
                    <div style={{justifyContent: 'center',alignItems:'center',display:'flex',flexDirection:'row'}}>
                    <AttachFile />
                  <input
                    onChange={e => this.setState({file: e.target.files[0]})}
                    style= {{ display: 'none' }}
                    type="file"
                  />
                  <p style={HomeStyle.fileButtonText}>{this.state.file && this.state.file.name}</p>
                  </div>
                </Button>
                </div>

                {
                  this.state.showStartbtn
            ?    <button className="primary-button" onClick={()=>this.handle_btnStart()} style={{marginLeft:'15%'}} >Start</button>
            : null
                }

            

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