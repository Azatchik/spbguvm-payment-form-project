import Router from 'express';
import createOrderValidate from '../middlewares/createOrderValidate.js';
import paymentController from '../controllers/paymentController.js';

const paymentRouter = new Router();

paymentRouter.post(
    '/payment/create-order',
    createOrderValidate,
    paymentController.createOrder,
);

export default paymentRouter;
