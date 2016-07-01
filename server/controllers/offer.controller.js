import mock from '../mocks/offers.json';

export function getOffers(req, res) {
  res.json(mock);
}

export function getOffer(req, res) {
  const id = req.params.id;
  const offer = mock.find((o) => o.id === id);
  if (!offer) {
    return res.status(500).send();
  }

  return res.json(offer);
}
