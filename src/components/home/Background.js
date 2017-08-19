import React, { PropTypes } from 'react'

const styles = {
    bgvid:{
        width:'100%',
        minWidth: '100%',
        minHeight: '100%',
        width: 'auto',
        height: 'auto',
        zIndex: '-1000'
    },
    onV:{
      backgroundColor:'rgba(0,0,0,.5)',
      width:'100%',
      minWidth: '100%',
      minHeight: '100%',
      width: 'auto',
      height: 'auto',
      zIndex: '1'
    }
}

const bg = "https://firebasestorage.googleapis.com/v0/b/youtubetutorial-a5e25.appspot.com/o/home%2FShort%20.mp4?alt=media&token=7ee8cad8-d4b9-45f5-bb25-7cc519fd5b6c";


const Background = (props) => {
  return (
    <div>
      <div style={styles.onV}></div>
      <video style={styles.bgvid} autoPlay loop muted>
          <source src={bg} type="video/mp4" />
      </video>
    </div>
  )
}

export default Background;
