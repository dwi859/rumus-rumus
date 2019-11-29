import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      buttonpersegi : false,
      buttonpersegipanjang : false,
      buttonlingkaran : false,
      submit : false,
      nilai : null,
      nilai2 : null,
      nilai1 : null,
      hasilp : 0,
      nilail : null,
      hasill : 0,
      operator : null,
      hasil: 0
    }
  }
 
  renderPersegi = () => {
    this.setState({buttonpersegi:true,buttonpersegipanjang:false,buttonlingkaran:false})
  }
  renderPersegiPanjang = () => {
    this.setState({buttonpersegipanjang:true,buttonpersegi:false,buttonlingkaran:false})
  }
  renderLingkaran = () => {
    this.setState({buttonlingkaran:true,buttonpersegi:false,buttonpersegipanjang:false})
  }

  hitungPersegi(e){
    e.preventDefault();
    const nilai = parseInt(this.refs.nilai.value);
    var hasil;
    hasil = nilai * nilai;

    this.setState({hasil,submit:true});
   
    console.log(hasil);
  }
 
  backpersegi(e){
    e.preventDefault();
    var hasil;
    this.state={
      hasil: 0
    }
    this.setState({hasil, submit:false});
   
  }
  hitungLingkaran(e){
    e.preventDefault();
    const nilail = parseInt(this.refs.nilail.value);
    var hasill;
    hasill = 3.14 * nilail * nilail;
    this.setState({hasill,submit:true});
    console.log(hasill);
  }
 
  backlingkaran(e){
    e.preventDefault();
    var hasill;
    this.state={
      hasill: 0
    }
    this.setState({hasill, submit:false});
   
  }
  hitungPersegiPanjang(e){
    e.preventDefault();
    const nilai1 = parseInt(this.refs.nilai1.value);
    const nilai2 = parseInt(this.refs.nilai2.value);
    var hasilp;
    hasilp = nilai1 * nilai2;

    this.setState({hasilp,submit:true});

    console.log(hasilp);
  }
 
  backpersegipanjang(e){
    e.preventDefault();
   

    var hasilp;
    this.state={
      
      hasilp: 0
    }
    this.setState({hasilp, submit:false});
   
  }

  renderHasil(){
    
    const{hasil} = this.state;

    if(this.state.hasil){
      return(
        <form onSubmit={this.handleSubmit2.bind(this)}>
          <div>
            <h1>{'hasil Luas Persegi '+'adalah'+" "+hasil}</h1>
            <br/>
            <button>Back To Home</button>
          </div>
        </form>

      )
    } 
  }

  renderHalaman(){
    
    if(this.state.buttonpersegi == true){
     
      if(this.state.hasil){
        const{hasil} = this.state;
        return(
          <form onSubmit={this.backpersegi.bind(this)}>
            <div>
              <h1>{'hasil Luas Persegi '+'adalah'+" "+hasil}</h1>
              <br/>
              <button>Back To Home</button>
            </div>
          </form>
        )
      }else{
    return(
      <form onSubmit={this.hitungPersegi.bind(this)}>
          <div>
          <h1>Rumus Persegi adalah SisixSisi</h1><br/>
          <input type="number" ref="nilai" className="form-control"/> <br/>
         
          <button>hasil</button>
          </div>
        </form>
    )
    }}else if(this.state.buttonpersegipanjang == true){
      if(this.state.hasilp){
        const{hasilp} = this.state;
        return(
          <form onSubmit={this.backpersegipanjang.bind(this)}>
            <div>
              <h1>{'hasil Luas Persegi Panjang '+'adalah'+" "+hasilp}</h1>
              <br/>
              <button>Back To Home</button>
            </div>
          </form>
        )
      }else{
      return(
        <form onSubmit={this.hitungPersegiPanjang.bind(this)}>
            <div>
            <h1>Rumus Persegi Panjang adalah Panjang X Lebar</h1><br/>
            <input type="number" ref="nilai1" className="form-control"/> <br/>
            <input type="number" ref="nilai2" className="form-control"/> <br/>
            <button>hasil</button>
            </div>
          </form>
      )
      }}else if(this.state.buttonlingkaran == true){
        if(this.state.hasill){
          const{hasill} = this.state;
          return(
            <form onSubmit={this.backlingkaran.bind(this)}>
              <div>
                <h1>{'hasil Luas Lingkaran '+'adalah'+" "+hasill}</h1>
                <br/>
                <button>Back To Home</button>
              </div>
            </form>
          )
        }else{
        return(
          <form onSubmit={this.hitungLingkaran.bind(this)}>
              <div>
              <h1>Rumus Lingkarang adalah 3,14 X R X R</h1><br/>
              <input type="number" ref="nilail" className="form-control"/> <br/>
              
              <button>hasil</button>
              </div>
            </form>
        )
      }
    }
  }

  render() {
    const submit = this.state.submit;
    return (
      <center>
      <div className="layout">
        <div className="header">
        
          <button onClick={()=>this.renderPersegi()}>Persegi</button>
      
          <button onClick={()=>this.renderPersegiPanjang()}>Persegi Panjang</button>
          <button onClick={()=>this.renderLingkaran()}>Lingkaran</button>
        </div>
        {this.renderHalaman()}
      </div>
      </center>
    );
  }
}

export default App;
