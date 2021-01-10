import React from 'react';
import Routes from './routes';
import GlobalStyles from './styles/global';
import Theme from './styles/theme';

function App() {
  return (
    <div className='App'>
      <Theme>
        <GlobalStyles />
        <Routes />
      </Theme>
    </div>
  );
}

export default App;
