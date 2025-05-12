import { connection } from '../config/configDb.js';

export class CustomerModel {
    static async getAll() {
        const result = await connection.query(`
            SELECT id, name, phone, email, document, type_of_doc 
            FROM customer
        `);
        return result.rows;
    }

    static async getByCc(cc) {
        const result = await connection.query(`
            SELECT * FROM customer WHERE document = $1
        `, [cc]);
        return result.rows[0];
    }

    static async getByName(name) {
        const result = await connection.query(`
            SELECT * FROM customer WHERE name = $1
        `, [name]);
        return result.rows[0];
    }

    static async create(customer) {
        const { name, document, email, phone, type_of_doc } = customer;

        const result = await connection.query(`
            INSERT INTO customer (name, document, email, phone, type_of_doc)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, name, phone, email, document, type_of_doc
        `, [name, document, email, phone, type_of_doc]);

        return result.rows[0];
    }

    static async updatePartialCustomer(data) {
        const keys = Object.keys(data).filter(k => k !== 'id');
        const values = keys.map(k => data[k]);

        const setClause = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');

        const query = `
            UPDATE customer
            SET ${setClause}
            WHERE id = $${keys.length + 1}
        `;

        const result = await connection.query(query, [...values, data.id]);
        return result.rowCount;
    }
}
