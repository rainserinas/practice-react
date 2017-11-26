import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          {/* Note: sample code snippet for link */}
          <RaisedButton label="" primary={true}><Link to='/'>Home</Link></RaisedButton>
          <RaisedButton label="" primary={true}><Link to='/test'>Test</Link></RaisedButton>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
