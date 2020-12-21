import React from 'react';
import Video from './Video';

class Videos extends React.Component {
    render() { 
        return ( 
            <div>
                {this.props.photos.map((photo) => (
                    <div className='card' style={{margin: "5px auto"}}>
                        <Video key={photo.id} photo={photo}/>
                    </div>
                ))}
            </div>
         );
    }
}
 
export default Videos;