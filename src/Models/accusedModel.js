import { connection } from '../config/configDb.js';

export class AccusedModel {
    static async getAll() {
        const result = await connection.query(`
            SELECT id, name, document, type_of_doc, created_at, updated_at
            FROM accused
        `);
        return result.rows;
    }

    static async getById(id) {
        const result = await connection.query(`
            SELECT * FROM accused WHERE id = $1
        `, [id]);
        return result.rows[0];
    }

    static async create({ name, document, type_of_doc }) {
        const result = await connection.query(`
            INSERT INTO accused (name, document, type_of_doc)
            VALUES ($1, $2, $3)
            RETURNING *
        `, [name, document, type_of_doc]);
        return result.rows[0];
    }
}
