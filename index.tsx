import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    /*const mystyle = {
        color: "darkblue",
              backgroundColor: "DodgerBlue", 
                    padding: "10px",
                          fontFamily: "Arial"
                              };*/

    return (
      <div>
        <Hello name={this.state.name} />
        <p style={{ color: 'black', marginLeft: '70%' }}>
          <b>Start editing to see some magic happen :)</b>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
