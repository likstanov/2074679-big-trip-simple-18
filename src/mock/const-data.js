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
        'id': 1,
        'title': 'Upgrade to a business class',
        'price': 190
      },
      {
        'id': 2,
        'title': 'Choose the radio station',
        'price': 30
      },
      {
        'id': 3,
        'title': 'Choose temperature',
        'price': 170
      },
      {
        'id': 4,
        'title': 'Drive quickly, I\'m in a hurry',
        'price': 100
      },
      {
        'id': 5,
        'title': 'Drive slowly',
        'price': 110
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        'id': 1,
        'title': 'Infotainment system',
        'price': 50
      },
      {
        'id': 2,
        'title': 'Order meal',
        'price': 100
      },
      {
        'id': 3,
        'title': 'Choose seats',
        'price': 190
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        'id': 1,
        'title': 'Book a taxi at the arrival point',
        'price': 110
      },
      {
        'id': 2,
        'title': 'Order a breakfast',
        'price': 80
      },
      {
        'id': 3,
        'title': 'Wake up at a certain time',
        'price': 140
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        'id': 1,
        'title': 'Choose meal',
        'price': 120
      },
      {
        'id': 2,
        'title': 'Choose seats',
        'price': 90
      },
      {
        'id': 3,
        'title': 'Upgrade to comfort class',
        'price': 120
      },
      {
        'id': 4,
        'title': 'Upgrade to business class',
        'price': 120
      },
      {
        'id': 5,
        'title': 'Add luggage',
        'price': 170
      },
      {
        'id': 6,
        'title': 'Business lounge',
        'price': 160
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        'id': 1,
        'title': 'Choose the time of check-in',
        'price': 70
      },
      {
        'id': 2,
        'title': 'Choose the time of check-out',
        'price': 190
      },
      {
        'id': 3,
        'title': 'Add breakfast',
        'price': 110
      },
      {
        'id': 4,
        'title': 'Laundry',
        'price': 140
      },
      {
        'id': 5,
        'title': 'Order a meal from the restaurant',
        'price': 30
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: []
  },
  {
    type: 'ship',
    offers: [
      {
        'id': 1,
        'title': 'Choose meal',
        'price': 130
      },
      {
        'id': 2,
        'title': 'Choose seats',
        'price': 160
      },
      {
        'id': 3,
        'title': 'Upgrade to comfort class',
        'price': 170
      },
      {
        'id': 4,
        'title': 'Upgrade to business class',
        'price': 150
      },
      {
        'id': 5,
        'title': 'Add luggage',
        'price': 100
      },
      {
        'id': 6,
        'title': 'Business lounge',
        'price': 40
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        'id': 1,
        'title': 'With automatic transmission',
        'price': 110
      },
      {
        'id': 2,
        'title': 'With air conditioning',
        'price': 180
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        'id': 1,
        'title': 'Choose live music',
        'price': 150
      },
      {
        'id': 2,
        'title': 'Choose VIP area',
        'price': 70
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
