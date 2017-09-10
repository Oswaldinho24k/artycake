import React from 'react';
import {Button} from 'muicss/react';




class Otro extends React.Component {

  state={
      search:'',
      filter:'',
      filtrados:[]

  }

  lista=[
      {id:1,
      nombre:'Oswaldo',
      perfil:{
        status:false,
          color:'rojo'
      }},
      {id:2,
          nombre:'Bliss',
          perfil:{
              status:true,
              color:'verde'
          }},
      {id:3,
          nombre:'Brenda',
          perfil:{
              status:false,
              color:'azul'
          }},
      {id:4,
          nombre:'David',
          perfil:{
              status:true,
              color:'azul'
          }},
      {id:5,
          nombre:'Saul',
          perfil:{
              status:false,
              color:'azul'
          }}
  ]
    buscar=(e)=>{
      this.setState({search:e.target.value})
        let filtrados = this.lista.filter(item=>{
            return item.nombre.toLowerCase().indexOf(
                this.state.search.toLowerCase())!== -1 ||



                item.perfil.color.toLowerCase().indexOf(
                    this.state.search.toLowerCase())!== -1

        })
        this.setState({filtrados})
    }

  render () {

    return(
      <div style={{padding:'10%'}}>
        <input type="text" placeholder={'buscador'} value={this.state.search} onChange={this.buscar}/>
          {this.state.filtrados.map(l=>{
            return(
                <div>
                    {l.id}-{l.nombre}-{l.perfil.color}=>
                    {l.perfil.status?'activo':'no activo'}
                </div>
            )
          })}
      </div>
    )
  }
}

export default Otro;
