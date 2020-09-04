import App from './app';
import DefaultController from './controllers/default.controller';

const app = new App([
    new DefaultController
], 5001, true);

app.listen();