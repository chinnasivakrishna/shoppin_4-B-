export const customizerData = {
  collections: [
    {
      id: 'series-10',
      name: 'Apple Watch Series 10',
      basePrice: 429,
      sizes: [
        { id: '41mm', name: '41mm', price: 429 },
        { id: '45mm', name: '45mm', price: 459 }
      ],
      cases: [
        {
          material: 'Aluminum',
          finishes: [
            {
              id: 'aluminum-midnight',
              name: 'Midnight',
              image: '/images/watches/aluminum-midnight-front.jpg',
              sideImage: '/images/watches/aluminum-midnight-side.jpg',
              thumbnail: '/images/cases/aluminum-midnight-thumb.jpg'
            },
            {
              id: 'aluminum-starlight',
              name: 'Starlight',
              image: '/images/watches/aluminum-starlight-front.jpg',
              sideImage: '/images/watches/aluminum-starlight-side.jpg',
              thumbnail: '/images/cases/aluminum-starlight-thumb.jpg'
            },
            {
              id: 'aluminum-silver',
              name: 'Silver',
              image: '/images/watches/aluminum-silver-front.jpg',
              sideImage: '/images/watches/aluminum-silver-side.jpg',
              thumbnail: '/images/cases/aluminum-silver-thumb.jpg'
            }
          ]
        },
        {
          material: 'Stainless Steel',
          finishes: [
            {
              id: 'steel-graphite',
              name: 'Graphite',
              image: '/images/watches/steel-graphite-front.jpg',
              sideImage: '/images/watches/steel-graphite-side.jpg',
              thumbnail: '/images/cases/steel-graphite-thumb.jpg',
              priceAdd: 300
            }
          ]
        }
      ]
    }
  ],
  
  bands: {
    categories: [
      {
        id: 'sport-band',
        name: 'Sport Band',
        basePrice: 49,
        options: [
          {
            id: 'sport-midnight',
            name: 'Midnight',
            image: '/images/bands/sport-midnight-front.jpg',
            sideImage: '/images/bands/sport-midnight-side.jpg',
            thumbnail: '/images/bands/sport-midnight-thumb.jpg',
            colors: ['#1D1D1F']
          },
          {
            id: 'sport-storm-blue',
            name: 'Storm Blue',
            image: '/images/bands/sport-storm-blue-front.jpg',
            sideImage: '/images/bands/sport-storm-blue-side.jpg',
            thumbnail: '/images/bands/sport-storm-blue-thumb.jpg',
            colors: ['#2B4F82']
          }
        ]
      },
      {
        id: 'solo-loop',
        name: 'Solo Loop',
        basePrice: 49,
        options: [
          {
            id: 'solo-midnight',
            name: 'Midnight',
            image: '/images/bands/solo-midnight-front.jpg',
            sideImage: '/images/bands/solo-midnight-side.jpg',
            thumbnail: '/images/bands/solo-midnight-thumb.jpg',
            colors: ['#1D1D1F']
          }
        ]
      }
    ]
  },

  defaultOptions: {
    collection: 'series-10',
    size: '45mm',
    case: 'aluminum-midnight',
    band: 'sport-midnight'
  }
}; 