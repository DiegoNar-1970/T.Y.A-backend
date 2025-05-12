import { connection } from '../config/configDb.js';

export class ContractTypeModel {
    static async getAll() {
        const result = await connection.query(`
            SELECT id, contract_type, created_at, updated_at
            FROM contract_type
        `);
        return result.rows;
    }

    static async create({ contract_type }) {
        const result = await connection.query(`
            INSERT INTO contract_type (contract_type)
            VALUES ($1)
            RETURNING *
        `, [contract_type]);
        return result.rows[0];
    }
}
