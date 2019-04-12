import React, { Component } from 'react';
import Results from './components/Results'
import './App.css';

class App extends Component {
  state = {
    data: {},
    value: "",
  }

  getData = () =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=72d88e9141ea810430c69758d28e1351`)
      .then(res => res.json())
      .then(data => {
        this.setState({data: data})
      })
  }

  render() {
    let code;
    if(this.state.data.weather){

      code  = this.state.data.weather[0].id
    }


    console.log(code)

    return (
      <div 
        className={
          code < 600 ? "App bg-rain": 
          (code >= 600 && code <=622 ? "App":
          (code >= 800 && code <= 802 ? "App bg-sun" : "App"))
        }
      >
        <form 
          onSubmit={e=>{
            e.preventDefault();
            e.stopPropagation();
            this.getData();
          }}
        >
          <input
            placeholder="Enter city"
            className="input"
            value={this.state.value}
            onChange={e=>{
              this.setState({value: e.target.value});
            }}
          />
          <button type="submit">find</button>
        </form>

        <Results 
          data={this.state.data} 
        />
      </div>
    );
  }
}

export default App;
