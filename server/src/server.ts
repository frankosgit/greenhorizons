import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';
import { urlencoded } from 'body-parser';
import productRoutes from './routes/Product';
import contactRoutes from './routes/Contact';

const router = express();


mongoose.connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        console.log('Connected to MongoDB');
        StartServer();
    })
    .catch((err) => {
        console.error(err);
    }
    );

const StartServer = () => {
    router.use((req, res, next) => {
        console.log(`incoming request: method: [${req.method}  url: ${req.url}  IP: ${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            console.log(`incoming request: method:[${req.method}  url: ${req.url}  IP: ${req.socket.remoteAddress}
            status: ${res.statusCode}]`);

        });
        next();
    })
    router.use(urlencoded({ extended: true }));
    router.use(express.json());


    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            return res.status(200).json({});
        }
        next();
    })

    /*routes*/
    router.use('/products', productRoutes);
    router.use('/contact', contactRoutes);


    /*healthcheck*/
    router.get('/ping', (req, res, next) => res.status(200).json({ message: 'pong' }));

    /*error handling*/
    router.use((req, res, next) => {    
        const error = new Error('Not found');
        return res.status(404).json({ message: error.message });
    });

    http.createServer(router).listen(config.server.port, () => {
        console.log(`Server is running on port ${config.server.port}`);
    });

};

