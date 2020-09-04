import express from 'express';
import IController from './interfaces/controller.interface';
import bodyParser from 'body-parser';

class App {
    public app: express.Application;
    public port: number;
    public devMode: boolean;

    constructor(controllers: IController[], port: number, devMode = false) {
        this.app = express();
        this.port = port;
        this.devMode = devMode

        this.initializeMiddleware();
        this.initializeControllers(controllers);
    }

    /**
     * Initialize all the Middleware that the app will use
     */
    private initializeMiddleware(){
        if(this.devMode) {
            this.app.use(this.loggerMiddleware);
        }

        this.app.use(bodyParser.json())
    }

    /**
     * Initialize all controllers 
     * @param controllers array of IController
     */
    private initializeControllers(controllers: IController[]) {
        controllers.forEach((controller)=> {
            this.app.use('/',controller.router);
        });
    } 

    public listen() {
        this.app.listen(this.port)
    }

    /**
     * A simple logger middleware, for development purpose
     * @param request 
     * @param response 
     * @param next 
     */
    loggerMiddleware(request: express.Request, response: express.Response, next: any) {
        console.log(`${request.method} ${request.path}`);
        next();
    }
}

export default App;
