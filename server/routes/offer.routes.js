import { Router } from 'express';
import * as OfferController from '../controllers/offer.controller';
const router = new Router();

// Get all Offers
router.route('/offers').get(OfferController.getOffers);

export default router;
