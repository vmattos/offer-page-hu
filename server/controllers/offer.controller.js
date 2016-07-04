import mock from '../mocks/offers.json';

export function getOffers(req, res) {
  res.json(mock);
}

export function getOffer(req, res) {
  const id = parseInt(req.params.id, 10);
  const offer = mock.find((o) => o.id === id);
  if (!offer) {
    const errorMsg = `Offer with id ${id} not found`;
    return res.status(500).send({ error: errorMsg });
  }

  return res.json(offer);
}
