
import { connection } from '../config/configDb.js';
import { AppError } from '../utils/appError.js';

export class CustomerModel {
    static async getAll() {
        try {
            const { rows } = await connection.query(`
                SELECT id, name, phone, email, document, type_of_doc 
                FROM customer
            `);
            return rows;
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error in getAll:', error.message);
                throw new Error('Failed to get customers: ' + error.message);
            }
            console.error('Unknown error occurred in getAll');
            throw new Error('Unknown error occurred in getAll');
        }
    }

    static async getByCc(cc) {
        try {
            const { rows } = await connection.query(`
                SELECT * FROM customer WHERE document = $1
            `, [cc]);

            if (rows.length === 0) return null;
            return rows;
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error in getByCc:', error.message);
                throw new Error('Failed to get customer by CC: ' + error.message);
            }
            console.error('Unknown error occurred in getByCc');
            throw new Error('Unknown error occurred in getByCc');
        }
    }

    static async findByCcAndCreate(customer) {
        const id = customer.document;
        try {
            // se consulta si existe el cliente en la base de datos
            const { rows } = await connection.query(`
                SELECT * FROM customer WHERE document = $1
            `, [customer.document]);
            
            // si no existe se crea y se devuelve
            if (rows.length === 0) {
                const response = await connection.query(`
                    INSERT INTO customer (name, document, email, phone, type_of_doc)
                    VALUES ($1, $2, $3, $4, $5) RETURNING id
                `, [customer.name, customer.document, customer.email, null, customer.type_of_doc ? customer.type_of_doc : null]);

                return response.rows[0].id;
            }
            return rows[0].id;
        } catch (error) {
            if (error instanceof Error) {
                throw new AppError(
                    error.message,
                    'UNKNOWN_ERROR',
                    500
                );
            }
            throw new Error('Unknown error occurred in getByCc');
        }
    }

    static async create(customer) {
        try {
            const { name, document, email, phone, type_of_doc } = customer;

            const result = await connection.query(`
                INSERT INTO customer (name, document, email, phone, type_of_doc)
                VALUES ($1, $2, $3, $4, $5)
                RETURNING id, name, phone, email, document, type_of_doc
            `, [name, document, email, phone, type_of_doc]);

            return result.rows[0];
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error in create:', error.message);
                throw new Error('Failed to create customer: ' + error.message);
            }
            console.error('Unknown error occurred in create');
            throw new Error('Unknown error occurred in create');
        }
    }

    static async updatePartialCustomer(data) {
        try {
            const keys = Object.keys(data).filter(k => k !== 'id');
            const values = keys.map(k => data[k]);

            const setClause = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');

            const query = `
                UPDATE customer
                SET ${setClause}
                WHERE id = $${keys.length + 1}
                RETURNING *
            `;

            const result = await connection.query(query, [...values, data.id]);
            return result.rows[0];
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error in updatePartialCustomer:', error.message);
                throw new Error('Failed to update customer: ' + error.message);
            }
            console.error('Unknown error occurred in updatePartialCustomer');
            throw new Error('Unknown error occurred in updatePartialCustomer');
        }
    }

    static async getByName(name) {
        const result = await connection.query(`
            SELECT * FROM customer WHERE name = $1
        `, [name]);
        return result.rows[0];
    }

    static async countCustomer() {
        try {
            const {rows} = await connection.query(`
                SELECT COUNT(*) AS count_customer,
                   COUNT(*) FILTER(WHERE created_at >= NOW() - INTERVAL '5 DAYS' ) AS news_customers
                FROM customer;`);

            return rows[0];
        } catch(error) {
            if (error instanceof Error) {
                throw new AppError(
                    error.message,
                    'UNKNOWN_ERROR',
                    500
                );
            } else {
                throw new Error('Error desconocido al crear info_contract');
            }
        }
    }
}