import React, { useState } from 'react';
import './WatchCustomizer.css';
import { customizerData } from '../data/customizer-options';

function WatchCustomizer({ options }) {
  const [viewMode, setViewMode] = useState('front');
  
  const currentCollection = customizerData.collections.find(c => c.id === options.collection);
  const currentCase = currentCollection?.cases
    .flatMap(c => c.finishes)
    .find(f => f.id === options.case);
  const currentBand = customizerData.bands.categories
    .flatMap(c => c.options)
    .find(b => b.id === options.band);
  const currentSize = currentCollection?.sizes.find(s => s.id === options.size);

  const getWatchImage = () => {
    if (!currentCase) return null;
    return viewMode === 'front' ? currentCase.image : currentCase.sideImage;
  };

  const calculatePrice = () => {
    if (!currentCollection || !currentCase || !currentSize) return 0;
    
    const sizePrice = currentSize.price || 0;
    const casePrice = currentCase.priceAdd || 0;
    
    const bandCategory = customizerData.bands.categories
      .find(c => c.options.some(b => b.id === options.band));
    const bandPrice = bandCategory?.basePrice || 0;
    
    return sizePrice + casePrice + bandPrice;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const getDescription = () => {
    const parts = [];
    if (currentSize) parts.push(currentSize.name);
    if (currentCase) parts.push(`${currentCase.name} Case`);
    if (currentBand) parts.push(`with ${currentBand.name}`);
    return parts.join(' ');
  };

  return (
    <div className="watch-preview">
      <div className="watch-container">
        <div className="watch-image-wrapper">
          <div className="watch-image-container">
            {getWatchImage() && (
              <>
                <img 
                  src={getWatchImage()}
                  alt="Customized Apple Watch"
                  className={`watch-image ${viewMode}`}
                />
                <div className="watch-shadow"></div>
              </>
            )}
          </div>
          <button 
            className="view-toggle"
            onClick={() => setViewMode(viewMode === 'front' ? 'side' : 'front')}
          >
            {viewMode === 'front' ? 'Side view' : 'Front view'}
          </button>
        </div>
        
        <div className="watch-info">
          <div className="watch-details">
            <span className="collection-name">{currentCollection?.name}</span>
            <p className="watch-description">{getDescription()}</p>
            <div className="price-container">
              <p className="watch-price">{formatPrice(calculatePrice())}</p>
              {currentCase?.priceAdd > 0 && (
                <span className="price-note">
                  Includes {formatPrice(currentCase.priceAdd)} case upgrade
                </span>
              )}
            </div>
          </div>
          <div className="watch-actions">
            <button className="action-button primary">Add to Bag</button>
            <button className="action-button secondary">Save as Favorite</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchCustomizer;
