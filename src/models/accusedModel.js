import { connection } from '../config/configDb.js';
import { AppError } from '../utils/appError.js';

export class AccusedModel {
    
  static async getAll() {
    try {
      const { rows } = await connection.query(`
        SELECT id, name, document, type_of_doc 
        FROM accused
      `);
      return rows;
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error in getAll:', error.message);
        throw new Error('Failed to get accused: ' + error.message);
      }
      console.error('Unknown error occurred in getAll');
      throw new Error('Unknown error occurred in getAll');
    }
  }

  static async getByCc(cc) {
    try {
      const { rows } = await connection.query(`
        SELECT * FROM accused WHERE document = $1
      `, [cc]);
      return rows[0];
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error in getByCc:', error.message);
        throw new Error('Failed to get accused by CC: ' + error.message);
      }
      console.error('Unknown error occurred in getByCc');
      throw new Error('Unknown error occurred in getByCc');
    }
  }

  static async findByCcAndCreate(a) {
    try {
      const { rows } = await connection.query(`
        SELECT * FROM accused WHERE document = $1
      `, [a.document]);

      if (rows.length === 0) {
        const insertResult = await connection.query(`
          INSERT INTO accused (name, document, type_of_doc) 
          VALUES ($1, $2, $3) RETURNING *
        `, [a.name, a.document, a.type_of_doc]);
        return insertResult.rows[0].id;
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
      throw new Error('Unknown error occurred in findByCcAndCreate');
    }
  }

  static async create(accused) {
    try {
      const { rows } = await connection.query(`
        INSERT INTO accused (name, document, type_of_doc) 
        VALUES ($1, $2, $3) RETURNING *
      `, [accused.name, accused.document, accused.type_of_doc]);
      return rows[0];
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error in create:', error.message);
        throw new Error('Failed to create accused: ' + error.message);
      }
      console.error('Unknown error occurred in create');
      throw new Error('Unknown error occurred in create');
    }
  }
}
