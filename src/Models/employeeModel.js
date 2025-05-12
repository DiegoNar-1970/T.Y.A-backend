import { connection } from '../config/configDb.js';

export class EmployeeModel {
    static async getAll() {
        const result = await connection.query(`
            SELECT id, name, document, phone, created_at, updated_at
            FROM employee
        `);
        return result.rows;
    }

    static async create({ name, document, phone }) {
        const result = await connection.query(`
            INSERT INTO employee (name, document, phone)
            VALUES ($1, $2, $3)
            RETURNING *
        `, [name, document, phone]);
        return result.rows[0];
    }

    static async getById(id) {
        const result = await connection.query(`
            SELECT * FROM employee WHERE id = $1
        `, [id]);
        return result.rows[0];
    }
}
