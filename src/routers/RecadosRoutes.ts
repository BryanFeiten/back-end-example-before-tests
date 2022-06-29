import { Router } from "express";
import RecadosController from "../controllers/RecadosController";
import { recadosMiddlewares } from "../middlewares/RecadosMiddlewares";

export default class RecadosRoutes {
    init() {
        const routes = Router()
        const controller = new RecadosController()

        routes.get('/recados', controller.index)
        routes.get('/recados/:id', controller.show)
        routes.post('/recados', [recadosMiddlewares], controller.store)
        routes.put('/recados/:id', controller.update)
        routes.delete('/recados/:id', controller.delete)

        return routes
    }
}