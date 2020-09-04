import IController from "../interfaces/controller.interface";

import express from 'express';

class DefaultController implements IController {
    public path = '/';
    public router = express.Router();

    constructor(){
        this.initializeRoutes();
    }

    /**
     * Initialize the routes used by this controller
     */
    public initializeRoutes() {
        this.router.get(this.path,this.get);
        this.router.post(this.path,this.post);
        this.router.put(this.path,this.put);
        this.router.delete(this.path, this.delete);

        
    }   

    private get (request: express.Request, response: express.Response) {
        response.send('GET operation')
    }

    private post (request: express.Request, response: express.Response) {
        response.send('POST operation');
    }

    private put (request: express.Request, response: express.Response) {
        response.send('PUT operation');
    }
    
    private delete (request: express.Request, response: express.Response) {
        response.send('DELETE operation');
    }
}

export default DefaultController;