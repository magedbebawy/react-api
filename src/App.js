import './App.css';
import React from 'react';
import Videos from './components/Videos';

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
        photos: [],
        searchField: ''
     }
}

//fetch data on mount
componentDidMount(){
    fetch('https://www.scorebat.com/video-api/v1/')
    .then(res => res.json())
    .then((data) => {
        this.setState({
            photos: data
        })
    })
    .catch(console.log)
}

searchPhotos =e=>{
  this.setState({ searchField: e.target.value})
  
}


render() { 
  console.log(this.state.searchField)
  const {photos, searchField} = this.state

  const filteredPhotos = photos.filter(
    photo => photo.title.toLowerCase().includes(searchField)  
  )
  const mystyle = {
    margin: "10px auto"
  };
    return ( 
        <div className='container'>
          <input style={mystyle} className="form-control" placeholder='Search Teams'  type='search' onChange={this.searchPhotos} />
          <Videos photos={filteredPhotos}/>
        </div>
     );
}
  
  
}
 
export default App;



