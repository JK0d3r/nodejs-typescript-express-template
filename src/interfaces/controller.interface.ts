import {Router} from 'express';
interface IController {
    path: string;
    router: Router

    initializeRoutes(): void
}

export default IController;