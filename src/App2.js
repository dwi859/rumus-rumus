import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
     submit:false,
     hasil:0,
     angka1:0,
     angka2:0,
     rumus:"persegi"
    }
  }
 
  changeHandler = (event) => {
      let value = event.target.value
      this.setState({[event.target.name]:value})
  }

  submitHandler = () => {
      let rumus = this.state.rumus
      let hasil = 0
      if(rumus==="persegi"){
          let angka1 = parseInt(this.state.angka1)
          hasil = angka1*angka1
      }else if(rumus==="persegi panjang"){
          let angka1 = parseInt(this.state.angka1)
          let angka2 = parseInt(this.state.angka2)
          hasil = angka1*angka2
      }else if(rumus==="lingkaran"){
          let angka1 = parseInt(this.state.angka1)
          hasil = 22/7 * angka1 * angka1
      }

      this.setState({
          hasil,
          submit:true
      })
  }
 
  backHandler = () =>{
      this.setState({
          submit:false
      })
  }
  changeScreenHandler = (name, val) => {
      this.setState({
          [name]:val,
          submit:false
      })
  }
 
 

  render() {
   console.log(this.state.hasil)
    return (
        <div>
      <center>        
          <button onClick={this.changeScreenHandler('rumus','persegi')}>Persegi</button>
          <button onClick={()=>this.changeScreenHandler('rumus','persegi panjang')}>Persegi Panjang</button>
          <button onClick={()=>this.changeScreenHandler('rumus','lingkaran')}>Lingkaran</button>
          {!this.state.submit ? (
              <div>
                  {this.state.rumus === "persegi" &&
                  <div>
                      <h1>Rumus Persegi Adalah Sisi x Sisi</h1>
                      <input type="number" name="angka1" placeholder="sisi" onChange={this.changeHandler}/>
                      <br/><br/>
                      <input type="submit" onClick={this.submitHandler} value="Hasil"/>
                  </div>
                }
                {this.state.rumus === "persegi panjang" &&
                  <div>
                      <h1>Rumus Persegi Panjang Adalah Panjang x Lebar</h1>
                      <input type="number" name="angka1" placeholder="sisi" onChange={this.changeHandler}/>
                      <br/><br/>
                      <input type="number" name="angka2" placeholder="sisi" onChange={this.changeHandler}/>
                      <br/><br/>
                      <input type="submit" onClick={this.submitHandler} value="Hasil"/>
                  </div>
                }
                {this.state.rumus === "lingkaran" &&
                  <div>
                      <h1>Rumus Lingkaran adalah 22/7 X r X r</h1>
                      <input type="number" name="angka1" placeholder="sisi" onChange={this.changeHandler}/>
                      <br/><br/>
                      
                      <input type="submit" onClick={this.submitHandler} value="Hasil"/>
                  </div>
                }
              </div>
          ):(
              <div>
                  <h1>Hasil dari Luas {this.state.rumus} adalah {this.state.hasil}</h1>
                  <button onClick={this.backHandler}>Back to Home</button>
              </div>
          )}
       
      </center>
      </div>
    );
  }
}

export default App;
