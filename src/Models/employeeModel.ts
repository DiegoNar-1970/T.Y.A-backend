import { connection } from '../config/configDb.js';
import { Employee } from '../types/Employee';
import { AppError } from '../utils/AppError.js';

export class EmployeeModel {
  // Obtener todos los empleados
  static async getAllEmployees (): Promise<Employee[]> {
    try {
      const { rows } = await connection.query('SELECT * FROM employee');
      return rows;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error al obtener empleados:", error.message);
      } else {
        console.error("Error desconocido al obtener empleados.");
      }
      throw new Error('No se pudieron obtener los empleados');
    }
  }

  // Obtener un empleado por su ID
  static async getEmployeeById (id: string): Promise<Employee | null> {
    try {
      const { rows } = await connection.query('SELECT * FROM employee WHERE id = $1', [id]);
      if(rows.length===0){
        throw new AppError(
          `No se encontro el empleado`,
        'ID_NOT_REGISTRED',
        400)
      }
      return rows[0] ;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error al obtener el empleado con id ${id}:`, error.message);
        throw new AppError(
          error.message,
        'UNKNOWN_ERROR',
        500)
      } else {
        console.error(`Error desconocido al obtener el empleado con id ${id}`);
      }
      throw new Error(`No se pudo obtener el empleado con id ${id}`);
    }
  }

  // Crear un nuevo empleado
  static async createEmployee (name: string, document: string, phone?: string): Promise<Employee> {
    try {
      const thereIsEmployee= await connection.query('SELECT * FROM employee WHERE document = $1', [document]);

      if(thereIsEmployee.rows.length > 0){
        throw new AppError(
          `Este empleado ya existe`,
          'ID_FOUND',
          404)
      }
      const { rows } = await connection.query(
        'INSERT INTO employee (name, document, phone) VALUES ($1, $2, $3) RETURNING *',
        [name, document, phone]
      );
      return rows[0];
    } catch (error: unknown) {
      if (error instanceof AppError) {
        throw error;
      } else if (error instanceof Error) {
        throw new AppError(
          ` ${error.message}`,
          'UKNOWN_ERROR',
          500
        );
      } else {
        throw new AppError(
          'Ocurrió un error desconocido al actualizar el empleado',
          'UNKNOWN_ERROR',
          500
        );
      }
    }
  }

  static async updateEmployee(
    id: string,
    name?: string,
    document?: string,
    phone?: string
  ): Promise<Employee> {
    try {
      const query = `
        UPDATE employee
        SET name = COALESCE($1, name),
            document = COALESCE($2, document),
            phone = COALESCE($3, phone),
            updated_at = CURRENT_TIMESTAMP
        WHERE id = $4
        RETURNING *;
      `;
  
      const { rows } = await connection.query(query, [name, document, phone, id]);
  
      if (rows.length === 0) {
        throw new AppError(
          `No se encontró ningún empleado para actualizar`,
          'ID_NOT_FOUND',
          404
        );
      }
  
      return rows[0];
    } catch (error: unknown) {
      if (error instanceof AppError) {
        throw error;
      } else if (error instanceof Error) {
        throw new AppError(
          `Error al actualizar el empleado: ${error.message}`,
          'UPDATE_EMPLOYEE_ERROR',
          500
        );
      } else {
        throw new AppError(
          'Ocurrió un error desconocido al actualizar el empleado',
          'UNKNOWN_ERROR',
          500
        );
      }
    }
  }

  // Eliminar un empleado
  static async deleteEmployee(id: string): Promise<boolean> {
    try {
      const { rowCount } = await connection.query(
        'DELETE FROM employee WHERE id = $1 RETURNING *',
        [id]
      );
  
      if (!rowCount || rowCount === 0) {
        throw new AppError(
          `No se encontró ningún empleado`,
          'ID_NOT_FOUND',
          404
        );
      }
  
      return true;
    } catch (error: unknown) {
      if (error instanceof AppError) {
        throw error; // Ya es un AppError, solo lo relanzamos
      } else if (error instanceof Error) {
        throw new AppError(
          error.message,
          'DELETE_EMPLOYEE_ERROR',
          500
        );
      } else {
        throw new AppError(
          'Ocurrió un error desconocido al eliminar el empleado',
          'UNKNOWN_ERROR',
          500
        );
      }
    }
  }

  static async getByDocument(document:Number):Promise<Employee>{
    try{
        
        const {rows} = await connection.query(
          `select * from employee where document = $1`,[document]
        )
        if(rows.length===0){
          throw new AppError(
            `No se encontro un empleado con la cedula ${document}`,
            'ID_NOT_REGISTRED',
            400)
        }
        return rows[0];
    }catch(error : unknown){
      if(error instanceof AppError){
        throw new AppError(
          error.message,
          error.code,
          error.statusCode)
        // unknown es un tipo por lo que no se puede instanciar
      }else if (error instanceof Error) {
        // Aquí sí puedes acceder a error.message
        throw new Error(error.message);
      } else {
        // Si no sabes qué es, lanza un error genérico
        throw new Error("Unknown error occurred");
      }
    }
  }
}
