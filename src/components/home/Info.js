import React from 'react';
import './Home.css';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

class Info extends React.Component{
    render(){
        return(
            <div>
                <div className="parallax"></div>
                <div className="info">

                    <Row>
                        <Col md={3}>
                            <div className="prod">
                                <h2>Cupcakes</h2>
                                <img className="prodImg" src="https://scontent.fmex10-2.fna.fbcdn.net/v/t1.0-9/20597483_1025427187560517_2954419412154481292_n.jpg?oh=56675ded8a0bc8709d68d13b8ff3a090&oe=5A5D401E" alt=""/>
                                <div className="prodText">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, eveniet hic nam quos recusandae suscipit. Deserunt eveniet, exercitationem id incidunt laudantium, maiores molestias neque odit quaerat quasi tempore, tenetur vero!</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="prod">
                                <h2>Pasteles</h2>
                                <img className="prodImg" src="https://scontent.fmex10-2.fna.fbcdn.net/v/t1.0-9/20597483_1025427187560517_2954419412154481292_n.jpg?oh=56675ded8a0bc8709d68d13b8ff3a090&oe=5A5D401E" alt=""/>
                                <div className="prodText">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis consectetur consequatur dolorum id in ipsa laborum libero molestias nemo, nihil obcaecati officiis provident quis quos rem soluta totam voluptatibus.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="prod">
                                <h2>Popcakes</h2>
                                <img className="prodImg" src="https://scontent.fmex10-2.fna.fbcdn.net/v/t1.0-9/20597483_1025427187560517_2954419412154481292_n.jpg?oh=56675ded8a0bc8709d68d13b8ff3a090&oe=5A5D401E" alt=""/>
                                <div className="prodText">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium architecto atque cum dolor earum et expedita fugiat iure labore magni nemo non nostrum porro quasi, ratione recusandae repellat voluptate?</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="prod">
                                <h2>Galletas</h2>
                                <img className="prodImg" src="https://scontent.fmex10-2.fna.fbcdn.net/v/t1.0-9/20597483_1025427187560517_2954419412154481292_n.jpg?oh=56675ded8a0bc8709d68d13b8ff3a090&oe=5A5D401E" alt=""/>
                                <div className="prodText">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque dolore dolores dolorum est, excepturi facilis harum, in iste minima nisi officia pariatur perferendis praesentium provident quae quis sequi ut.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="parallax2"></div>
            </div>
        )
    }
}
export default Info