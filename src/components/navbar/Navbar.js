import React, { PropTypes } from 'react'
import {Link} from 'react-router-dom';

class Navbar  extends React.Component {
  render () {
    return(
      <nav style={{
          position:'fixed',
          zIndex:11
        }}>
        <Link to="/">
          Home
        </Link>
        <Link to="/otro">
          otra
        </Link>
      </nav>
    )

  }
}

export default Navbar;
