import { createConnection, Entity, PrimaryGeneratedColumn, Column, getConnection } from 'typeorm';
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;
}
export async function bootstrap() {
    const connection = await createConnection({
        type: 'postgres',
        host: '193.112.55.191',
        database: 'wechat',
        username: 'magnus',
        password: 'magnus',
        port: 5432,
        entities: [User]
    });
    const user = connection.getRepository(User);
    const qb = user.createQueryBuilder(`user`).select().where({
        id: 1
    });
    const sql = qb.getSql();
    console.log({
        sql
    })
    debugger;
}

bootstrap();
