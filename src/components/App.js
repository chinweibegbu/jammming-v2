import React from 'react';
// import data from '../data';

import TitleBar from './TitleBar';
import SearchSection from './SearchSection';
import InteractionSection from './InteractionSection';

function App() {

  return (
    <div className="container-fluid no-gutters App">
      <TitleBar />
      <SearchSection />
      <InteractionSection />
    </div>
  );
}

export default App;
