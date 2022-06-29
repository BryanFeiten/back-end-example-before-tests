import { response } from "express";
import { RecadosRepository } from "../database/repositories/RecadosRepository";
import { RecadosDTO } from "../DTO/RecadosDTO";

export class RecadosService {
    async find() {
        const repository = new RecadosRepository();
        const recados = await repository.find()

        return recados
    }

    async findOne(id: number) {
        const repository = new RecadosRepository()
        const recados = await repository.findOne(id)

        return recados
    }

    async create(recadosDTO: RecadosDTO) {
        const repository = new RecadosRepository()
        const recados = await repository.create(recadosDTO)

        return {
            id: recados.id,
            descricao: recados.descricao,
            detalhes: recados.detalhes,
        }
    }

    async update(recadosDTO: RecadosDTO) {
        const repository = new RecadosRepository()
        const recados = await repository.update(recadosDTO)

        return {
            id: recados?.id,
            descricao: recados?.descricao,
            detalhes: recados?.detalhes,
        }
    }

    async delete(id: number) {
        const repository = new RecadosRepository()
        const recados = await repository.delete(id)

        return response.json({
            msg: 'Success',
        })
    }
}