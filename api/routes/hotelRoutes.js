import express from 'express';
import * as hotelController from '../controllers/hotelController.js';
import * as authController from '../controllers/authController.js';
const router = express.Router();

router
  .route('/')
  .get(hotelController.getHotels)
  .post(
    authController.protect,
    authController.restrictToAdmin,
    hotelController.createHotel
  );

router
  .route('/:id')
  .get(hotelController.getOneHotel)
  .patch(
    authController.protect,
    authController.restrictToAdmin,
    hotelController.updateHotel
  )
  .delete(
    authController.protect,
    authController.restrictToAdmin,
    hotelController.deleteHotel
  );

router.route('');
export default router;
