import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return(
    <React.Fragment>
      <GlobalStyle />
      <Routes />
    </React.Fragment>
  );
}

export default App;