import { connection } from '../config/configDb.js';
import { Contract } from '../types/Contract.js';
import { AppError } from '../utils/AppError.js';

export class ContractModel {
  static async getAll(): Promise<Contract[]> {
    try {
      const { rows } = await connection.query(`
        SELECT id, id_info_contract, id_employee, num_contract, observation, path, created_at, updated_at
        FROM contract
      `);
      return rows;
    } catch (error: unknown) {
      console.error('Error al obtener todos los contratos:', error);
      throw error;
    }
  }
  
  static async getById(id: string): Promise<Contract> {
    try {
      const { rows } = await connection.query(
        `SELECT * FROM contract WHERE id = $1`,
        [id]
      );
      console.log('esta es la row',rows)
      if (rows.length === 0){
        throw new AppError(`
          EL contrato no existe`,
          'NOT_FOUND',
          400)
      };
      if(rows[0].asigned === true){
        throw new AppError(
          `No puedes firmar un contrato Mas de 1 vez`,
          'EXISTING_RESOURCE',
          400)
      }

      return rows[0];
    } catch (error: unknown) {
      if (error instanceof AppError) {
        console.error(`Error al obtener el empleado con id ${id}:`, error.message);
        throw new AppError(
          error.message,
          error.code,
        error.statusCode)
      } else {
        console.error(`Error desconocido al obtener el empleado con id ${id}`);
      }
      throw new Error(`No se pudo obtener el empleado con id ${id}`);
    }
  }

  static async create(contract: Contract): Promise<Contract> {
    const {
      id_info_contract,
      id_employee,
      num_contract,
      observation,
      path
    } = contract;

    try {
      const result = await connection.query(
        `
        INSERT INTO contract (
          id, id_info_contract, id_employee, num_contract, observation, path
        )
        VALUES (
          uuid_generate_v4(), $1, $2, $3, $4, $5
        )
        RETURNING *
        `,
        [id_info_contract, id_employee || null, num_contract, observation || null, path || null]
      );

      
      return result.rows[0];
    } catch (error: unknown) {
      console.error('Error al crear contrato:', error);
      throw error;
    }
  }

  static async ifExist(id: number): Promise<any> {
    try {
      const { rows } = await connection.query(
        'SELECT * FROM contract WHERE num_contract = $1',
        [id]
      );
  
      if (rows.length !== 0) {
        throw new AppError(
          `Ya existe un contrato con el número ${id}`,
          'ID_DUPLICATE',
          400
        );
      }
  
      return { message: 'No existe un contrato con este número, puedes continuar' };
    } catch (error: unknown) {
      if (error instanceof AppError) {
        throw error; // No hace falta recrear el error
      }
      throw new AppError('Error al verificar el contrato', 'CHECK_ERROR', 500);
    }
  }
  

  static async update(id: string, data: Partial<Contract>): Promise<Contract> {
    const {
      id_info_contract,
      id_employee,
      num_contract,
      observation,
      path
    } = data;

    try {
      const result = await connection.query(
        `
        UPDATE contract SET
          id_info_contract = COALESCE($1, id_info_contract),
          id_employee = COALESCE($2, id_employee),
          num_contract = COALESCE($3, num_contract),
          observation = COALESCE($4, observation),
          path = COALESCE($5, path),
          updated_at = CURRENT_TIMESTAMP
        WHERE id = $6
        RETURNING *
        `,
        [id_info_contract, id_employee, num_contract, observation, path, id]
      );

      if (result.rows.length === 0) throw new Error('Contract not found');

      return result.rows[0];
    } catch (error: unknown) {
      console.error(`Error al actualizar contrato con id ${id}:`, error);
      throw error;
    }
  }

  static async delete(id: string): Promise<boolean> {
    try {
      const {rowCount} = await connection.query(
        `DELETE FROM contract WHERE id = $1 RETURNING *`,
        [id]
      );
      return rowCount != null &&  rowCount > 0 ? true : false;
    } catch (error: unknown) {
      console.error(`Error al eliminar contrato con id ${id}:`, error);
      throw error;
    }
  }

  static async getByRadicado(numContract: string): Promise<any> {
    try {
      const { rows } = await connection.query(
        `
                        SELECT 
            -- Datos del contrato
            ic.id AS contract_id,
            ic.num_radicado,
            ic.total_payment,
            ic.porcentage_honorario,
            ic.created_at AS contract_created_at,
            ic.updated_at AS contract_updated_at,
            
            -- Datos del cliente (customer)
            c.id AS customer_id,
            c.name AS customer_name,
            c.document AS customer_document,
            c.type_of_doc AS customer_type_of_doc,
            c.phone AS customer_phone,
            c.email AS customer_email,
            
            -- Datos del demandado (accused)
            a.id AS accused_id,
            a.name AS accused_name,
            a.document AS accused_document,
            a.type_of_doc AS accused_type_of_doc,
            
            -- Tipo de pago
            tp.type_pay AS type_of_payment,
            
            -- Tipo de contrato
            ct.contract_type AS contract_type

        FROM 
            info_contract ic
        LEFT JOIN customer c ON ic.id_customer = c.id
        LEFT JOIN accused a ON ic.id_accused = a.id
        LEFT JOIN type_payment tp ON ic.id_type_pay = tp.type_pay
        LEFT JOIN contract_type ct ON ic.id_type_contract = ct.contract_type

        WHERE 
            ic.num_radicado = $1;
        `,
        [numContract]
      );

      if (rows.length === 0) {
        throw new AppError(
          `No se encontro nigun contrato con el id ${numContract}`,
        'ID_NOT_REGISTRED',
        400)
      }

      return rows[0];
    } catch (error: unknown) {
      if (error instanceof AppError) {
        throw new AppError(error.message,error.code,error.statusCode); // deja que el controlador lo maneje
    } else {
      throw new Error('Error desconocido al crear info_contract');
    }
    }
  }

  static async getByNumContract(numContract: string): Promise<any> {
    try {
      const { rows } = await connection.query(
        `
        SELECT 
          c.id AS contract_id,
          c.num_contract,
          c.observation,
          c.path,
          c.created_at AS contract_created,
          ic.num_radicado,
          ic.total_payment,
          ic.porcentage_honorario,
          ic.iva,
          ct.contract_type,
          tp.type_pay,
          cu.name AS customer_name,
          cu.document AS customer_document,
          cu.type_of_doc AS customer_doc_type,
          cu.phone AS customer_phone,
          cu.email AS customer_email,
          ac.name AS accused_name,
          ac.document AS accused_document,
          ac.type_of_doc AS accused_doc_type,
          e.name AS employee_name,
          e.document AS employee_document,
          e.phone AS employee_phone
        FROM contract c
        LEFT JOIN info_contract ic ON c.id_info_contract = ic.id
        LEFT JOIN customer cu ON ic.id_customer = cu.id
        LEFT JOIN accused ac ON ic.id_accused = ac.id
        LEFT JOIN employee e ON c.id_employee = e.id
        LEFT JOIN contract_type ct ON ic.id_type_contract = ct.id
        LEFT JOIN type_payment tp ON ic.id_type_pay = tp.id
        WHERE c.num_contract = $1
        `,
        [numContract]
      );

      if (rows.length === 0) {
        throw new AppError(
          `No se encontro nigun contrato con el id ${numContract}`,
        'ID_NOT_REGISTRED',
        400)
      }

      return rows[0];
    } catch (error: unknown) {
      if (error instanceof AppError) {
        throw new AppError(error.message,error.code,error.statusCode); // deja que el controlador lo maneje
    } else {
      throw new Error('Error desconocido al crear info_contract');
    }
    }
  }

  static async getByName(name: string): Promise<Contract> {
    try {
      const { rows } = await connection.query(
        `
        SELECT c.*
        FROM contract c
        LEFT JOIN info_contract ic ON c.id_info_contract = ic.id
        LEFT JOIN customer cu ON ic.id_customer = cu.id
        WHERE cu.name = $1
        `,
        [name]
      );

      if (rows.length === 0) {
        throw new Error(`No se encontró contrato para el cliente con nombre: ${name}`);
      }

      return rows[0];
    } catch (error: unknown) {
      console.error(`Error en getByName(${name}):`, error);
      throw error;
    }
  }

  static async countContracts():Promise<Contract>{
    try{
      const {rows} = await connection.query('select count(*) from contract')

      return rows[0]
    }catch(err){
      throw new Error('Ourrio un error en la los contratos')
    }
  }
  static async countContAsigned():Promise<Contract>{
      try{
        const {rows} = await connection.query(`
          SELECT COUNT(*) FILTER (WHERE asigned = true) as total_asigned ,
                COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '5 DAYS' ) 
                AS recentAsigned
          FROM contract; `)
        if(rows.length===0){
          throw new AppError('Sin registros contratos')
        }
        return rows[0]
      }catch (error: unknown) {
        if (error instanceof Error) {
          console.error(`Error al crear info_contract:`, error.message);
          throw new AppError(error.message,'UNKNOWN_ERROR',500); // deja que el controlador lo maneje
        } else {
          throw new Error('Error desconocido al crear info_contract');
        }
      }
  }

  static async countContWithoutAsigned():Promise<Contract>{
    try{
      const {rows} = await connection.query(`
         SELECT COUNT(*) FILTER (WHERE asigned = false) as total_asigned ,
               COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '5 DAYS' )
               AS recentAsigned
        FROM contract;`)
      if(rows.length===0){
        throw new AppError('Sin registros de contratos')
      }
      return rows[0]
    }catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error al crear info_contract:`, error.message);
        throw new AppError(error.message,'UNKNOWN_ERROR',500); 
      } else {
        throw new Error('Error desconocido al crear info_contract');
      }
    }
  }

  static async getNewsContracts():Promise<Contract>{
    try{
      const {rows} = await connection.query(`
          SELECT 
              COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '5 days') AS recent_count,
              COUNT(*) AS total_count
                FROM 
                  contract;;
        ;`)
      if(rows.length===0){
        throw new AppError('Sin registros de contratos')
      }
      return rows[0]
    }catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error al crear info_contract:`, error.message);
        throw new AppError(error.message,'UNKNOWN_ERROR',500); // deja que el controlador lo maneje
      } else {
        throw new Error('Error desconocido al crear info_contract');
      }
    }
  }

  static async getRecentContracts():Promise<Contract[]>{
    try{
      const {rows} = await connection.query(`
          SELECT 
            *, 
          CURRENT_DATE - DATE(created_at) AS dias_desde_creacion
            FROM 
            contract
            WHERE 
            created_at >= CURRENT_DATE - INTERVAL '5 days'
        ;`)
      if(rows.length===0){
        throw new AppError('Sin registros de contratos')
      }
      return rows
    }catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error al crear info_contract:`, error.message);
        throw new AppError(error.message,'UNKNOWN_ERROR',500); // deja que el controlador lo maneje
      } else {
        throw new Error('Error desconocido al crear info_contract');
      }
    }
  }

 static async getContractsByDateRange (startDate: string, endDate: string) {
  try{
    const query = `
    SELECT 
      c.id,
      c.num_contract,
      c.observation,
      c.asigned,
      c.path,
      c.created_at,
      ic.total_payment,
      ic.num_radicado,
      ic.porcentage_honorario,
      e.name as employee_name,
      cu.name as customer_name,
      tp.type_pay,
      ct.contract_type
    FROM contract c
    LEFT JOIN info_contract ic ON c.id_info_contract = ic.id
    LEFT JOIN employee e ON c.id_employee = e.id
    LEFT JOIN customer cu ON ic.id_customer = cu.id
    LEFT JOIN type_payment tp ON ic.id_type_pay = tp.type_pay
    LEFT JOIN contract_type ct ON ic.id_type_contract = ct.contract_type
    WHERE c.created_at BETWEEN $1 AND $2
    ORDER BY c.created_at DESC;
  `;

  const values = [startDate, endDate];
  const result = await connection.query(query, values);
  if(result.rows.length===0){
    throw new AppError(
      `No se encontro nigun registro de este recurso`,
    'ID_NOT_REGISTRED',
    400)
  }
  return result.rows;
  }catch(error:unknown){
    if (error instanceof AppError){
      throw new AppError(error.message,error.code,error.statusCode);
    }
  }
    
  }
}
