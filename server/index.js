import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import * as fs from 'fs';
import * as https from 'https';
import * as path from 'path';
import rateLimit from 'express-rate-limit';
import paymentRouter from './routes/paymentRouter.js';
import config from './config.js';

const options = {
    key: fs.readFileSync(path.resolve('key.pem')),
    cert: fs.readFileSync(path.resolve('cert.pem')),
};

const limiter = rateLimit({
    windowMs: 2 * 60 * 1000, // 15min
    max: 5,
});

const rootCa = fs.readFileSync(path.resolve('certificates', 'russian_trusted_root_ca.cer'));
const issuingCert = fs.readFileSync(path.resolve('certificates', 'russian_trusted_sub_ca.cer'));
https.globalAgent.options.ca = [rootCa, issuingCert];

dotenv.config();

const PORT = 5000;
const app = express();
const corsOptions = {
    origin: config.ALLOWEDIPs,
    optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use('/api', limiter, paymentRouter);

const startApp = async () => {
    try {
        const httpsServer = https.createServer(options, app);
        httpsServer.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

startApp();
