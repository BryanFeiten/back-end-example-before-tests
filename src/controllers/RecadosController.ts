import { RecadosService } from "../service/RecadosService";
import { Request, Response } from "express";

export default class RecadosController {
    async index(request: Request, response: Response) {
        const service = new RecadosService()
        const recados = await service.find()

        return response.json(recados.map(recado => {
            return {
                id: recado.id,
                description: recado.descricao,
                detalhes: recado.detalhes
            }
        })).status(200)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params
        const service = new RecadosService()
        const recados = await service.findOne(parseInt(id))

        return response.json({
            id: recados?.id,
            descricao: recados?.descricao?.toUpperCase(),
            detalhes: recados?.detalhes?.toUpperCase()
        }).status(200)
    }

    async store(request: Request, response: Response) {
        const { descricao, detalhes } = request.body

        const service = new RecadosService()

        const recados = service.create({
            descricao: descricao,
            detalhes: detalhes
        })

        return response.json({
            descricao: descricao,
            detalhes: detalhes
        })
    }

    async update(request: Request, response: Response) {
        const { id } = request.params
        const { descricao, detalhes } = request.body

        const service = new RecadosService()

        const recados = service.update({
            id: parseInt(id),
            descricao: descricao,
            detalhes: detalhes
        })

        return response.json(recados)
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params

        const service = new RecadosService()

        service.delete(parseInt(id))

        return response.status(204)
    }
}