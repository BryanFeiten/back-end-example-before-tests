import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class recados1656473379347 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'recados',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    length: '255',
                    isPrimary: true,
                    isNullable: false,
                },
                {
                    name: 'descricao',
                    type: 'varchar',
                    length: '150',
                    isNullable: false,
                },
                {
                    name: 'detalhes',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('recados', true, true, true)
    }

}
