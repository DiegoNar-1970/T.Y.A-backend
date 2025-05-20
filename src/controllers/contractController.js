import { ContractModel } from '../models/contractModel.js';
import { ContractService } from '../services/contractService.js';
import { CustomerService } from '../services/customerService.js';
import { AppError } from '../utils/appError.js';

export class ContractController {
  static async getAll(req, res) {
    const contracts = await ContractService.getAll();
    res.json(contracts);
  }

  static async create(req, res) {
    const data = req.body;
    const contract = await ContractService.create(data);
    res.status(201).json(contract);
  }

  static async getByRadicado(req, res) {
    const { contract } = req.params;
    const result = await ContractService.getByRadicado(contract);
    res.status(200).json(result);
  }

  static async getGeneralInfo(req, res) {
    const countContAsigned = await ContractService.countContAsigned();
    const countContWithoutAsigned = await ContractService.countContWithoutAsigned();
    const newsContracts = await ContractService.getNewsContracts();
    const getRecentContracts = await ContractService.getRecentContracts();
    const countCustomer = await CustomerService.countCustomer();

    res.status(200).json({
      countContAsigned,
      countContWithoutAsigned,
      countCustomer,
      newsContracts,
      getRecentContracts
    });
  }

  static async getContractsByDates(req, res) {
    const { start_date, end_date } = req.query;

    if (!start_date || !end_date) {
      throw new AppError(
        "Error del Navegador, El archivo no se cargó correctamente",
        'NO_CHARGE_RESOURCE',
        400
      );
    }

    try {
      const contracts = await ContractModel.getContractsByDateRange(start_date, end_date);
      res.json(contracts);
    } catch (error) {
      const status = error instanceof AppError ? error.statusCode : 500;
      const code = error instanceof AppError ? error.code : 'INTERNAL_ERROR';
      const message = error instanceof AppError ? error.message : 'Error interno al verificar contrato';
      res.status(status).json({
        error: {
          message,
          code,
          statusCode: status
        }
      });
    }
  }

  static async getContract(req, res) {
    const data = req.body;
    const contract = await ContractService.create(data);
    res.status(201).json(contract);
  }

  static async getAnyContract(req, res) {
    try {
      let contrato;
      let contractData;
      const { num_radicado, num_contract } = req.body;

      if (!num_radicado && !num_contract) {
        throw new AppError(
          'Información insuficiente',
          'BAD_REQUEST',
          400
        );
      }

      if (num_radicado) {
        contrato = num_radicado;
        contractData = await ContractModel.getByRadicado(contrato);
      } else {
        contrato = num_contract;
        contractData = await ContractModel.getByNumContract(contrato);
      }

      res.status(200).json(contractData);

    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ message: error.message });
      } else if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Error desconocido en getByRadicado' });
      }
    }
  }
}
