import React from 'react';
import Background from './Background';
import Wendy from './Wendy';
import Artycake from './Artycake';
import Info from './Info';
import ScrollReveal  from 'scrollreveal';



class Home extends React.Component {


    componentDidMount(){
        const config = {
            origin: 'right',
            duration: 1000,
            delay: 150,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }
        const config2 = {
            origin: 'left',
            duration: 1000,
            delay: 150,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }



        let sr = ScrollReveal();
        sr.reveal('.artycake',config);

        sr.reveal('.wendy',config2);


    }
  render () {
    return(
      <div>
        <Background/>
        <Artycake className="artycake"/>

        <Info className="info"/>

        <Wendy className="wendy"/>


      </div>
    )
  }
}

export default Home;
