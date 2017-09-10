import React from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import './footer.css';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <Row>
                    <Col md="4">
                        <div className="rsociales">
                            <a href="https://www.facebook.com/menesh.poxka">
                                <FontAwesome name="facebook-square"/> /artycake
                            </a>
                            <a href="https://www.facebook.com/menesh.poxka">
                                <FontAwesome name="instagram"/> /artycake
                            </a>
                            <a href="https://www.facebook.com/menesh.poxka">
                                <FontAwesome name="snapchat"/> /artycake
                            </a>
                            <a href="https://www.facebook.com/menesh.poxka">
                                <FontAwesome name="twitter"/> /artycake
                            </a>
                            <a href="https://www.facebook.com/menesh.poxka">
                                <FontAwesome name="whatsapp"/> +52 7712345678
                            </a>
                            <a href="https://www.facebook.com/menesh.poxka">
                                <FontAwesome name="envelope"/> art@cake.com
                            </a>
                        </div>
                    </Col>
                    <Col md="4">
                        <div>
                           <h2>Art & Cake(Logo)</h2>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="links">
                            <Link className="link" to="/">
                                <FontAwesome name="home"/> Home
                            </Link>
                            <Link className="link" to="/galeria">
                                <FontAwesome name="camera"/> Galería
                            </Link>
                            <Link className="link" to="/otro">
                                <FontAwesome name="book"/> Cursos
                            </Link>
                            <Link className="link" to="/otro">
                                <FontAwesome name="birthday-cake"/> Cotizador
                            </Link>
                        </div>
                    </Col>
                </Row>
                <h5>Made with <FontAwesome name="heart"/> by Oswaldinho  </h5>
            </div>
        )
    }
}

export default Footer