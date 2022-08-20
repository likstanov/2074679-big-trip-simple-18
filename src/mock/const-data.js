const EVENT_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];

const CITIES = [
  'New York',
  'Vancouver',
  'London',
  'Barcelona',
  'Paris',
  'Las Vegas',
  'San Francisco'
];

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget.',
  'Sollicitudin eget ante. Phasellus eros mauris.',
  'Condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus',
  'Purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus'
];

const OFFERS = [
  {
    type: 'taxi',
    offers: [
      {
        id: 1,
        title: 'Upgrade to a business class',
        price: 120
      },
      {
        id: 2,
        title: 'Switch to comfort',
        price: 300
      },
      {
        id: 3,
        title: 'Add Luggage',
        price: 200
      },
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: 1,
        title: 'Upgrade to a business class',
        price: 120
      },
      {
        id: 2,
        title: 'Switch to comfort',
        price: 300
      },
      {
        id: 3,
        title: 'Add Luggage',
        price: 200
      },
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: 1,
        title: 'Add meal',
        price: 150
      }
    ]
  },
  {
    type: 'ship',
    offers: [
      {
        id: 1,
        title: 'Add meal',
        price: 250
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: 1,
        title: 'Rent a car',
        price: 500
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 1,
        title: 'Choose seats',
        price: 10
      },
      {
        id: 2,
        title: 'Add meal',
        price: 250
      },
      {
        id: 3,
        title: 'Add Luggage',
        price: 200
      },
      {
        id: 4,
        title: 'Switch to comfort',
        price: 300
      }
    ],
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 1,
        title: 'Travel by train',
        price: 340
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: [
      {
        id: 1,
        title: 'Book tickets',
        price: 400
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 1,
        title: 'Book tickets',
        price: 200
      }
    ]
  }
];

const DESTINATION_PICTURES_AMOUNT = {
  min: 1,
  max: 7
};

const POINTS_AMOUNT = 10;


export { CITIES, DESCRIPTIONS, DESTINATION_PICTURES_AMOUNT, EVENT_TYPES, OFFERS, POINTS_AMOUNT };
