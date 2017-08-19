import React, { PropTypes } from 'react';
import Background from './Background';

class Home extends React.Component {
  render () {
    return(
      <div>
        <Background/>
        <div style={{width:'100%', height:'80vh'}}></div>
        <div style={{width:'100%', height:'80vh'}}></div>

      </div>
    )
  }
}

export default Home;
