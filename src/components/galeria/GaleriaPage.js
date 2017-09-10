import React, { Component} from 'react';
import Card from './Card';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Background2 from '../home/Bakground2';


class GaleriaPage extends Component {
  render () {
    return(
      <div style={{width:'100%'}}>

        <Background2 imagen={'https://images.pexels.com/photos/227432/pexels-photo-227432.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}/>
        Galeria
        <Row>
          <Col xs="12" sm="6" md="3"><Card/></Col>
          <Col xs="12" sm="6" md="3"><Card/></Col>
          <Col xs="12" sm="6" md="3"><Card/></Col>
          <Col xs="12" sm="6" md="3"><Card/></Col>
          <Col xs="12" sm="6" md="3"><Card/></Col>

        </Row>

      </div>
    )
  }
}

export default GaleriaPage;
