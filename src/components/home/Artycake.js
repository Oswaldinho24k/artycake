import React from 'react';
import './Home.css';
import FontAwesome from 'react-fontawesome';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';




class Artycake extends React.Component {

  render () {
    return(
      <div className='artycake'>
        <Row>
            <Col md="7">
                <div className="texto">
                    <h2>Baking Art</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum dolore eaque incidunt perferendis possimus sit. Aspernatur enim est libero ratione repudiandae? Ad atque fugit in mollitia, nobis qui tenetur.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolore dolores ducimus exercitationem nam perspiciatis placeat, repellat vero. Incidunt magnam nisi repellat soluta voluptas! Accusantium eius tempore ut. Non, sint.
                    </p>
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
            <Col md="5">
                <div className="mainPastel">
                    <img className="mainImg" src="https://scontent.fmex10-2.fna.fbcdn.net/v/t1.0-9/20597483_1025427187560517_2954419412154481292_n.jpg?oh=56675ded8a0bc8709d68d13b8ff3a090&oe=5A5D401E" alt="Super pastel"/>
                </div>
            </Col>
        </Row>

      </div>
    )
  }
}

export default Artycake;
