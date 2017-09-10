import React from 'react';
import './Home.css';
class Background2 extends React.Component{

    render(){
        const a = this.props.imagen
        return(
            <div className="imagebg2" style={{backgroundImage:'url('+a+')'}}></div>
        )
    }
}

export default Background2;