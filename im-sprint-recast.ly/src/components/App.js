import React from 'react';
import Nav from './Nav';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import {fakeData} from './__test__/fakeData';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {test: 'hi', array:[]}
  }

  componentDidMount(){
    let arr = []
    fakeData.map((vidObj) => {
      let obj = {}
      obj[key] = vidObj.etag
      obj[url] = vidObj.snippet.thumbnails.default.url
      obj[description] = vidObj.snippet.description
      obj[clicked] = false
      arr.push(obj)
    });
    this.setState({ data: arr });
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer />
        </div>
        <div className="col-md-5">
          <VideoList />
        </div>
      </div>
    )
  }
}

export default App;
