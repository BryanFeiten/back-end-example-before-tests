import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
import { randomUUID } from "crypto";

@Entity()
export class Recados extends BaseEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    descricao: string;

    @Column()
    detalhes: string;

    constructor(descricao: string, detalhes: string) {
        super();
        this.descricao = descricao;
        this.detalhes = detalhes;
        this.id = randomUUID();
    }
}