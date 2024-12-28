import React, { useState } from 'react';
import './CustomizerControls.css';
import { customizerData } from '../data/customizer-options';

function CustomizerControls({ options, onOptionsChange }) {
  const [activeSection, setActiveSection] = useState('size');
  const currentCollection = customizerData.collections.find(c => c.id === options.collection);

  const calculateTotalPrice = (newOptions = options) => {
    const collection = customizerData.collections.find(c => c.id === newOptions.collection);
    const sizePrice = collection?.sizes.find(s => s.id === newOptions.size)?.price || 0;
    
    const currentCase = collection?.cases
      .flatMap(c => c.finishes)
      .find(f => f.id === newOptions.case);
    const casePrice = currentCase?.priceAdd || 0;
    
    const currentBand = customizerData.bands.categories
      .flatMap(c => c.options)
      .find(b => b.id === newOptions.band);
    const bandCategory = customizerData.bands.categories
      .find(c => c.options.some(b => b.id === newOptions.band));
    const bandPrice = bandCategory?.basePrice || 0;
    
    return sizePrice + casePrice + bandPrice;
  };

  const renderSizeSelector = () => (
    <div className="selector-section">
      <h2>Choose your size.</h2>
      <div className="size-selector">
        {currentCollection.sizes.map(size => (
          <button 
            key={size.id}
            className={`size-btn ${options.size === size.id ? 'active' : ''}`}
            onClick={() => {
              const newOptions = {...options, size: size.id};
              onOptionsChange(newOptions);
              setActiveSection('case');
            }}
          >
            <span className="size-name">{size.name}</span>
            <span className="size-price">${size.price}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderCaseSelector = () => (
    <div className="selector-section">
      <h2>Choose your case.</h2>
      <div className="case-selector">
        {currentCollection.cases.map(caseType => (
          <div key={caseType.material} className="case-material-section">
            <h3>{caseType.material}</h3>
            <div className="case-grid">
              {caseType.finishes.map(finish => {
                const totalPrice = calculateTotalPrice({...options, case: finish.id});
                return (
                  <button
                    key={finish.id}
                    className={`case-option ${options.case === finish.id ? 'active' : ''}`}
                    onClick={() => {
                      const newOptions = {...options, case: finish.id};
                      onOptionsChange(newOptions);
                      setActiveSection('band');
                    }}
                  >
                    <div className="case-image">
                      <img src={finish.thumbnail} alt={finish.name} />
                    </div>
                    <div className="case-info">
                      <span className="case-name">{finish.name}</span>
                      <span className="total-price">From ${totalPrice}</span>
                      {finish.priceAdd > 0 && (
                        <span className="price-add">+${finish.priceAdd}</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBandSelector = () => (
    <div className="selector-section">
      <h2>Choose your band.</h2>
      <div className="band-selector">
        {customizerData.bands.categories.map(category => (
          <div key={category.id} className="band-category">
            <h3>{category.name}</h3>
            <div className="band-grid">
              {category.options.map(band => {
                const totalPrice = calculateTotalPrice({...options, band: band.id});
                return (
                  <button
                    key={band.id}
                    className={`band-option ${options.band === band.id ? 'active' : ''}`}
                    onClick={() => {
                      const newOptions = {...options, band: band.id};
                      onOptionsChange(newOptions);
                    }}
                  >
                    <div className="band-image">
                      <img src={band.thumbnail} alt={band.name} />
                    </div>
                    <div className="band-info">
                      <span className="band-name">{band.name}</span>
                      <span className="total-price">From ${totalPrice}</span>
                      <span className="band-price">Band: ${category.basePrice}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="customizer-controls">
      <div className="control-tabs">
        <button 
          className={`tab ${activeSection === 'size' ? 'active' : ''}`}
          onClick={() => setActiveSection('size')}
        >
          Size
        </button>
        <button 
          className={`tab ${activeSection === 'case' ? 'active' : ''}`}
          onClick={() => setActiveSection('case')}
        >
          Case
        </button>
        <button 
          className={`tab ${activeSection === 'band' ? 'active' : ''}`}
          onClick={() => setActiveSection('band')}
        >
          Band
        </button>
      </div>

      <div className="control-content">
        {activeSection === 'size' && renderSizeSelector()}
        {activeSection === 'case' && renderCaseSelector()}
        {activeSection === 'band' && renderBandSelector()}
      </div>
    </div>
  );
}

export default CustomizerControls;
