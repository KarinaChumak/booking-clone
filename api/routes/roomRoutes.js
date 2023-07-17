import express from 'express';
import * as roomController from '../controllers/roomController.js';
import * as authController from '../controllers/authController.js';

const router = express.Router();

router.route('/').get(roomController.getRooms);
router.route('/:id').get(roomController.getRoom);

// Protected routes
router
  .route('/:hotelId')
  .post(
    authController.protect,
    authController.restrictToAdmin,
    roomController.createRoom
  );

export default router;
