import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import WatchCustomizer from './components/WatchCustomizer';
import CustomizerControls from './components/CustomizerControls';
import { customizerData } from './data/customizer-options';

function App() {
  // Initialize with the default options from customizerData
  const [selectedOptions, setSelectedOptions] = useState({
    collection: customizerData.defaultOptions.collection,
    size: customizerData.defaultOptions.size,
    case: customizerData.defaultOptions.case,
    band: customizerData.defaultOptions.band
  });

  const handleOptionsChange = (newOptions) => {
    console.log('Updating options:', newOptions); // Debug log
    setSelectedOptions(newOptions);
  };

  return (
    <div className="watch-studio">
      <Header />
      <main className="studio-content">
        <WatchCustomizer options={selectedOptions} />
        <CustomizerControls 
          options={selectedOptions}
          onOptionsChange={handleOptionsChange}
        />
      </main>
    </div>
  );
}

export default App;
