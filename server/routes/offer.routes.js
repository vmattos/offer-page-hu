import { Router } from 'express';
import * as OfferController from '../controllers/offer.controller';
const router = new Router();

// Get all Offers
router.route('/offers').get(OfferController.getOffers);

// Get single Offer
router.route('/offers/:id').get(OfferController.getOffer);

export default router;
