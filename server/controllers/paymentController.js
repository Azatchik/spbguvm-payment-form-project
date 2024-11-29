import * as uuid from 'uuid';
import axios from 'axios';
import config from '../config.js';
import { decryptData } from '../services/decryptData.js';

class paymentController {
    async createOrder(req, res) {
        try {
            const {
                namePay, fullName, phone, email, description, sum,
            } = req.body;

            const data = {
                userName: decryptData(config.userName),
                password: decryptData(config.password),
                orderNumber: uuid.v4(),
                amount: Number(sum) * 100,
                returnUrl: 'https://spbguvm.ru/',
                description: `${namePay} ${fullName} ${description}`,
                phone,
                email,
                orderBundle: {
                    ffdVersion: '1.2',
                    receiptType: 'sell',
                    company: {
                        email: 'secretary@spbguvm.ru',
                        sno: 'osn',
                        inn: '7810232965',
                        paymentAddress: 'https://spbguvm.ru',
                    },
                    payments: [
                        {
                            type: 1,
                            sum: Number(sum) * 100,
                        },
                    ],
                    total: Number(sum) * 100,
                    cartItems: {
                        items: [
                            {
                                positionId: '1',
                                itemCode: namePay,
                                name: description,
                                quantity: {
                                    value: 1,
                                    measure: '255',
                                },
                                itemPrice: Number(sum) * 100,
                                itemAmount: Number(sum) * 100,
                                paymentMethod: 'full_payment',
                                paymentObject: '13',
                                tax: {
                                    taxType: 0,
                                },
                            },
                        ],
                    },
                },
            };

            const response = await axios.post(
                config.urlPayment,
                data,
            );

            return res.status(response.status).json(response.data);
        } catch (e) {
            return res.status(500).json({ message: e });
        }
    }
}

export default new paymentController();
