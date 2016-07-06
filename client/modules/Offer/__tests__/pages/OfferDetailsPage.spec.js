import test from 'ava';
import { OfferDetailsPage } from '../../pages/OfferDetailsPage/OfferDetailsPage';
import sinon from 'sinon';

const offer = {
  "id": 0,
  "title": "Hotel The Mirage (Hotel & Casino)",
  "location": "Las Vegas, USA",
  "description": "Aéreo de várias cidades + Hotel em Vegas",
  "photos": [
    "images/photo6.jpg",
    "images/photo8.jpg",
    "images/photo7.jpg",
    "images/photo9.jpg",
    "images/photo11.jpg",
    "images/photo3.jpg",
    "images/photo2.jpg",
    "images/photo1.jpg"
  ],
  "options": [
    {
      "id": 2,
      "title": "Noites em Vegas e Albuquerque",
      "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
      "from": [
        "Brasilia",
        "Campo Grande"
      ],
      "daily": 5,
      "price": 2380
    },
    {
      "id": 0,
      "title": "Noites em Vegas e Albuquerque",
      "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
      "from": [
        "Manaus",
        "Belém"
      ],
      "daily": 5,
      "price": 2549
    },
    {
      "id": 1,
      "title": "Noites em Vegas e Albuquerque",
      "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
      "from": [
        "Rio de Janeiro"
      ],
      "daily": 5,
      "price": 2620
    },
    {
      "id": 3,
      "title": "Noites em Vegas e Albuquerque",
      "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
      "from": [
        "Manaus"
      ],
      "daily": 8,
      "price": 3549
    },
    {
      "id": 7,
      "title": "Noites em Vegas e Albuquerque",
      "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
      "from": [
        "Rio de Janeiro"
      ],
      "daily": 12,
      "price": 5120
    },
    {
      "id": 8,
      "title": "Noites em Vegas e Albuquerque",
      "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
      "from": [
        "Brasilia",
        "Salvador",
        "Campo Grande"
      ],
      "daily": 12,
      "price": 5380
    },
    {
      "id": 4,
      "title": "Noites em Vegas e Albuquerque",
      "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
      "from": [
        "Rio de Janeiro",
        "São Paulo"
      ],
      "daily": 8,
      "price": 3720
    },
    {
      "id": 5,
      "title": "Noites em Vegas e Albuquerque",
      "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
      "from": [
        "Brasilia"
      ],
      "daily": 8,
      "price": 3380
    },
    {
      "id": 6,
      "title": "Noites em Vegas e Albuquerque",
      "description": "Atenção, quarto duplo é necessário adquirir 2 pacotes",
      "from": [
        "Manaus",
        "Salvador",
        "Ilhéus",
        "Boa Vista",
        "Cuiabá"
      ],
      "daily": 12,
      "price": 5549
    }
  ]
}

const page = new OfferDetailsPage({
  visibility: {
    daily: {
      value: 5
    },
    origin: {
      value: 'Rio de Janeiro'
    },
  },
});

test('getOriginLocations should return unique items', t => {
  const locations = page.getOriginLocations(offer)
  t.deepEqual(locations, [
    'Brasilia',
    'Campo Grande',
    'Manaus',
    'Belém',
    'Rio de Janeiro',
    'Salvador',
    'São Paulo',
    'Ilhéus',
    'Boa Vista',
    'Cuiabá',
  ])
});

test('getAvailableDailies should return unique items', t => {
  const dailies = page.getAvailableDailies(offer);
  t.deepEqual(dailies, [5,8,12])
});

test('getVisibleOptions should return unique visibleOptions', t => {
  const visibleOptions = page.getVisibleOptions(offer);
  t.is(visibleOptions.length, 1);
});

test('getUniqueItems should return unique items', t => {
  const uniqueItems = page.getUniqueItems([1,1,2,2,3,3]);
  t.deepEqual(uniqueItems, [1,2,3]);
});

test('orderOptions should return an ordered list', t => {
  const orderedOptions = page.orderOptions(offer.options);
  t.is(orderedOptions[0].price, 2380);
  t.is(orderedOptions[1].price, 2549);
  t.is(orderedOptions[2].price, 2620);
  t.is(orderedOptions[3].price, 3380);
  t.is(orderedOptions[4].price, 3549);
  t.is(orderedOptions[5].price, 3720);
  t.is(orderedOptions[6].price, 5120);
  t.is(orderedOptions[7].price, 5380);
  t.is(orderedOptions[8].price, 5549);
});

test('reduceDailies should return a list of non-unique available dailies', t => {
  const dailies = page.reduceDailies(offer);
  t.deepEqual(dailies, [5,5,5,8,12,12,8,8,12]);
});

test('reduceOrigins should return a list of non-unique origins', t => {
  const origins = page.reduceOrigins(offer);
  t.deepEqual(origins, [
    'Brasilia',
    'Campo Grande',
    'Manaus',
    'Belém',
    'Rio de Janeiro',
    'Manaus',
    'Rio de Janeiro',
    'Brasilia',
    'Salvador',
    'Campo Grande',
    'Rio de Janeiro',
    'São Paulo',
    'Brasilia',
    'Manaus',
    'Salvador',
    'Ilhéus',
    'Boa Vista',
    'Cuiabá',
  ])
});

test('handleOriginSelect should dispatch an action', t => {
  const spy = sinon.spy();
  let page = new OfferDetailsPage({ dispatch: spy });
  page.handleOriginSelect('Rio de Janeiro');
  t.true(spy.called);
});

test('handleDailySelect should dispatch an action', t => {
  const spy = sinon.spy();
  let page = new OfferDetailsPage({ dispatch: spy });
  page.handleDailySelect('5');
  t.true(spy.called);
});

test('filterOptionsByDaily should return a filtered list', t => {
  const filteredList = page.filterOptionsByDaily(offer.options);
  t.is(filteredList.length, 3);
});
