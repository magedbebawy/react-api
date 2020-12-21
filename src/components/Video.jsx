import React from 'react';

class Photo extends React.Component{
    render(){
        const mystyle = {
            width: "70%",
            margin: "5px auto"
          };
    return(
        <div className='card-body' >
            <h4>{this.props.photo.title}</h4>
            <div style={mystyle} dangerouslySetInnerHTML={{ __html: this.props.photo.videos[0].embed }} />
        </div>
    )
    }
    
}
 
export default Photo;