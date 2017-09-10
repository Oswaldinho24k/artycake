import React from 'react';
import './Home.css';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';



class Wendy extends React.Component {

  render () {
    return(
      <div className="wendy">
        <Row style={{margin:0}}>
          <Col md="5">
            <div className="laFoto">
              <img src="https://scontent.fmex10-2.fna.fbcdn.net/v/t31.0-8/17436038_916408005129103_1991396966254765321_o.jpg?oh=30ac6447317d58bf3fec61865dff98ed&oe=5A5B3B28"/>
            </div>
          </Col>
          <Col md="7">
            <div className="texto-wendy">
              <h2>Wendy HA</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className="rsociales">
                <a href="https://www.facebook.com/menesh.poxka">
                  <FontAwesome name="facebook-square"/>
                </a>
                <a href="https://www.facebook.com/menesh.poxka">
                  <FontAwesome name="instagram"/>
                </a>
                <a href="https://www.facebook.com/menesh.poxka">
                  <FontAwesome name="snapchat"/>
                </a>
                <a href="https://www.facebook.com/menesh.poxka">
                  <FontAwesome name="twitter"/>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Wendy;
