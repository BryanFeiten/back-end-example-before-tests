import { NextFunction, Request, Response } from "express";
import Application from "../app";
import { HttpBadRequestCode, HttpNotFound } from "../constants/http";
import { invalidField } from "../constants/messages";
import { HttpError } from "../errors/httpErrors";
import { RecadosService } from "../service/RecadosService";

export const recadosMiddlewares = (request: Request, response: Response, next: NextFunction) => {
    const { descricao, detalhes } = request.body;
    
    if (!descricao || !detalhes || descricao.length < 3 || descricao.length > 255 || detalhes.length < 3 || detalhes.length > 255) {
        throw new HttpError(invalidField('Nome'), HttpBadRequestCode);
    }
    
    next();
}