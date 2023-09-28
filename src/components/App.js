import React, { useState } from 'react';

import TitleBar from './TitleBar';
import SearchSection from './SearchSection';
import InteractionSection from './InteractionSection';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [playlist, setPlaylist] = useState([]);

  return (
    <div className="container-fluid no-gutters App">
      <TitleBar />
      <SearchSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSearchResults={setSearchResults} />
      <InteractionSection searchResults={searchResults} setSearchResults={setSearchResults} playlist={playlist} setPlaylist={setPlaylist} />
    </div>
  );
}

export default App;
