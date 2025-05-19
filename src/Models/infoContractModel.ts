import { connection } from '@config/configDb';
import { InfoContract } from '@interfaces/infoContract';
import { AppError } from '@utils/appError';

export class InfoContractModel {
  static async getAllInfoContracts(): Promise<InfoContract[]> {
    try {
      const { rows } = await connection.query('SELECT * FROM info_contract');
      return rows;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error al obtener los contratos:", error.message);
      } else {
        console.error("Error desconocido al obtener los contratos.");
      }
      throw new Error('No se pudieron obtener los contratos');
    }
  }

  static async getInfoContractById(id: string): Promise<InfoContract | null> {
    try {
      const { rows } = await connection.query('SELECT * FROM info_contract WHERE id = $1', [id]);
      if((rows.length===0) ){
        throw new AppError(
          `No se encontro nigun registro de este recurso`,
        'ID_NOT_REGISTRED',
        400)
      }
      return rows[0] || null;
    } catch (error: unknown) {
      if (error instanceof AppError) {
        throw new AppError(
          error.message,
          error.code,
          error.statusCode)
      } else {
        console.error(`Error desconocido al obtener el contrato con id ${id}`);
      }
      throw new Error(`No se pudo obtener el contrato con id ${id}`);
    }
  }


static async createInfoContract(infoContract: InfoContract):Promise<InfoContract > {
  const {
    id_type_pay,
    id_type_contract,
    num_radicado,
    total_payment,
    porcentage_honorario,
    id_customer,
    id_accused,
  } = infoContract;

  try {
    const check = await connection.query(
      'SELECT 1 FROM info_contract WHERE num_radicado = $1',
      [num_radicado]
    );

    if ((check.rowCount ?? 0) > 0) {
      throw new AppError(
        `el Numero de radicado ${num_radicado} ya esta registrado`,
        'DUPLICATE_RADICADO'
        ,400)
    }

    const { rows } = await connection.query(
      `INSERT INTO info_contract (id_customer, id_accused, id_type_pay, id_type_contract, num_radicado, total_payment, porcentage_honorario)
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [id_customer, id_accused, id_type_pay, id_type_contract, num_radicado, total_payment, porcentage_honorario]
    );

    return rows[0];
  } catch (error: any) {
    if (error instanceof AppError) {
        throw new AppError(error.message,error.code,error.statusCode); // deja que el controlador lo maneje
    } else {
      throw new Error(error.message);
    }
  }
}



}
