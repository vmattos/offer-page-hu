import mock from '../mocks/offers.json';

export function getOffers(req, res) {
  res.json(mock);
}
