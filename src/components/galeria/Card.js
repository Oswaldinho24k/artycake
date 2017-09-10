import React from 'react';
import './card.css';
class Card extends React.Component{



    render(){
        return(
            <div className="card" >
                <div className="img-container">
                    <img src="https://scontent.fmex10-2.fna.fbcdn.net/v/t1.0-9/20597483_1025427187560517_2954419412154481292_n.jpg?oh=56675ded8a0bc8709d68d13b8ff3a090&oe=5A5D401E" alt=""/>
                </div>
            </div>
        )
    }
}
export default Card;