import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';
import FontAwesome from 'react-fontawesome';

class Navbar  extends React.Component {
  constructor(){
    super()
    this.state={
      menu:false,
      barra:false
    }
  }
  componentWillMount(){
     window.addEventListener('scroll',this.handleScroll);
  }

  handleScroll = () => {
      let y = window.scrollY;
      
      if (y>100) this.setState({barra:true});
      if (y<100) this.setState({barra:false});
    };


  handleMenu=()=>{
    this.setState({menu:!this.state.menu})
  }
  handleLink=()=>{
    this.setState({menu:false})
  }
  render () {
    return(
      <div onScroll={this.handleScroll}>
        <nav

          className={this.state.barra?"navbar2":"navbar"}>

          <Link className="link" to="/">
            <span><FontAwesome name="home"/> Home</span>
          </Link>
          <Link className="link" to="/galeria">
            <span><FontAwesome name="camera"/> Galería</span>
          </Link>
          <Link className="logo" to="/">
            <span><FontAwesome name="camera"/> Art&Cake</span>
          </Link>
          <Link className="link" to="/otro">
            <span><FontAwesome name="book"/> Cursos</span>
          </Link>
          <Link className="link" to="/otro">
            <span><FontAwesome name="birthday-cake"/> Cotizador</span>
          </Link>
        </nav>
        <span
          className="menu"
          style={this.state.menu?{left:'30%'}:{left:'5%'}}
          onClick={this.handleMenu}>
          {this.state.menu?<FontAwesome name="times"/>:<FontAwesome name="bars"/>}
        </span>
        <span
          className="logo2"
          >
          <FontAwesome name="camera"/> Art&Cake
        </span>

        <nav className="navbar-resp" style={this.state.menu?{marginLeft:0}:{marginLeft:'-100%'}}>
          <Link className="link" to="/"
            onClick={this.handleLink}>
            <span><FontAwesome name="home"/> Home</span>
          </Link>
          <Link className="link" to="/galeria"
            onClick={this.handleLink}>
            <span><FontAwesome name="camera"/> Galería</span>
          </Link>
          <Link className="link" to="/otro"
            onClick={this.handleLink}>
            <span><FontAwesome name="book"/> Cursos</span>
          </Link>
          <Link className="link" to="/otro"
            onClick={this.handleLink}>
            <span><FontAwesome name="birthday-cake"/> Cotizador</span>
          </Link>
        </nav>

      </div>
    )

  }
}

export default Navbar;
