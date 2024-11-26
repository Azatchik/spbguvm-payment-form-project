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
