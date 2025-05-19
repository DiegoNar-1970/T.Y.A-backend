import {
  ENV_KEY,
  ENV_SECRET,
  fromEnv
} from "./chunk-YWYIJ4RQ.js";
import {
  loadRestXmlErrorCode,
  parseXmlBody,
  parseXmlErrorBody
} from "./chunk-VT64U2ZN.js";
import {
  AwsSdkSigV4ASigner,
  AwsSdkSigV4Signer,
  DEFAULT_RETRY_MODE,
  DefaultIdentityProviderConfig,
  EndpointCache,
  Hash,
  NODE_APP_ID_CONFIG_OPTIONS,
  NODE_AUTH_SCHEME_PREFERENCE_OPTIONS,
  NODE_MAX_ATTEMPT_CONFIG_OPTIONS,
  NODE_REGION_CONFIG_FILE_OPTIONS,
  NODE_REGION_CONFIG_OPTIONS,
  NODE_RETRY_MODE_CONFIG_OPTIONS,
  NODE_SIGV4A_CONFIG_OPTIONS,
  NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS,
  NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS,
  SelectorType,
  SignatureV4,
  awsEndpointFunctions,
  booleanSelector,
  calculateBodyLength,
  createDefaultUserAgentProvider,
  customEndpointFunctions,
  emitWarningIfUnsupportedVersion,
  getAwsRegionExtensionConfiguration,
  getContentLengthPlugin,
  getEndpointPlugin,
  getHostHeaderPlugin,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
  getLoggerPlugin,
  getRecursionDetectionPlugin,
  getRetryPlugin,
  getSerdePlugin,
  getSmithyContext,
  getUserAgentPlugin,
  httpSigningMiddlewareOptions,
  normalizeProvider,
  resolveAwsRegionExtensionConfiguration,
  resolveAwsSdkSigV4AConfig,
  resolveAwsSdkSigV4Config,
  resolveDefaultsModeConfig,
  resolveEndpoint,
  resolveEndpointConfig,
  resolveHostHeaderConfig,
  resolveParams,
  resolveRegionConfig,
  resolveRetryConfig,
  resolveUserAgentConfig,
  setFeature,
  signatureV4aContainer
} from "./chunk-IYWYPSGW.js";
import {
  loadConfig,
  parseUrl
} from "./chunk-YX4F6RCL.js";
import {
  Client,
  Command,
  HttpRequest,
  HttpResponse,
  NoOpLogger,
  NodeHttpHandler,
  SENSITIVE_STRING,
  ServiceException,
  collectBody,
  createBufferedReadable,
  createChecksumStream,
  dateToUtcString,
  decorateServiceException,
  emitWarningIfUnsupportedVersion as emitWarningIfUnsupportedVersion2,
  expectNonNull,
  expectObject,
  expectString,
  fromBase64,
  fromHex,
  fromUtf8,
  getAwsChunkedEncodingStream,
  getDefaultExtensionConfiguration,
  getHttpHandlerExtensionConfiguration,
  headStream,
  isArrayBuffer,
  isSerializableHeaderValue,
  loadConfigsForDefaultMode,
  map,
  parseBoolean,
  parseRfc3339DateTimeWithOffset,
  parseRfc7231DateTime,
  requestBuilder,
  resolveDefaultRuntimeConfig,
  resolveHttpHandlerRuntimeConfig,
  sdkStreamMixin,
  serializeDateTime,
  splitStream,
  streamCollector,
  strictParseInt32,
  strictParseLong,
  toBase64,
  toHex,
  toUint8Array,
  toUtf8,
  withBaseException
} from "./chunk-B3USY3U4.js";
import {
  ENV_PROFILE
} from "./chunk-EFYDL4GE.js";
import "./chunk-F46LCO2K.js";
import "./chunk-RBR43L2I.js";
import {
  CredentialsProviderError,
  chain,
  memoize
} from "./chunk-MKX3OHL3.js";

// src/app.ts
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv2 from "dotenv";
import express2 from "express";

// src/routes/acussedRouter.ts
import { Router } from "express";

// src/config/configDb.ts
import dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config();
var connection = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME
});

// src/utils/appError.ts
var AppError = class extends Error {
  code;
  statusCode;
  constructor(message, code = "APP_ERROR", statusCode = 500) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
};

// src/models/accusedModel.ts
var AccusedModel = class {
  static async getAll() {
    try {
      const { rows } = await connection.query(`
                SELECT id, name, document, type_of_doc 
                FROM accused
            `);
      return rows;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error in getAll:", error.message);
        throw new Error("Failed to get accused: " + error.message);
      }
      console.error("Unknown error occurred in getAll");
      throw new Error("Unknown error occurred in getAll");
    }
  }
  static async getByCc(cc2) {
    try {
      const { rows } = await connection.query(`
                SELECT * FROM accused WHERE document = $1`, [cc2]);
      return rows[0];
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error in getByCc:", error.message);
        throw new Error("Failed to get accused by CC: " + error.message);
      }
      console.error("Unknown error occurred in getByCc");
      throw new Error("Unknown error occurred in getByCc");
    }
  }
  static async findByCcAndCreate(a2) {
    try {
      const { rows } = await connection.query(`
                SELECT * FROM accused WHERE document = $1`, [a2.document]);
      if (rows.length === 0) {
        const { rows: rows2 } = await connection.query(`
                    INSERT INTO accused (name, document, type_of_doc) VALUES ($1, $2, $3) RETURNING *`, [a2.name, a2.document, a2.type_of_doc]);
        return rows2[0].id;
      }
      return rows[0].id;
    } catch (error) {
      if (error instanceof Error) {
        throw new AppError(
          error.message,
          "UNKNOWN_ERROR",
          500
        );
      }
      throw new Error("Unknown error occurred in getByCc");
    }
  }
  static async create(accused) {
    try {
      const { rows } = await connection.query(`
                INSERT INTO accused (name, document, type_of_doc) VALUES ($1, $2, $3) RETURNING *
            `, [accused.name, accused.document, accused.type_of_doc]);
      return rows[0];
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error in create:", error.message);
        throw new Error("Failed to create accused: " + error.message);
      }
      console.error("Unknown error occurred in create");
      throw new Error("Unknown error occurred in create");
    }
  }
};

// src/services/accusedService.ts
var AccusedService = class {
  static async getAllAccused() {
    try {
      return await AccusedModel.getAll();
    } catch (error) {
      console.error("Service Error in getAllAccused:", error);
      throw error;
    }
  }
  static async getAccusedByCc(cc2) {
    try {
      return await AccusedModel.getByCc(cc2);
    } catch (error) {
      console.error("Service Error in getAccusedByCc:", error);
      throw error;
    }
  }
  static async createAccused(accused) {
    try {
      return await AccusedModel.create(accused);
    } catch (error) {
      console.error("Service Error in createAccused:", error);
      throw error;
    }
  }
};

// src/controllers/accusedController.ts
var AccusedController = class {
  static async getAllAccused(req, res) {
    const accused = await AccusedService.getAllAccused();
    res.status(200).json(accused);
  }
  static async getAccusedByCc(req, res) {
    const cc2 = req.params.cc;
    const accused = await AccusedService.getAccusedByCc(cc2);
    if (accused) res.status(200).json(accused);
    else res.status(404).json({ message: "Accused not found" });
  }
  static async createAccused(req, res) {
    const accused = req.body;
    const result = await AccusedService.createAccused(accused);
    res.status(201).json(result);
  }
};

// src/routes/acussedRouter.ts
var accusedRouter = Router();
accusedRouter.get("/", AccusedController.getAllAccused);
accusedRouter.get("/:cc", AccusedController.getAccusedByCc);
accusedRouter.post("/", AccusedController.createAccused);

// src/routes/contractRouter.ts
import { Router as Router2 } from "express";

// src/models/contractModel.ts
var ContractModel = class {
  static async getAll() {
    try {
      const { rows } = await connection.query(`
          SELECT id, id_info_contract, id_employee, num_contract, observation, path, created_at, updated_at
          FROM contract
        `);
      return rows;
    } catch (error) {
      console.error("Error al obtener todos los contratos:", error);
      throw error;
    }
  }
  static async getById(id) {
    try {
      const { rows } = await connection.query(
        `SELECT * FROM contract WHERE id = $1`,
        [id]
      );
      if (rows.length === 0) {
        throw new AppError(
          `
            EL contrato no existe`,
          "NOT_FOUND",
          400
        );
      }
      ;
      if (rows[0].asigned === true) {
        throw new AppError(
          `No puedes firmar un contrato Mas de 1 vez`,
          "EXISTING_RESOURCE",
          400
        );
      }
      return rows[0];
    } catch (error) {
      if (error instanceof AppError) {
        console.error(`Error al obtener el empleado con id ${id}:`, error.message);
        throw new AppError(
          error.message,
          error.code,
          error.statusCode
        );
      } else {
        console.error(`Error desconocido al obtener el empleado con id ${id}`);
      }
      throw new Error(`No se pudo obtener el empleado con id ${id}`);
    }
  }
  static async create(contract) {
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
    } catch (error) {
      console.error("Error al crear contrato:", error);
      throw error;
    }
  }
  static async ifExist(id) {
    try {
      const { rows } = await connection.query(
        "SELECT * FROM contract WHERE num_contract = $1",
        [id]
      );
      if (rows.length !== 0) {
        throw new AppError(
          `Ya existe un contrato con el n\xFAmero ${id}`,
          "ID_DUPLICATE",
          400
        );
      }
      return { message: "No existe un contrato con este n\xFAmero, puedes continuar" };
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError("Error al verificar el contrato", "CHECK_ERROR", 500);
    }
  }
  static async update(id, data) {
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
      if (result.rows.length === 0) throw new Error("Contract not found");
      return result.rows[0];
    } catch (error) {
      console.error(`Error al actualizar contrato con id ${id}:`, error);
      throw error;
    }
  }
  static async delete(id) {
    try {
      const { rowCount } = await connection.query(
        `DELETE FROM contract WHERE id = $1 RETURNING *`,
        [id]
      );
      return rowCount != null && rowCount > 0 ? true : false;
    } catch (error) {
      console.error(`Error al eliminar contrato con id ${id}:`, error);
      throw error;
    }
  }
  static async getByRadicado(radicado) {
    try {
      const { rows } = await connection.query(
        `
            SELECT 
                  co.id AS contract_id,
                  co.num_contract,
                  co.observation AS contract_observation,
                  co.asigned AS contract_asigned,
                  co.path AS contract_path,
                  co.created_at AS contract_created_at,
                  co.updated_at AS contract_updated_at,
                  
                  ic.id AS info_contract_id,
                  ic.num_radicado,
                  ic.total_payment,
                  ic.created_at AS info_contract_created_at,
                  ic.updated_at AS info_contract_updated_at,
                  
                  e.id AS employee_id,
                  e.name AS employee_name,
                  e.document AS employee_document,
                  e.phone AS employee_phone,
                  
                  c.id AS customer_id,
                  c.name AS customer_name,
                  c.document AS customer_document,
                  c.type_of_doc AS customer_type_of_doc,
                  c.phone AS customer_phone,
                  c.email AS customer_email,
                  
                  a.id AS accused_id,
                  a.name AS accused_name,
                  a.document AS accused_document,
                  a.type_of_doc AS accused_type_of_doc,
                  
                  tp.type_pay AS type_of_payment,
                  ct.contract_type AS contract_type
                  
              FROM info_contract ic
              JOIN contract co ON co.id_info_contract = ic.id
              LEFT JOIN employee e ON co.id_employee = e.id
              LEFT JOIN customer c ON ic.id_customer = c.id
              LEFT JOIN accused a ON ic.id_accused = a.id
              LEFT JOIN type_payment tp ON ic.id_type_pay = tp.type_pay
              LEFT JOIN contract_type ct ON ic.id_type_contract = ct.contract_type
              WHERE ic.num_radicado = $1
              `,
        [radicado]
      );
      if (rows.length === 0) {
        throw new AppError(
          `No se encontro nigun contrato con el id ${radicado}`,
          "ID_NOT_REGISTRED",
          400
        );
      }
      return rows[0];
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(error.message, error.code, error.statusCode);
      } else if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Error desconocido en getByRadicado");
      }
    }
  }
  static async getByNumContract(numContract) {
    try {
      const { rows } = await connection.query(
        `
        SELECT 
                  c.id AS contract_id,
                  c.num_contract,
                  c.observation AS contract_observation,
                  c.asigned,
                  c.path AS contract_path,
                  c.created_at AS contract_created_at,
                  c.updated_at AS contract_updated_at,
                  
                  ic.id AS info_contract_id,
                  ic.num_radicado,
                  ic.total_payment,
                  ic.created_at AS info_contract_created_at,
                  ic.updated_at AS info_contract_updated_at,
                  
                  e.id AS employee_id,
                  e.name AS employee_name,
                  e.document AS employee_document,
                  e.phone AS employee_phone,
                  
                  cu.id AS customer_id,
                  cu.name AS customer_name,
                  cu.document AS customer_document,
                  cu.type_of_doc AS customer_doc_type,
                  cu.phone AS customer_phone,
                  cu.email AS customer_email,
                  
                  ac.id AS accused_id,
                  ac.name AS accused_name,
                  ac.document AS accused_document,
                  ac.type_of_doc AS accused_doc_type,
                  
                  ct.contract_type,
                  tp.type_pay
                  
              FROM contract c
              JOIN info_contract ic ON c.id_info_contract = ic.id
              JOIN employee e ON c.id_employee = e.id
              JOIN customer cu ON ic.id_customer = cu.id
              JOIN accused ac ON ic.id_accused = ac.id
              LEFT JOIN contract_type ct ON ic.id_type_contract = ct.contract_type
              LEFT JOIN type_payment tp ON ic.id_type_pay = tp.type_pay
              WHERE c.num_contract = $1
              `,
        [numContract]
      );
      if (rows.length === 0) {
        throw new AppError(
          `No se encontro nigun contrato con el id ${numContract}`,
          "ID_NOT_REGISTRED",
          400
        );
      }
      return rows[0];
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(error.message, error.code, error.statusCode);
      } else if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Error desconocido en getByRadicado");
      }
    }
  }
  static async getByName(name) {
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
        throw new Error(`No se encontr\xF3 contrato para el cliente con nombre: ${name}`);
      }
      return rows[0];
    } catch (error) {
      console.error(`Error en getByName(${name}):`, error);
      throw error;
    }
  }
  static async countContracts() {
    try {
      const { rows } = await connection.query("select count(*) from contract");
      return rows[0];
    } catch (err) {
      throw new Error("Ourrio un error en la los contratos");
    }
  }
  static async countContAsigned() {
    try {
      const { rows } = await connection.query(`
            SELECT COUNT(*) FILTER (WHERE asigned = true) as total_asigned ,
                  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '5 DAYS' ) 
                  AS recentAsigned
            FROM contract; `);
      if (rows.length === 0) {
        throw new AppError("Sin registros contratos");
      }
      return rows[0];
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al crear info_contract:`, error.message);
        throw new AppError(error.message, "UNKNOWN_ERROR", 500);
      } else {
        throw new Error("Error desconocido al crear info_contract");
      }
    }
  }
  static async countContWithoutAsigned() {
    try {
      const { rows } = await connection.query(`
          SELECT COUNT(*) FILTER (WHERE asigned = false) as total_asigned ,
                COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '5 DAYS' )
                AS recentAsigned
          FROM contract;`);
      if (rows.length === 0) {
        throw new AppError("Sin registros de contratos");
      }
      return rows[0];
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al crear info_contract:`, error.message);
        throw new AppError(error.message, "UNKNOWN_ERROR", 500);
      } else {
        throw new Error("Error desconocido al crear info_contract");
      }
    }
  }
  static async getNewsContracts() {
    try {
      const { rows } = await connection.query(`
            SELECT 
                COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '5 days') AS recent_count,
                COUNT(*) AS total_count
                  FROM 
                    contract;;
          ;`);
      if (rows.length === 0) {
        throw new AppError("Sin registros de contratos");
      }
      return rows[0];
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al crear info_contract:`, error.message);
        throw new AppError(error.message, "UNKNOWN_ERROR", 500);
      } else {
        throw new Error("Error desconocido al crear info_contract");
      }
    }
  }
  static async getRecentContracts() {
    try {
      const { rows } = await connection.query(`
            SELECT 
              *, 
            CURRENT_DATE - DATE(created_at) AS dias_desde_creacion
              FROM 
              contract
              WHERE 
              created_at >= CURRENT_DATE - INTERVAL '5 days'
          ;`);
      if (rows.length === 0) {
        throw new AppError("Sin registros de contratos");
      }
      return rows;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al crear info_contract:`, error.message);
        throw new AppError(error.message, "UNKNOWN_ERROR", 500);
      } else {
        throw new Error("Error desconocido al crear info_contract");
      }
    }
  }
  static async getContractsByDateRange(startDate, endDate) {
    try {
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
      if (result.rows.length === 0) {
        throw new AppError(
          `No se encontro nigun registro de este recurso`,
          "ID_NOT_REGISTRED",
          400
        );
      }
      return result.rows;
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(error.message, error.code, error.statusCode);
      }
    }
  }
};

// src/services/contractService.ts
var ContractService = class {
  static async getAll() {
    return await ContractModel.getAll();
  }
  static async create(contract) {
    return await ContractModel.create(contract);
  }
  static async getByRadicado(numContract) {
    return await ContractModel.getByRadicado(numContract);
  }
  static async getByName(name) {
    return await ContractModel.getByName(name);
  }
  static async countContWithoutAsigned() {
    try {
      return await ContractModel.countContWithoutAsigned();
    } catch (error) {
      if (error instanceof Error) {
        throw new AppError(error.message, "UKNOWN_ERROR", 500);
      }
      throw new Error("Unknown error occurred in updatePartialCustomer");
    }
  }
  static async countContAsigned() {
    try {
      const response = await ContractModel.countContAsigned();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al crear info_contract:`, error.message);
        throw new AppError(error.message, "UNKNOWN_ERROR", 500);
      } else {
        throw new Error("Error desconocido al crear info_contract");
      }
    }
  }
  static async getNewsContracts() {
    try {
      const response = await ContractModel.getNewsContracts();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al crear info_contract:`, error.message);
        throw new AppError(error.message, "UNKNOWN_ERROR", 500);
      } else {
        throw new Error("Error desconocido al crear info_contract");
      }
    }
  }
  static async getRecentContracts() {
    try {
      const response = await ContractModel.getRecentContracts();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al crear info_contract:`, error.message);
        throw new AppError(error.message, "UNKNOWN_ERROR", 500);
      } else {
        throw new Error("Error desconocido al crear info_contract");
      }
    }
  }
};

// src/models/customerModel.ts
var CustomerModel = class {
  static async getAll() {
    try {
      const { rows } = await connection.query(`
                SELECT id, name, phone, email, document, type_of_doc 
                FROM customer
            `);
      return rows;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error in getAll:", error.message);
        throw new Error("Failed to get customers: " + error.message);
      }
      console.error("Unknown error occurred in getAll");
      throw new Error("Unknown error occurred in getAll");
    }
  }
  static async getByCc(cc2) {
    try {
      const { rows } = await connection.query(`
                SELECT * FROM customer WHERE document = $1
            `, [cc2]);
      if (rows.length === 0) return null;
      return rows;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error in getByCc:", error.message);
        throw new Error("Failed to get customer by CC: " + error.message);
      }
      console.error("Unknown error occurred in getByCc");
      throw new Error("Unknown error occurred in getByCc");
    }
  }
  static async findByCcAndCreate(customer) {
    const id = customer.document;
    try {
      const { rows } = await connection.query(`
                SELECT * FROM customer WHERE document = $1
            `, [customer.document]);
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
          "UNKNOWN_ERROR",
          500
        );
      }
      throw new Error("Unknown error occurred in getByCc");
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
        console.error("Error in create:", error.message);
        throw new Error("Failed to create customer: " + error.message);
      }
      console.error("Unknown error occurred in create");
      throw new Error("Unknown error occurred in create");
    }
  }
  static async updatePartialCustomer(data) {
    try {
      const keys = Object.keys(data).filter((k2) => k2 !== "id");
      const values = keys.map((k2) => data[k2]);
      const setClause = keys.map((key, index) => `${key} = $${index + 1}`).join(", ");
      const query = `
                UPDATE customer
                SET ${setClause}
                WHERE id = $${keys.length + 1}
            `;
      const result = await connection.query(query, [...values, data.id]);
      return result.rows[0];
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error in updatePartialCustomer:", error.message);
        throw new Error("Failed to update customer: " + error.message);
      }
      console.error("Unknown error occurred in updatePartialCustomer");
      throw new Error("Unknown error occurred in updatePartialCustomer");
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
      const { rows } = await connection.query(`
                SELECT COUNT(*) AS count_customer,
                   COUNT(*) FILTER(WHERE created_at >= NOW() - INTERVAL '5 DAYS' ) AS news_customers
                FROM customer;`);
      return rows[0];
    } catch (error) {
      if (error instanceof Error) {
        throw new AppError(
          error.message,
          "UNKNOWN_ERROR",
          500
        );
      } else {
        throw new Error("Error desconocido al crear info_contract");
      }
    }
  }
};

// src/services/customerService.ts
var CustomerService = class {
  static async getAll() {
    try {
      return await CustomerModel.getAll();
    } catch (err) {
      console.error("Error in customerService.getAll:", err);
      throw err;
    }
  }
  static async getByCc(cc2) {
    try {
      return await CustomerModel.getByCc(cc2);
    } catch (err) {
      console.error("Error in customerService.getByCc:", err);
      throw err;
    }
  }
  static async create(data) {
    try {
      return await CustomerModel.create(data);
    } catch (err) {
      console.error("Error in customerService.create:", err);
      throw err;
    }
  }
  static async getByName(name) {
    try {
      return await CustomerModel.getByName(name);
    } catch (error) {
      if (error instanceof Error) {
        throw new AppError(error.message, "UKNOWN_ERROR", 500);
      }
      throw new Error("Unknown error occurred in updatePartialCustomer");
    }
  }
  static async countCustomer() {
    try {
      return await CustomerModel.countCustomer();
    } catch (error) {
      if (error instanceof Error) {
        throw new AppError(error.message, "UKNOWN_ERROR", 500);
      }
      throw new Error("Unknown error occurred in updatePartialCustomer");
    }
  }
  // static async updatePartialCustomer(id: number, data: Partial<Customer>): Promise<Customer> {
  //   return await CustomerModel.updatePartialCustomer(id, data);
  // }
};

// src/controllers/contractController.ts
var ContractController = class {
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
        "Error del Navegador, El archivo no se cargo correctamente",
        "NO_CHARGE _RESOURCE",
        400
      );
    }
    try {
      const contracts = await ContractModel.getContractsByDateRange(start_date, end_date);
      res.json(contracts);
    } catch (error) {
      const status = error instanceof AppError ? error.statusCode : 500;
      const code = error instanceof AppError ? error.code : "INTERNAL_ERROR";
      const message = error instanceof AppError ? error.message : "Error interno al verificar contrato";
      res.status(status).json({
        error: {
          message,
          code,
          statusCode: status
        }
      });
      return;
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
          "Informaciono insuficiente",
          "BAD_REQUEST",
          400
        );
      }
      if (num_radicado) {
        contrato = num_radicado;
        const contracts = await ContractModel.getByRadicado(contrato);
        contractData = contracts;
      } else {
        contrato = num_contract;
        const contracts = await ContractModel.getByNumContract(contrato);
        contractData = contracts;
      }
      res.status(200).json(contractData);
      return;
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ message: error.message });
        return;
      } else if (error instanceof Error) {
        res.json({ message: error.message });
        return;
      } else {
        throw new Error("Error desconocido en getByRadicado");
      }
    }
  }
};

// src/routes/contractRouter.ts
var contractRouter = Router2();
contractRouter.get("/", ContractController.getAll);
contractRouter.post("/", ContractController.create);
contractRouter.get("/contracts-by-date", ContractController.getContractsByDates);
contractRouter.get("/get-general-info", ContractController.getGeneralInfo);
contractRouter.post("/get-any-contract", ContractController.getAnyContract);
contractRouter.get("/:contract", ContractController.getByRadicado);

// src/routes/controlFileRouter.ts
import { Router as Router3 } from "express";

// node_modules/@aws-sdk/middleware-expect-continue/dist-es/index.js
function addExpectContinueMiddleware(options) {
  return (next) => async (args) => {
    const { request } = args;
    if (HttpRequest.isInstance(request) && request.body && options.runtime === "node") {
      if (options.requestHandler?.constructor?.name !== "FetchHttpHandler") {
        request.headers = {
          ...request.headers,
          Expect: "100-continue"
        };
      }
    }
    return next({
      ...args,
      request
    });
  };
}
var addExpectContinueMiddlewareOptions = {
  step: "build",
  tags: ["SET_EXPECT_HEADER", "EXPECT_HEADER"],
  name: "addExpectContinueMiddleware",
  override: true
};
var getAddExpectContinuePlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(addExpectContinueMiddleware(options), addExpectContinueMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/constants.js
var RequestChecksumCalculation = {
  WHEN_SUPPORTED: "WHEN_SUPPORTED",
  WHEN_REQUIRED: "WHEN_REQUIRED"
};
var DEFAULT_REQUEST_CHECKSUM_CALCULATION = RequestChecksumCalculation.WHEN_SUPPORTED;
var ResponseChecksumValidation = {
  WHEN_SUPPORTED: "WHEN_SUPPORTED",
  WHEN_REQUIRED: "WHEN_REQUIRED"
};
var DEFAULT_RESPONSE_CHECKSUM_VALIDATION = RequestChecksumCalculation.WHEN_SUPPORTED;
var ChecksumAlgorithm;
(function(ChecksumAlgorithm2) {
  ChecksumAlgorithm2["MD5"] = "MD5";
  ChecksumAlgorithm2["CRC32"] = "CRC32";
  ChecksumAlgorithm2["CRC32C"] = "CRC32C";
  ChecksumAlgorithm2["CRC64NVME"] = "CRC64NVME";
  ChecksumAlgorithm2["SHA1"] = "SHA1";
  ChecksumAlgorithm2["SHA256"] = "SHA256";
})(ChecksumAlgorithm || (ChecksumAlgorithm = {}));
var ChecksumLocation;
(function(ChecksumLocation2) {
  ChecksumLocation2["HEADER"] = "header";
  ChecksumLocation2["TRAILER"] = "trailer";
})(ChecksumLocation || (ChecksumLocation = {}));
var DEFAULT_CHECKSUM_ALGORITHM = ChecksumAlgorithm.CRC32;

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/stringUnionSelector.js
var SelectorType2;
(function(SelectorType3) {
  SelectorType3["ENV"] = "env";
  SelectorType3["CONFIG"] = "shared config entry";
})(SelectorType2 || (SelectorType2 = {}));
var stringUnionSelector = (obj, key, union, type) => {
  if (!(key in obj))
    return void 0;
  const value = obj[key].toUpperCase();
  if (!Object.values(union).includes(value)) {
    throw new TypeError(`Cannot load ${type} '${key}'. Expected one of ${Object.values(union)}, got '${obj[key]}'.`);
  }
  return value;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/NODE_REQUEST_CHECKSUM_CALCULATION_CONFIG_OPTIONS.js
var ENV_REQUEST_CHECKSUM_CALCULATION = "AWS_REQUEST_CHECKSUM_CALCULATION";
var CONFIG_REQUEST_CHECKSUM_CALCULATION = "request_checksum_calculation";
var NODE_REQUEST_CHECKSUM_CALCULATION_CONFIG_OPTIONS = {
  environmentVariableSelector: (env) => stringUnionSelector(env, ENV_REQUEST_CHECKSUM_CALCULATION, RequestChecksumCalculation, SelectorType2.ENV),
  configFileSelector: (profile) => stringUnionSelector(profile, CONFIG_REQUEST_CHECKSUM_CALCULATION, RequestChecksumCalculation, SelectorType2.CONFIG),
  default: DEFAULT_REQUEST_CHECKSUM_CALCULATION
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/NODE_RESPONSE_CHECKSUM_VALIDATION_CONFIG_OPTIONS.js
var ENV_RESPONSE_CHECKSUM_VALIDATION = "AWS_RESPONSE_CHECKSUM_VALIDATION";
var CONFIG_RESPONSE_CHECKSUM_VALIDATION = "response_checksum_validation";
var NODE_RESPONSE_CHECKSUM_VALIDATION_CONFIG_OPTIONS = {
  environmentVariableSelector: (env) => stringUnionSelector(env, ENV_RESPONSE_CHECKSUM_VALIDATION, ResponseChecksumValidation, SelectorType2.ENV),
  configFileSelector: (profile) => stringUnionSelector(profile, CONFIG_RESPONSE_CHECKSUM_VALIDATION, ResponseChecksumValidation, SelectorType2.CONFIG),
  default: DEFAULT_RESPONSE_CHECKSUM_VALIDATION
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/crc64-nvme-crt-container.js
var crc64NvmeCrtContainer = {
  CrtCrc64Nvme: null
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/types.js
var CLIENT_SUPPORTED_ALGORITHMS = [
  ChecksumAlgorithm.CRC32,
  ChecksumAlgorithm.CRC32C,
  ChecksumAlgorithm.CRC64NVME,
  ChecksumAlgorithm.SHA1,
  ChecksumAlgorithm.SHA256
];
var PRIORITY_ORDER_ALGORITHMS = [
  ChecksumAlgorithm.SHA256,
  ChecksumAlgorithm.SHA1,
  ChecksumAlgorithm.CRC32,
  ChecksumAlgorithm.CRC32C,
  ChecksumAlgorithm.CRC64NVME
];

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumAlgorithmForRequest.js
var getChecksumAlgorithmForRequest = (input, { requestChecksumRequired, requestAlgorithmMember, requestChecksumCalculation }) => {
  if (!requestAlgorithmMember) {
    return requestChecksumCalculation === RequestChecksumCalculation.WHEN_SUPPORTED || requestChecksumRequired ? DEFAULT_CHECKSUM_ALGORITHM : void 0;
  }
  if (!input[requestAlgorithmMember]) {
    return void 0;
  }
  const checksumAlgorithm = input[requestAlgorithmMember];
  if (!CLIENT_SUPPORTED_ALGORITHMS.includes(checksumAlgorithm)) {
    throw new Error(`The checksum algorithm "${checksumAlgorithm}" is not supported by the client. Select one of ${CLIENT_SUPPORTED_ALGORITHMS}.`);
  }
  return checksumAlgorithm;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumLocationName.js
var getChecksumLocationName = (algorithm) => algorithm === ChecksumAlgorithm.MD5 ? "content-md5" : `x-amz-checksum-${algorithm.toLowerCase()}`;

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/hasHeader.js
var hasHeader = (header, headers) => {
  const soughtHeader = header.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (soughtHeader === headerName.toLowerCase()) {
      return true;
    }
  }
  return false;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/hasHeaderWithPrefix.js
var hasHeaderWithPrefix = (headerPrefix, headers) => {
  const soughtHeaderPrefix = headerPrefix.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (headerName.toLowerCase().startsWith(soughtHeaderPrefix)) {
      return true;
    }
  }
  return false;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/isStreaming.js
var isStreaming = (body) => body !== void 0 && typeof body !== "string" && !ArrayBuffer.isView(body) && !isArrayBuffer(body);

// node_modules/tslib/tslib.es6.mjs
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t2[0] & 1) throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2 = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g2.next = verb(0), g2["throw"] = verb(1), g2["return"] = verb(2), typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2) throw new TypeError("Generator is already executing.");
    while (g2 && (g2 = 0, op[0] && (_ = 0)), _) try {
      if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done) return t2;
      if (y2 = 0, t2) op = [op[0] & 2, t2.value];
      switch (op[0]) {
        case 0:
        case 1:
          t2 = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y2 = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t2[1]) {
            _.label = t2[1];
            t2 = op;
            break;
          }
          if (t2 && _.label < t2[2]) {
            _.label = t2[2];
            _.ops.push(op);
            break;
          }
          if (t2[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e2) {
      op = [6, e2];
      y2 = 0;
    } finally {
      f2 = t2 = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o2) {
  var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i2 = 0;
  if (m2) return m2.call(o2);
  if (o2 && typeof o2.length === "number") return {
    next: function() {
      if (o2 && i2 >= o2.length) o2 = void 0;
      return { value: o2 && o2[i2++], done: !o2 };
    }
  };
  throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

// node_modules/@aws-crypto/util/node_modules/@smithy/util-buffer-from/dist-es/index.js
import { Buffer as Buffer2 } from "buffer";
var fromString = (input, encoding) => {
  if (typeof input !== "string") {
    throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
  }
  return encoding ? Buffer2.from(input, encoding) : Buffer2.from(input);
};

// node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/fromUtf8.js
var fromUtf82 = (input) => {
  const buf = fromString(input, "utf8");
  return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};

// node_modules/@aws-crypto/util/build/module/convertToBuffer.js
var fromUtf83 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
  return Buffer.from(input, "utf8");
} : fromUtf82;
function convertToBuffer(data) {
  if (data instanceof Uint8Array)
    return data;
  if (typeof data === "string") {
    return fromUtf83(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  return new Uint8Array(data);
}

// node_modules/@aws-crypto/util/build/module/isEmptyData.js
function isEmptyData(data) {
  if (typeof data === "string") {
    return data.length === 0;
  }
  return data.byteLength === 0;
}

// node_modules/@aws-crypto/util/build/module/numToUint8.js
function numToUint8(num) {
  return new Uint8Array([
    (num & 4278190080) >> 24,
    (num & 16711680) >> 16,
    (num & 65280) >> 8,
    num & 255
  ]);
}

// node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js
function uint32ArrayFrom(a_lookUpTable2) {
  if (!Uint32Array.from) {
    var return_array = new Uint32Array(a_lookUpTable2.length);
    var a_index = 0;
    while (a_index < a_lookUpTable2.length) {
      return_array[a_index] = a_lookUpTable2[a_index];
      a_index += 1;
    }
    return return_array;
  }
  return Uint32Array.from(a_lookUpTable2);
}

// node_modules/@aws-crypto/crc32c/build/module/aws_crc32c.js
var AwsCrc32c = (
  /** @class */
  function() {
    function AwsCrc32c2() {
      this.crc32c = new Crc32c();
    }
    AwsCrc32c2.prototype.update = function(toHash) {
      if (isEmptyData(toHash))
        return;
      this.crc32c.update(convertToBuffer(toHash));
    };
    AwsCrc32c2.prototype.digest = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, numToUint8(this.crc32c.digest())];
        });
      });
    };
    AwsCrc32c2.prototype.reset = function() {
      this.crc32c = new Crc32c();
    };
    return AwsCrc32c2;
  }()
);

// node_modules/@aws-crypto/crc32c/build/module/index.js
var Crc32c = (
  /** @class */
  function() {
    function Crc32c2() {
      this.checksum = 4294967295;
    }
    Crc32c2.prototype.update = function(data) {
      var e_1, _a;
      try {
        for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
          var byte = data_1_1.value;
          this.checksum = this.checksum >>> 8 ^ lookupTable[(this.checksum ^ byte) & 255];
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return this;
    };
    Crc32c2.prototype.digest = function() {
      return (this.checksum ^ 4294967295) >>> 0;
    };
    return Crc32c2;
  }()
);
var a_lookupTable = [
  0,
  4067132163,
  3778769143,
  324072436,
  3348797215,
  904991772,
  648144872,
  3570033899,
  2329499855,
  2024987596,
  1809983544,
  2575936315,
  1296289744,
  3207089363,
  2893594407,
  1578318884,
  274646895,
  3795141740,
  4049975192,
  51262619,
  3619967088,
  632279923,
  922689671,
  3298075524,
  2592579488,
  1760304291,
  2075979607,
  2312596564,
  1562183871,
  2943781820,
  3156637768,
  1313733451,
  549293790,
  3537243613,
  3246849577,
  871202090,
  3878099393,
  357341890,
  102525238,
  4101499445,
  2858735121,
  1477399826,
  1264559846,
  3107202533,
  1845379342,
  2677391885,
  2361733625,
  2125378298,
  820201905,
  3263744690,
  3520608582,
  598981189,
  4151959214,
  85089709,
  373468761,
  3827903834,
  3124367742,
  1213305469,
  1526817161,
  2842354314,
  2107672161,
  2412447074,
  2627466902,
  1861252501,
  1098587580,
  3004210879,
  2688576843,
  1378610760,
  2262928035,
  1955203488,
  1742404180,
  2511436119,
  3416409459,
  969524848,
  714683780,
  3639785095,
  205050476,
  4266873199,
  3976438427,
  526918040,
  1361435347,
  2739821008,
  2954799652,
  1114974503,
  2529119692,
  1691668175,
  2005155131,
  2247081528,
  3690758684,
  697762079,
  986182379,
  3366744552,
  476452099,
  3993867776,
  4250756596,
  255256311,
  1640403810,
  2477592673,
  2164122517,
  1922457750,
  2791048317,
  1412925310,
  1197962378,
  3037525897,
  3944729517,
  427051182,
  170179418,
  4165941337,
  746937522,
  3740196785,
  3451792453,
  1070968646,
  1905808397,
  2213795598,
  2426610938,
  1657317369,
  3053634322,
  1147748369,
  1463399397,
  2773627110,
  4215344322,
  153784257,
  444234805,
  3893493558,
  1021025245,
  3467647198,
  3722505002,
  797665321,
  2197175160,
  1889384571,
  1674398607,
  2443626636,
  1164749927,
  3070701412,
  2757221520,
  1446797203,
  137323447,
  4198817972,
  3910406976,
  461344835,
  3484808360,
  1037989803,
  781091935,
  3705997148,
  2460548119,
  1623424788,
  1939049696,
  2180517859,
  1429367560,
  2807687179,
  3020495871,
  1180866812,
  410100952,
  3927582683,
  4182430767,
  186734380,
  3756733383,
  763408580,
  1053836080,
  3434856499,
  2722870694,
  1344288421,
  1131464017,
  2971354706,
  1708204729,
  2545590714,
  2229949006,
  1988219213,
  680717673,
  3673779818,
  3383336350,
  1002577565,
  4010310262,
  493091189,
  238226049,
  4233660802,
  2987750089,
  1082061258,
  1395524158,
  2705686845,
  1972364758,
  2279892693,
  2494862625,
  1725896226,
  952904198,
  3399985413,
  3656866545,
  731699698,
  4283874585,
  222117402,
  510512622,
  3959836397,
  3280807620,
  837199303,
  582374963,
  3504198960,
  68661723,
  4135334616,
  3844915500,
  390545967,
  1230274059,
  3141532936,
  2825850620,
  1510247935,
  2395924756,
  2091215383,
  1878366691,
  2644384480,
  3553878443,
  565732008,
  854102364,
  3229815391,
  340358836,
  3861050807,
  4117890627,
  119113024,
  1493875044,
  2875275879,
  3090270611,
  1247431312,
  2660249211,
  1828433272,
  2141937292,
  2378227087,
  3811616794,
  291187481,
  34330861,
  4032846830,
  615137029,
  3603020806,
  3314634738,
  939183345,
  1776939221,
  2609017814,
  2295496738,
  2058945313,
  2926798794,
  1545135305,
  1330124605,
  3173225534,
  4084100981,
  17165430,
  307568514,
  3762199681,
  888469610,
  3332340585,
  3587147933,
  665062302,
  2042050490,
  2346497209,
  2559330125,
  1793573966,
  3190661285,
  1279665062,
  1595330642,
  2910671697
];
var lookupTable = uint32ArrayFrom(a_lookupTable);

// node_modules/@aws-crypto/crc32/build/module/aws_crc32.js
var AwsCrc32 = (
  /** @class */
  function() {
    function AwsCrc322() {
      this.crc32 = new Crc32();
    }
    AwsCrc322.prototype.update = function(toHash) {
      if (isEmptyData(toHash))
        return;
      this.crc32.update(convertToBuffer(toHash));
    };
    AwsCrc322.prototype.digest = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, numToUint8(this.crc32.digest())];
        });
      });
    };
    AwsCrc322.prototype.reset = function() {
      this.crc32 = new Crc32();
    };
    return AwsCrc322;
  }()
);

// node_modules/@aws-crypto/crc32/build/module/index.js
var Crc32 = (
  /** @class */
  function() {
    function Crc322() {
      this.checksum = 4294967295;
    }
    Crc322.prototype.update = function(data) {
      var e_1, _a;
      try {
        for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
          var byte = data_1_1.value;
          this.checksum = this.checksum >>> 8 ^ lookupTable2[(this.checksum ^ byte) & 255];
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return this;
    };
    Crc322.prototype.digest = function() {
      return (this.checksum ^ 4294967295) >>> 0;
    };
    return Crc322;
  }()
);
var a_lookUpTable = [
  0,
  1996959894,
  3993919788,
  2567524794,
  124634137,
  1886057615,
  3915621685,
  2657392035,
  249268274,
  2044508324,
  3772115230,
  2547177864,
  162941995,
  2125561021,
  3887607047,
  2428444049,
  498536548,
  1789927666,
  4089016648,
  2227061214,
  450548861,
  1843258603,
  4107580753,
  2211677639,
  325883990,
  1684777152,
  4251122042,
  2321926636,
  335633487,
  1661365465,
  4195302755,
  2366115317,
  997073096,
  1281953886,
  3579855332,
  2724688242,
  1006888145,
  1258607687,
  3524101629,
  2768942443,
  901097722,
  1119000684,
  3686517206,
  2898065728,
  853044451,
  1172266101,
  3705015759,
  2882616665,
  651767980,
  1373503546,
  3369554304,
  3218104598,
  565507253,
  1454621731,
  3485111705,
  3099436303,
  671266974,
  1594198024,
  3322730930,
  2970347812,
  795835527,
  1483230225,
  3244367275,
  3060149565,
  1994146192,
  31158534,
  2563907772,
  4023717930,
  1907459465,
  112637215,
  2680153253,
  3904427059,
  2013776290,
  251722036,
  2517215374,
  3775830040,
  2137656763,
  141376813,
  2439277719,
  3865271297,
  1802195444,
  476864866,
  2238001368,
  4066508878,
  1812370925,
  453092731,
  2181625025,
  4111451223,
  1706088902,
  314042704,
  2344532202,
  4240017532,
  1658658271,
  366619977,
  2362670323,
  4224994405,
  1303535960,
  984961486,
  2747007092,
  3569037538,
  1256170817,
  1037604311,
  2765210733,
  3554079995,
  1131014506,
  879679996,
  2909243462,
  3663771856,
  1141124467,
  855842277,
  2852801631,
  3708648649,
  1342533948,
  654459306,
  3188396048,
  3373015174,
  1466479909,
  544179635,
  3110523913,
  3462522015,
  1591671054,
  702138776,
  2966460450,
  3352799412,
  1504918807,
  783551873,
  3082640443,
  3233442989,
  3988292384,
  2596254646,
  62317068,
  1957810842,
  3939845945,
  2647816111,
  81470997,
  1943803523,
  3814918930,
  2489596804,
  225274430,
  2053790376,
  3826175755,
  2466906013,
  167816743,
  2097651377,
  4027552580,
  2265490386,
  503444072,
  1762050814,
  4150417245,
  2154129355,
  426522225,
  1852507879,
  4275313526,
  2312317920,
  282753626,
  1742555852,
  4189708143,
  2394877945,
  397917763,
  1622183637,
  3604390888,
  2714866558,
  953729732,
  1340076626,
  3518719985,
  2797360999,
  1068828381,
  1219638859,
  3624741850,
  2936675148,
  906185462,
  1090812512,
  3747672003,
  2825379669,
  829329135,
  1181335161,
  3412177804,
  3160834842,
  628085408,
  1382605366,
  3423369109,
  3138078467,
  570562233,
  1426400815,
  3317316542,
  2998733608,
  733239954,
  1555261956,
  3268935591,
  3050360625,
  752459403,
  1541320221,
  2607071920,
  3965973030,
  1969922972,
  40735498,
  2617837225,
  3943577151,
  1913087877,
  83908371,
  2512341634,
  3803740692,
  2075208622,
  213261112,
  2463272603,
  3855990285,
  2094854071,
  198958881,
  2262029012,
  4057260610,
  1759359992,
  534414190,
  2176718541,
  4139329115,
  1873836001,
  414664567,
  2282248934,
  4279200368,
  1711684554,
  285281116,
  2405801727,
  4167216745,
  1634467795,
  376229701,
  2685067896,
  3608007406,
  1308918612,
  956543938,
  2808555105,
  3495958263,
  1231636301,
  1047427035,
  2932959818,
  3654703836,
  1088359270,
  936918e3,
  2847714899,
  3736837829,
  1202900863,
  817233897,
  3183342108,
  3401237130,
  1404277552,
  615818150,
  3134207493,
  3453421203,
  1423857449,
  601450431,
  3009837614,
  3294710456,
  1567103746,
  711928724,
  3020668471,
  3272380065,
  1510334235,
  755167117
];
var lookupTable2 = uint32ArrayFrom(a_lookUpTable);

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getCrc32ChecksumAlgorithmFunction.js
import * as zlib from "zlib";
var NodeCrc32 = class {
  checksum = 0;
  update(data) {
    this.checksum = zlib.crc32(data, this.checksum);
  }
  async digest() {
    return numToUint8(this.checksum);
  }
  reset() {
    this.checksum = 0;
  }
};
var getCrc32ChecksumAlgorithmFunction = () => {
  if (typeof zlib.crc32 === "undefined") {
    return AwsCrc32;
  }
  return NodeCrc32;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/selectChecksumAlgorithmFunction.js
var selectChecksumAlgorithmFunction = (checksumAlgorithm, config) => {
  switch (checksumAlgorithm) {
    case ChecksumAlgorithm.MD5:
      return config.md5;
    case ChecksumAlgorithm.CRC32:
      return getCrc32ChecksumAlgorithmFunction();
    case ChecksumAlgorithm.CRC32C:
      return AwsCrc32c;
    case ChecksumAlgorithm.CRC64NVME:
      if (typeof crc64NvmeCrtContainer.CrtCrc64Nvme !== "function") {
        throw new Error(`Please check whether you have installed the "@aws-sdk/crc64-nvme-crt" package explicitly. 
You must also register the package by calling [require("@aws-sdk/crc64-nvme-crt");] or an ESM equivalent such as [import "@aws-sdk/crc64-nvme-crt";]. 
For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
      }
      return crc64NvmeCrtContainer.CrtCrc64Nvme;
    case ChecksumAlgorithm.SHA1:
      return config.sha1;
    case ChecksumAlgorithm.SHA256:
      return config.sha256;
    default:
      throw new Error(`Unsupported checksum algorithm: ${checksumAlgorithm}`);
  }
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/stringHasher.js
var stringHasher = (checksumAlgorithmFn, body) => {
  const hash = new checksumAlgorithmFn();
  hash.update(toUint8Array(body || ""));
  return hash.digest();
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsMiddleware.js
var flexibleChecksumsMiddlewareOptions = {
  name: "flexibleChecksumsMiddleware",
  step: "build",
  tags: ["BODY_CHECKSUM"],
  override: true
};
var flexibleChecksumsMiddleware = (config, middlewareConfig) => (next, context) => async (args) => {
  if (!HttpRequest.isInstance(args.request)) {
    return next(args);
  }
  if (hasHeaderWithPrefix("x-amz-checksum-", args.request.headers)) {
    return next(args);
  }
  const { request, input } = args;
  const { body: requestBody, headers } = request;
  const { base64Encoder, streamHasher } = config;
  const { requestChecksumRequired, requestAlgorithmMember } = middlewareConfig;
  const requestChecksumCalculation = await config.requestChecksumCalculation();
  const requestAlgorithmMemberName = requestAlgorithmMember?.name;
  const requestAlgorithmMemberHttpHeader = requestAlgorithmMember?.httpHeader;
  if (requestAlgorithmMemberName && !input[requestAlgorithmMemberName]) {
    if (requestChecksumCalculation === RequestChecksumCalculation.WHEN_SUPPORTED || requestChecksumRequired) {
      input[requestAlgorithmMemberName] = DEFAULT_CHECKSUM_ALGORITHM;
      if (requestAlgorithmMemberHttpHeader) {
        headers[requestAlgorithmMemberHttpHeader] = DEFAULT_CHECKSUM_ALGORITHM;
      }
    }
  }
  const checksumAlgorithm = getChecksumAlgorithmForRequest(input, {
    requestChecksumRequired,
    requestAlgorithmMember: requestAlgorithmMember?.name,
    requestChecksumCalculation
  });
  let updatedBody = requestBody;
  let updatedHeaders = headers;
  if (checksumAlgorithm) {
    switch (checksumAlgorithm) {
      case ChecksumAlgorithm.CRC32:
        setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_CRC32", "U");
        break;
      case ChecksumAlgorithm.CRC32C:
        setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_CRC32C", "V");
        break;
      case ChecksumAlgorithm.CRC64NVME:
        setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_CRC64", "W");
        break;
      case ChecksumAlgorithm.SHA1:
        setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_SHA1", "X");
        break;
      case ChecksumAlgorithm.SHA256:
        setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_SHA256", "Y");
        break;
    }
    const checksumLocationName = getChecksumLocationName(checksumAlgorithm);
    const checksumAlgorithmFn = selectChecksumAlgorithmFunction(checksumAlgorithm, config);
    if (isStreaming(requestBody)) {
      const { getAwsChunkedEncodingStream: getAwsChunkedEncodingStream2, bodyLengthChecker } = config;
      updatedBody = getAwsChunkedEncodingStream2(typeof config.requestStreamBufferSize === "number" && config.requestStreamBufferSize >= 8 * 1024 ? createBufferedReadable(requestBody, config.requestStreamBufferSize, context.logger) : requestBody, {
        base64Encoder,
        bodyLengthChecker,
        checksumLocationName,
        checksumAlgorithmFn,
        streamHasher
      });
      updatedHeaders = {
        ...headers,
        "content-encoding": headers["content-encoding"] ? `${headers["content-encoding"]},aws-chunked` : "aws-chunked",
        "transfer-encoding": "chunked",
        "x-amz-decoded-content-length": headers["content-length"],
        "x-amz-content-sha256": "STREAMING-UNSIGNED-PAYLOAD-TRAILER",
        "x-amz-trailer": checksumLocationName
      };
      delete updatedHeaders["content-length"];
    } else if (!hasHeader(checksumLocationName, headers)) {
      const rawChecksum = await stringHasher(checksumAlgorithmFn, requestBody);
      updatedHeaders = {
        ...headers,
        [checksumLocationName]: base64Encoder(rawChecksum)
      };
    }
  }
  const result = await next({
    ...args,
    request: {
      ...request,
      headers: updatedHeaders,
      body: updatedBody
    }
  });
  return result;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsInputMiddleware.js
var flexibleChecksumsInputMiddlewareOptions = {
  name: "flexibleChecksumsInputMiddleware",
  toMiddleware: "serializerMiddleware",
  relation: "before",
  tags: ["BODY_CHECKSUM"],
  override: true
};
var flexibleChecksumsInputMiddleware = (config, middlewareConfig) => (next, context) => async (args) => {
  const input = args.input;
  const { requestValidationModeMember } = middlewareConfig;
  const requestChecksumCalculation = await config.requestChecksumCalculation();
  const responseChecksumValidation = await config.responseChecksumValidation();
  switch (requestChecksumCalculation) {
    case RequestChecksumCalculation.WHEN_REQUIRED:
      setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_WHEN_REQUIRED", "a");
      break;
    case RequestChecksumCalculation.WHEN_SUPPORTED:
      setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_WHEN_SUPPORTED", "Z");
      break;
  }
  switch (responseChecksumValidation) {
    case ResponseChecksumValidation.WHEN_REQUIRED:
      setFeature(context, "FLEXIBLE_CHECKSUMS_RES_WHEN_REQUIRED", "c");
      break;
    case ResponseChecksumValidation.WHEN_SUPPORTED:
      setFeature(context, "FLEXIBLE_CHECKSUMS_RES_WHEN_SUPPORTED", "b");
      break;
  }
  if (requestValidationModeMember && !input[requestValidationModeMember]) {
    if (responseChecksumValidation === ResponseChecksumValidation.WHEN_SUPPORTED) {
      input[requestValidationModeMember] = "ENABLED";
    }
  }
  return next(args);
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumAlgorithmListForResponse.js
var getChecksumAlgorithmListForResponse = (responseAlgorithms = []) => {
  const validChecksumAlgorithms = [];
  for (const algorithm of PRIORITY_ORDER_ALGORITHMS) {
    if (!responseAlgorithms.includes(algorithm) || !CLIENT_SUPPORTED_ALGORITHMS.includes(algorithm)) {
      continue;
    }
    validChecksumAlgorithms.push(algorithm);
  }
  return validChecksumAlgorithms;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/isChecksumWithPartNumber.js
var isChecksumWithPartNumber = (checksum) => {
  const lastHyphenIndex = checksum.lastIndexOf("-");
  if (lastHyphenIndex !== -1) {
    const numberPart = checksum.slice(lastHyphenIndex + 1);
    if (!numberPart.startsWith("0")) {
      const number = parseInt(numberPart, 10);
      if (!isNaN(number) && number >= 1 && number <= 1e4) {
        return true;
      }
    }
  }
  return false;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksum.js
var getChecksum = async (body, { checksumAlgorithmFn, base64Encoder }) => base64Encoder(await stringHasher(checksumAlgorithmFn, body));

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/validateChecksumFromResponse.js
var validateChecksumFromResponse = async (response, { config, responseAlgorithms, logger }) => {
  const checksumAlgorithms = getChecksumAlgorithmListForResponse(responseAlgorithms);
  const { body: responseBody, headers: responseHeaders } = response;
  for (const algorithm of checksumAlgorithms) {
    const responseHeader = getChecksumLocationName(algorithm);
    const checksumFromResponse = responseHeaders[responseHeader];
    if (checksumFromResponse) {
      let checksumAlgorithmFn;
      try {
        checksumAlgorithmFn = selectChecksumAlgorithmFunction(algorithm, config);
      } catch (error) {
        if (algorithm === ChecksumAlgorithm.CRC64NVME) {
          logger?.warn(`Skipping ${ChecksumAlgorithm.CRC64NVME} checksum validation: ${error.message}`);
          continue;
        }
        throw error;
      }
      const { base64Encoder } = config;
      if (isStreaming(responseBody)) {
        response.body = createChecksumStream({
          expectedChecksum: checksumFromResponse,
          checksumSourceLocation: responseHeader,
          checksum: new checksumAlgorithmFn(),
          source: responseBody,
          base64Encoder
        });
        return;
      }
      const checksum = await getChecksum(responseBody, { checksumAlgorithmFn, base64Encoder });
      if (checksum === checksumFromResponse) {
        break;
      }
      throw new Error(`Checksum mismatch: expected "${checksum}" but received "${checksumFromResponse}" in response header "${responseHeader}".`);
    }
  }
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsResponseMiddleware.js
var flexibleChecksumsResponseMiddlewareOptions = {
  name: "flexibleChecksumsResponseMiddleware",
  toMiddleware: "deserializerMiddleware",
  relation: "after",
  tags: ["BODY_CHECKSUM"],
  override: true
};
var flexibleChecksumsResponseMiddleware = (config, middlewareConfig) => (next, context) => async (args) => {
  if (!HttpRequest.isInstance(args.request)) {
    return next(args);
  }
  const input = args.input;
  const result = await next(args);
  const response = result.response;
  const { requestValidationModeMember, responseAlgorithms } = middlewareConfig;
  if (requestValidationModeMember && input[requestValidationModeMember] === "ENABLED") {
    const { clientName, commandName } = context;
    const isS3WholeObjectMultipartGetResponseChecksum = clientName === "S3Client" && commandName === "GetObjectCommand" && getChecksumAlgorithmListForResponse(responseAlgorithms).every((algorithm) => {
      const responseHeader = getChecksumLocationName(algorithm);
      const checksumFromResponse = response.headers[responseHeader];
      return !checksumFromResponse || isChecksumWithPartNumber(checksumFromResponse);
    });
    if (isS3WholeObjectMultipartGetResponseChecksum) {
      return result;
    }
    await validateChecksumFromResponse(response, {
      config,
      responseAlgorithms,
      logger: context.logger
    });
  }
  return result;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getFlexibleChecksumsPlugin.js
var getFlexibleChecksumsPlugin = (config, middlewareConfig) => ({
  applyToStack: (clientStack) => {
    clientStack.add(flexibleChecksumsMiddleware(config, middlewareConfig), flexibleChecksumsMiddlewareOptions);
    clientStack.addRelativeTo(flexibleChecksumsInputMiddleware(config, middlewareConfig), flexibleChecksumsInputMiddlewareOptions);
    clientStack.addRelativeTo(flexibleChecksumsResponseMiddleware(config, middlewareConfig), flexibleChecksumsResponseMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/resolveFlexibleChecksumsConfig.js
var resolveFlexibleChecksumsConfig = (input) => {
  const { requestChecksumCalculation, responseChecksumValidation, requestStreamBufferSize } = input;
  return Object.assign(input, {
    requestChecksumCalculation: normalizeProvider(requestChecksumCalculation ?? DEFAULT_REQUEST_CHECKSUM_CALCULATION),
    responseChecksumValidation: normalizeProvider(responseChecksumValidation ?? DEFAULT_RESPONSE_CHECKSUM_VALIDATION),
    requestStreamBufferSize: Number(requestStreamBufferSize ?? 0)
  });
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/check-content-length-header.js
var CONTENT_LENGTH_HEADER = "content-length";
var DECODED_CONTENT_LENGTH_HEADER = "x-amz-decoded-content-length";
function checkContentLengthHeader() {
  return (next, context) => async (args) => {
    const { request } = args;
    if (HttpRequest.isInstance(request)) {
      if (!(CONTENT_LENGTH_HEADER in request.headers) && !(DECODED_CONTENT_LENGTH_HEADER in request.headers)) {
        const message = `Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage.`;
        if (typeof context?.logger?.warn === "function" && !(context.logger instanceof NoOpLogger)) {
          context.logger.warn(message);
        } else {
          console.warn(message);
        }
      }
    }
    return next({ ...args });
  };
}
var checkContentLengthHeaderMiddlewareOptions = {
  step: "finalizeRequest",
  tags: ["CHECK_CONTENT_LENGTH_HEADER"],
  name: "getCheckContentLengthHeaderPlugin",
  override: true
};
var getCheckContentLengthHeaderPlugin = (unused) => ({
  applyToStack: (clientStack) => {
    clientStack.add(checkContentLengthHeader(), checkContentLengthHeaderMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-endpoint-middleware.js
var regionRedirectEndpointMiddleware = (config) => {
  return (next, context) => async (args) => {
    const originalRegion = await config.region();
    const regionProviderRef = config.region;
    let unlock = () => {
    };
    if (context.__s3RegionRedirect) {
      Object.defineProperty(config, "region", {
        writable: false,
        value: async () => {
          return context.__s3RegionRedirect;
        }
      });
      unlock = () => Object.defineProperty(config, "region", {
        writable: true,
        value: regionProviderRef
      });
    }
    try {
      const result = await next(args);
      if (context.__s3RegionRedirect) {
        unlock();
        const region = await config.region();
        if (originalRegion !== region) {
          throw new Error("Region was not restored following S3 region redirect.");
        }
      }
      return result;
    } catch (e2) {
      unlock();
      throw e2;
    }
  };
};
var regionRedirectEndpointMiddlewareOptions = {
  tags: ["REGION_REDIRECT", "S3"],
  name: "regionRedirectEndpointMiddleware",
  override: true,
  relation: "before",
  toMiddleware: "endpointV2Middleware"
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-middleware.js
function regionRedirectMiddleware(clientConfig) {
  return (next, context) => async (args) => {
    try {
      return await next(args);
    } catch (err) {
      if (clientConfig.followRegionRedirects) {
        if (err?.$metadata?.httpStatusCode === 301 || err?.$metadata?.httpStatusCode === 400 && err?.name === "IllegalLocationConstraintException") {
          try {
            const actualRegion = err.$response.headers["x-amz-bucket-region"];
            context.logger?.debug(`Redirecting from ${await clientConfig.region()} to ${actualRegion}`);
            context.__s3RegionRedirect = actualRegion;
          } catch (e2) {
            throw new Error("Region redirect failed: " + e2);
          }
          return next(args);
        }
      }
      throw err;
    }
  };
}
var regionRedirectMiddlewareOptions = {
  step: "initialize",
  tags: ["REGION_REDIRECT", "S3"],
  name: "regionRedirectMiddleware",
  override: true
};
var getRegionRedirectMiddlewarePlugin = (clientConfig) => ({
  applyToStack: (clientStack) => {
    clientStack.add(regionRedirectMiddleware(clientConfig), regionRedirectMiddlewareOptions);
    clientStack.addRelativeTo(regionRedirectEndpointMiddleware(clientConfig), regionRedirectEndpointMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-expires-middleware.js
var s3ExpiresMiddleware = (config) => {
  return (next, context) => async (args) => {
    const result = await next(args);
    const { response } = result;
    if (HttpResponse.isInstance(response)) {
      if (response.headers.expires) {
        response.headers.expiresstring = response.headers.expires;
        try {
          parseRfc7231DateTime(response.headers.expires);
        } catch (e2) {
          context.logger?.warn(`AWS SDK Warning for ${context.clientName}::${context.commandName} response parsing (${response.headers.expires}): ${e2}`);
          delete response.headers.expires;
        }
      }
    }
    return result;
  };
};
var s3ExpiresMiddlewareOptions = {
  tags: ["S3"],
  name: "s3ExpiresMiddleware",
  override: true,
  relation: "after",
  toMiddleware: "deserializerMiddleware"
};
var getS3ExpiresMiddlewarePlugin = (clientConfig) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(s3ExpiresMiddleware(clientConfig), s3ExpiresMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityCache.js
var S3ExpressIdentityCache = class _S3ExpressIdentityCache {
  data;
  lastPurgeTime = Date.now();
  static EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS = 3e4;
  constructor(data = {}) {
    this.data = data;
  }
  get(key) {
    const entry = this.data[key];
    if (!entry) {
      return;
    }
    return entry;
  }
  set(key, entry) {
    this.data[key] = entry;
    return entry;
  }
  delete(key) {
    delete this.data[key];
  }
  async purgeExpired() {
    const now = Date.now();
    if (this.lastPurgeTime + _S3ExpressIdentityCache.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS > now) {
      return;
    }
    for (const key in this.data) {
      const entry = this.data[key];
      if (!entry.isRefreshing) {
        const credential = await entry.identity;
        if (credential.expiration) {
          if (credential.expiration.getTime() < now) {
            delete this.data[key];
          }
        }
      }
    }
  }
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityCacheEntry.js
var S3ExpressIdentityCacheEntry = class {
  _identity;
  isRefreshing;
  accessed;
  constructor(_identity, isRefreshing = false, accessed = Date.now()) {
    this._identity = _identity;
    this.isRefreshing = isRefreshing;
    this.accessed = accessed;
  }
  get identity() {
    this.accessed = Date.now();
    return this._identity;
  }
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityProviderImpl.js
var S3ExpressIdentityProviderImpl = class _S3ExpressIdentityProviderImpl {
  createSessionFn;
  cache;
  static REFRESH_WINDOW_MS = 6e4;
  constructor(createSessionFn, cache2 = new S3ExpressIdentityCache()) {
    this.createSessionFn = createSessionFn;
    this.cache = cache2;
  }
  async getS3ExpressIdentity(awsIdentity, identityProperties) {
    const key = identityProperties.Bucket;
    const { cache: cache2 } = this;
    const entry = cache2.get(key);
    if (entry) {
      return entry.identity.then((identity) => {
        const isExpired = (identity.expiration?.getTime() ?? 0) < Date.now();
        if (isExpired) {
          return cache2.set(key, new S3ExpressIdentityCacheEntry(this.getIdentity(key))).identity;
        }
        const isExpiringSoon = (identity.expiration?.getTime() ?? 0) < Date.now() + _S3ExpressIdentityProviderImpl.REFRESH_WINDOW_MS;
        if (isExpiringSoon && !entry.isRefreshing) {
          entry.isRefreshing = true;
          this.getIdentity(key).then((id) => {
            cache2.set(key, new S3ExpressIdentityCacheEntry(Promise.resolve(id)));
          });
        }
        return identity;
      });
    }
    return cache2.set(key, new S3ExpressIdentityCacheEntry(this.getIdentity(key))).identity;
  }
  async getIdentity(key) {
    await this.cache.purgeExpired().catch((error) => {
      console.warn("Error while clearing expired entries in S3ExpressIdentityCache: \n" + error);
    });
    const session = await this.createSessionFn(key);
    if (!session.Credentials?.AccessKeyId || !session.Credentials?.SecretAccessKey) {
      throw new Error("s3#createSession response credential missing AccessKeyId or SecretAccessKey.");
    }
    const identity = {
      accessKeyId: session.Credentials.AccessKeyId,
      secretAccessKey: session.Credentials.SecretAccessKey,
      sessionToken: session.Credentials.SessionToken,
      expiration: session.Credentials.Expiration ? new Date(session.Credentials.Expiration) : void 0
    };
    return identity;
  }
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/constants.js
var S3_EXPRESS_BUCKET_TYPE = "Directory";
var S3_EXPRESS_BACKEND = "S3Express";
var S3_EXPRESS_AUTH_SCHEME = "sigv4-s3express";
var SESSION_TOKEN_QUERY_PARAM = "X-Amz-S3session-Token";
var SESSION_TOKEN_HEADER = SESSION_TOKEN_QUERY_PARAM.toLowerCase();
var NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_ENV_NAME = "AWS_S3_DISABLE_EXPRESS_SESSION_AUTH";
var NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_INI_NAME = "s3_disable_express_session_auth";
var NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS = {
  environmentVariableSelector: (env) => booleanSelector(env, NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_ENV_NAME, SelectorType.ENV),
  configFileSelector: (profile) => booleanSelector(profile, NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_INI_NAME, SelectorType.CONFIG),
  default: false
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/SignatureV4S3Express.js
var SignatureV4S3Express = class extends SignatureV4 {
  async signWithCredentials(requestToSign, credentials, options) {
    const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
    requestToSign.headers[SESSION_TOKEN_HEADER] = credentials.sessionToken;
    const privateAccess = this;
    setSingleOverride(privateAccess, credentialsWithoutSessionToken);
    return privateAccess.signRequest(requestToSign, options ?? {});
  }
  async presignWithCredentials(requestToSign, credentials, options) {
    const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
    delete requestToSign.headers[SESSION_TOKEN_HEADER];
    requestToSign.headers[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
    requestToSign.query = requestToSign.query ?? {};
    requestToSign.query[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
    const privateAccess = this;
    setSingleOverride(privateAccess, credentialsWithoutSessionToken);
    return this.presign(requestToSign, options);
  }
};
function getCredentialsWithoutSessionToken(credentials) {
  const credentialsWithoutSessionToken = {
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey,
    expiration: credentials.expiration
  };
  return credentialsWithoutSessionToken;
}
function setSingleOverride(privateAccess, credentialsWithoutSessionToken) {
  const id = setTimeout(() => {
    throw new Error("SignatureV4S3Express credential override was created but not called.");
  }, 10);
  const currentCredentialProvider = privateAccess.credentialProvider;
  const overrideCredentialsProviderOnce = () => {
    clearTimeout(id);
    privateAccess.credentialProvider = currentCredentialProvider;
    return Promise.resolve(credentialsWithoutSessionToken);
  };
  privateAccess.credentialProvider = overrideCredentialsProviderOnce;
}

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/s3ExpressMiddleware.js
var s3ExpressMiddleware = (options) => {
  return (next, context) => async (args) => {
    if (context.endpointV2) {
      const endpoint = context.endpointV2;
      const isS3ExpressAuth = endpoint.properties?.authSchemes?.[0]?.name === S3_EXPRESS_AUTH_SCHEME;
      const isS3ExpressBucket = endpoint.properties?.backend === S3_EXPRESS_BACKEND || endpoint.properties?.bucketType === S3_EXPRESS_BUCKET_TYPE;
      if (isS3ExpressBucket) {
        setFeature(context, "S3_EXPRESS_BUCKET", "J");
        context.isS3ExpressBucket = true;
      }
      if (isS3ExpressAuth) {
        const requestBucket = args.input.Bucket;
        if (requestBucket) {
          const s3ExpressIdentity = await options.s3ExpressIdentityProvider.getS3ExpressIdentity(await options.credentials(), {
            Bucket: requestBucket
          });
          context.s3ExpressIdentity = s3ExpressIdentity;
          if (HttpRequest.isInstance(args.request) && s3ExpressIdentity.sessionToken) {
            args.request.headers[SESSION_TOKEN_HEADER] = s3ExpressIdentity.sessionToken;
          }
        }
      }
    }
    return next(args);
  };
};
var s3ExpressMiddlewareOptions = {
  name: "s3ExpressMiddleware",
  step: "build",
  tags: ["S3", "S3_EXPRESS"],
  override: true
};
var getS3ExpressPlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(s3ExpressMiddleware(options), s3ExpressMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/signS3Express.js
var signS3Express = async (s3ExpressIdentity, signingOptions, request, sigV4MultiRegionSigner) => {
  const signedRequest = await sigV4MultiRegionSigner.signWithCredentials(request, s3ExpressIdentity, {});
  if (signedRequest.headers["X-Amz-Security-Token"] || signedRequest.headers["x-amz-security-token"]) {
    throw new Error("X-Amz-Security-Token must not be set for s3-express requests.");
  }
  return signedRequest;
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/s3ExpressHttpSigningMiddleware.js
var defaultErrorHandler = (signingProperties) => (error) => {
  throw error;
};
var defaultSuccessHandler = (httpResponse, signingProperties) => {
};
var s3ExpressHttpSigningMiddleware = (config) => (next, context) => async (args) => {
  if (!HttpRequest.isInstance(args.request)) {
    return next(args);
  }
  const smithyContext = getSmithyContext(context);
  const scheme = smithyContext.selectedHttpAuthScheme;
  if (!scheme) {
    throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
  }
  const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
  let request;
  if (context.s3ExpressIdentity) {
    request = await signS3Express(context.s3ExpressIdentity, signingProperties, args.request, await config.signer());
  } else {
    request = await signer.sign(args.request, identity, signingProperties);
  }
  const output = await next({
    ...args,
    request
  }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
  (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
  return output;
};
var getS3ExpressHttpSigningPlugin = (config) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(s3ExpressHttpSigningMiddleware(config), httpSigningMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3Configuration.js
var resolveS3Config = (input, { session }) => {
  const [s3ClientProvider, CreateSessionCommandCtor] = session;
  const { forcePathStyle, useAccelerateEndpoint, disableMultiregionAccessPoints, followRegionRedirects, s3ExpressIdentityProvider, bucketEndpoint } = input;
  return Object.assign(input, {
    forcePathStyle: forcePathStyle ?? false,
    useAccelerateEndpoint: useAccelerateEndpoint ?? false,
    disableMultiregionAccessPoints: disableMultiregionAccessPoints ?? false,
    followRegionRedirects: followRegionRedirects ?? false,
    s3ExpressIdentityProvider: s3ExpressIdentityProvider ?? new S3ExpressIdentityProviderImpl(async (key) => s3ClientProvider().send(new CreateSessionCommandCtor({
      Bucket: key
    }))),
    bucketEndpoint: bucketEndpoint ?? false
  });
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/throw-200-exceptions.js
var THROW_IF_EMPTY_BODY = {
  CopyObjectCommand: true,
  UploadPartCopyCommand: true,
  CompleteMultipartUploadCommand: true
};
var MAX_BYTES_TO_INSPECT = 3e3;
var throw200ExceptionsMiddleware = (config) => (next, context) => async (args) => {
  const result = await next(args);
  const { response } = result;
  if (!HttpResponse.isInstance(response)) {
    return result;
  }
  const { statusCode, body: sourceBody } = response;
  if (statusCode < 200 || statusCode >= 300) {
    return result;
  }
  const isSplittableStream = typeof sourceBody?.stream === "function" || typeof sourceBody?.pipe === "function" || typeof sourceBody?.tee === "function";
  if (!isSplittableStream) {
    return result;
  }
  let bodyCopy = sourceBody;
  let body = sourceBody;
  if (sourceBody && typeof sourceBody === "object" && !(sourceBody instanceof Uint8Array)) {
    [bodyCopy, body] = await splitStream(sourceBody);
  }
  response.body = body;
  const bodyBytes = await collectBody2(bodyCopy, {
    streamCollector: async (stream) => {
      return headStream(stream, MAX_BYTES_TO_INSPECT);
    }
  });
  if (typeof bodyCopy?.destroy === "function") {
    bodyCopy.destroy();
  }
  const bodyStringTail = config.utf8Encoder(bodyBytes.subarray(bodyBytes.length - 16));
  if (bodyBytes.length === 0 && THROW_IF_EMPTY_BODY[context.commandName]) {
    const err = new Error("S3 aborted request");
    err.name = "InternalError";
    throw err;
  }
  if (bodyStringTail && bodyStringTail.endsWith("</Error>")) {
    response.statusCode = 400;
  }
  return result;
};
var collectBody2 = (streamBody = new Uint8Array(), context) => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
var throw200ExceptionsMiddlewareOptions = {
  relation: "after",
  toMiddleware: "deserializerMiddleware",
  tags: ["THROW_200_EXCEPTIONS", "S3"],
  name: "throw200ExceptionsMiddleware",
  override: true
};
var getThrow200ExceptionsPlugin = (config) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(throw200ExceptionsMiddleware(config), throw200ExceptionsMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/util-arn-parser/dist-es/index.js
var validate = (str) => typeof str === "string" && str.indexOf("arn:") === 0 && str.split(":").length >= 6;

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/bucket-endpoint-middleware.js
function bucketEndpointMiddleware(options) {
  return (next, context) => async (args) => {
    if (options.bucketEndpoint) {
      const endpoint = context.endpointV2;
      if (endpoint) {
        const bucket = args.input.Bucket;
        if (typeof bucket === "string") {
          try {
            const bucketEndpointUrl = new URL(bucket);
            context.endpointV2 = {
              ...endpoint,
              url: bucketEndpointUrl
            };
          } catch (e2) {
            const warning = `@aws-sdk/middleware-sdk-s3: bucketEndpoint=true was set but Bucket=${bucket} could not be parsed as URL.`;
            if (context.logger?.constructor?.name === "NoOpLogger") {
              console.warn(warning);
            } else {
              context.logger?.warn?.(warning);
            }
            throw e2;
          }
        }
      }
    }
    return next(args);
  };
}
var bucketEndpointMiddlewareOptions = {
  name: "bucketEndpointMiddleware",
  override: true,
  relation: "after",
  toMiddleware: "endpointV2Middleware"
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/validate-bucket-name.js
function validateBucketNameMiddleware({ bucketEndpoint }) {
  return (next) => async (args) => {
    const { input: { Bucket } } = args;
    if (!bucketEndpoint && typeof Bucket === "string" && !validate(Bucket) && Bucket.indexOf("/") >= 0) {
      const err = new Error(`Bucket name shouldn't contain '/', received '${Bucket}'`);
      err.name = "InvalidBucketName";
      throw err;
    }
    return next({ ...args });
  };
}
var validateBucketNameMiddlewareOptions = {
  step: "initialize",
  tags: ["VALIDATE_BUCKET_NAME"],
  name: "validateBucketNameMiddleware",
  override: true
};
var getValidateBucketNamePlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(validateBucketNameMiddleware(options), validateBucketNameMiddlewareOptions);
    clientStack.addRelativeTo(bucketEndpointMiddleware(options), bucketEndpointMiddlewareOptions);
  }
});

// node_modules/@smithy/eventstream-serde-config-resolver/dist-es/EventStreamSerdeConfig.js
var resolveEventStreamSerdeConfig = (input) => Object.assign(input, {
  eventStreamMarshaller: input.eventStreamSerdeProvider(input)
});

// node_modules/@aws-sdk/signature-v4-multi-region/dist-es/signature-v4-crt-container.js
var signatureV4CrtContainer = {
  CrtSignerV4: null
};

// node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4MultiRegion.js
var SignatureV4MultiRegion = class {
  sigv4aSigner;
  sigv4Signer;
  signerOptions;
  constructor(options) {
    this.sigv4Signer = new SignatureV4S3Express(options);
    this.signerOptions = options;
  }
  async sign(requestToSign, options = {}) {
    if (options.signingRegion === "*") {
      return this.getSigv4aSigner().sign(requestToSign, options);
    }
    return this.sigv4Signer.sign(requestToSign, options);
  }
  async signWithCredentials(requestToSign, credentials, options = {}) {
    if (options.signingRegion === "*") {
      const signer = this.getSigv4aSigner();
      const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
      if (CrtSignerV4 && signer instanceof CrtSignerV4) {
        return signer.signWithCredentials(requestToSign, credentials, options);
      } else {
        throw new Error(`signWithCredentials with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
      }
    }
    return this.sigv4Signer.signWithCredentials(requestToSign, credentials, options);
  }
  async presign(originalRequest, options = {}) {
    if (options.signingRegion === "*") {
      const signer = this.getSigv4aSigner();
      const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
      if (CrtSignerV4 && signer instanceof CrtSignerV4) {
        return signer.presign(originalRequest, options);
      } else {
        throw new Error(`presign with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
      }
    }
    return this.sigv4Signer.presign(originalRequest, options);
  }
  async presignWithCredentials(originalRequest, credentials, options = {}) {
    if (options.signingRegion === "*") {
      throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
    }
    return this.sigv4Signer.presignWithCredentials(originalRequest, credentials, options);
  }
  getSigv4aSigner() {
    if (!this.sigv4aSigner) {
      const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
      const JsSigV4aSigner = signatureV4aContainer.SignatureV4a;
      if (this.signerOptions.runtime === "node") {
        if (!CrtSignerV4 && !JsSigV4aSigner) {
          throw new Error("Neither CRT nor JS SigV4a implementation is available. Please load either @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
        }
        if (CrtSignerV4 && typeof CrtSignerV4 === "function") {
          this.sigv4aSigner = new CrtSignerV4({
            ...this.signerOptions,
            signingAlgorithm: 1
          });
        } else if (JsSigV4aSigner && typeof JsSigV4aSigner === "function") {
          this.sigv4aSigner = new JsSigV4aSigner({
            ...this.signerOptions
          });
        } else {
          throw new Error("Available SigV4a implementation is not a valid constructor. Please ensure you've properly imported @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a.For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
        }
      } else {
        if (!JsSigV4aSigner || typeof JsSigV4aSigner !== "function") {
          throw new Error("JS SigV4a implementation is not available or not a valid constructor. Please check whether you have installed the @aws-sdk/signature-v4a package explicitly. The CRT implementation is not available for browsers. You must also register the package by calling [require('@aws-sdk/signature-v4a');] or an ESM equivalent such as [import '@aws-sdk/signature-v4a';]. For more information please go to https://github.com/aws/aws-sdk-js-v3#using-javascript-non-crt-implementation-of-sigv4a");
        }
        this.sigv4aSigner = new JsSigV4aSigner({
          ...this.signerOptions
        });
      }
    }
    return this.sigv4aSigner;
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/endpoint/ruleset.js
var cp = "required";
var cq = "type";
var cr = "rules";
var cs = "conditions";
var ct = "fn";
var cu = "argv";
var cv = "ref";
var cw = "assign";
var cx = "url";
var cy = "properties";
var cz = "backend";
var cA = "authSchemes";
var cB = "disableDoubleEncoding";
var cC = "signingName";
var cD = "signingRegion";
var cE = "headers";
var cF = "signingRegionSet";
var a = 6;
var b = false;
var c = true;
var d = "isSet";
var e = "booleanEquals";
var f = "error";
var g = "aws.partition";
var h = "stringEquals";
var i = "getAttr";
var j = "name";
var k = "substring";
var l = "bucketSuffix";
var m = "parseURL";
var n = "endpoint";
var o = "tree";
var p = "aws.isVirtualHostableS3Bucket";
var q = "{url#scheme}://{Bucket}.{url#authority}{url#path}";
var r = "not";
var s = "accessPointSuffix";
var t = "{url#scheme}://{url#authority}{url#path}";
var u = "hardwareType";
var v = "regionPrefix";
var w = "bucketAliasSuffix";
var x = "outpostId";
var y = "isValidHostLabel";
var z = "sigv4a";
var A = "s3-outposts";
var B = "s3";
var C = "{url#scheme}://{url#authority}{url#normalizedPath}{Bucket}";
var D = "https://{Bucket}.s3-accelerate.{partitionResult#dnsSuffix}";
var E = "https://{Bucket}.s3.{partitionResult#dnsSuffix}";
var F = "aws.parseArn";
var G = "bucketArn";
var H = "arnType";
var I = "";
var J = "s3-object-lambda";
var K = "accesspoint";
var L = "accessPointName";
var M = "{url#scheme}://{accessPointName}-{bucketArn#accountId}.{url#authority}{url#path}";
var N = "mrapPartition";
var O = "outpostType";
var P = "arnPrefix";
var Q = "{url#scheme}://{url#authority}{url#normalizedPath}{uri_encoded_bucket}";
var R = "https://s3.{partitionResult#dnsSuffix}/{uri_encoded_bucket}";
var S = "https://s3.{partitionResult#dnsSuffix}";
var T = { [cp]: false, [cq]: "String" };
var U = { [cp]: true, "default": false, [cq]: "Boolean" };
var V = { [cp]: false, [cq]: "Boolean" };
var W = { [ct]: e, [cu]: [{ [cv]: "Accelerate" }, true] };
var X = { [ct]: e, [cu]: [{ [cv]: "UseFIPS" }, true] };
var Y = { [ct]: e, [cu]: [{ [cv]: "UseDualStack" }, true] };
var Z = { [ct]: d, [cu]: [{ [cv]: "Endpoint" }] };
var aa = { [ct]: g, [cu]: [{ [cv]: "Region" }], [cw]: "partitionResult" };
var ab = { [ct]: h, [cu]: [{ [ct]: i, [cu]: [{ [cv]: "partitionResult" }, j] }, "aws-cn"] };
var ac = { [ct]: d, [cu]: [{ [cv]: "Bucket" }] };
var ad = { [cv]: "Bucket" };
var ae = { [cs]: [Y], [f]: "S3Express does not support Dual-stack.", [cq]: f };
var af = { [cs]: [W], [f]: "S3Express does not support S3 Accelerate.", [cq]: f };
var ag = { [cs]: [Z, { [ct]: m, [cu]: [{ [cv]: "Endpoint" }], [cw]: "url" }], [cr]: [{ [cs]: [{ [ct]: d, [cu]: [{ [cv]: "DisableS3ExpressSessionAuth" }] }, { [ct]: e, [cu]: [{ [cv]: "DisableS3ExpressSessionAuth" }, true] }], [cr]: [{ [cs]: [{ [ct]: e, [cu]: [{ [ct]: i, [cu]: [{ [cv]: "url" }, "isIp"] }, true] }], [cr]: [{ [cs]: [{ [ct]: "uriEncode", [cu]: [ad], [cw]: "uri_encoded_bucket" }], [cr]: [{ [n]: { [cx]: "{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}", [cy]: { [cz]: "S3Express", [cA]: [{ [cB]: true, [j]: "sigv4", [cC]: "s3express", [cD]: "{Region}" }] }, [cE]: {} }, [cq]: n }], [cq]: o }], [cq]: o }, { [cs]: [{ [ct]: p, [cu]: [ad, false] }], [cr]: [{ [n]: { [cx]: q, [cy]: { [cz]: "S3Express", [cA]: [{ [cB]: true, [j]: "sigv4", [cC]: "s3express", [cD]: "{Region}" }] }, [cE]: {} }, [cq]: n }], [cq]: o }, { [f]: "S3Express bucket name is not a valid virtual hostable name.", [cq]: f }], [cq]: o }, { [cs]: [{ [ct]: e, [cu]: [{ [ct]: i, [cu]: [{ [cv]: "url" }, "isIp"] }, true] }], [cr]: [{ [cs]: [{ [ct]: "uriEncode", [cu]: [ad], [cw]: "uri_encoded_bucket" }], [cr]: [{ [n]: { [cx]: "{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}", [cy]: { [cz]: "S3Express", [cA]: [{ [cB]: true, [j]: "sigv4-s3express", [cC]: "s3express", [cD]: "{Region}" }] }, [cE]: {} }, [cq]: n }], [cq]: o }], [cq]: o }, { [cs]: [{ [ct]: p, [cu]: [ad, false] }], [cr]: [{ [n]: { [cx]: q, [cy]: { [cz]: "S3Express", [cA]: [{ [cB]: true, [j]: "sigv4-s3express", [cC]: "s3express", [cD]: "{Region}" }] }, [cE]: {} }, [cq]: n }], [cq]: o }, { [f]: "S3Express bucket name is not a valid virtual hostable name.", [cq]: f }], [cq]: o };
var ah = { [ct]: m, [cu]: [{ [cv]: "Endpoint" }], [cw]: "url" };
var ai = { [ct]: e, [cu]: [{ [ct]: i, [cu]: [{ [cv]: "url" }, "isIp"] }, true] };
var aj = { [cv]: "url" };
var ak = { [ct]: "uriEncode", [cu]: [ad], [cw]: "uri_encoded_bucket" };
var al = { [cz]: "S3Express", [cA]: [{ [cB]: true, [j]: "sigv4", [cC]: "s3express", [cD]: "{Region}" }] };
var am = {};
var an = { [ct]: p, [cu]: [ad, false] };
var ao = { [f]: "S3Express bucket name is not a valid virtual hostable name.", [cq]: f };
var ap = { [ct]: d, [cu]: [{ [cv]: "UseS3ExpressControlEndpoint" }] };
var aq = { [ct]: e, [cu]: [{ [cv]: "UseS3ExpressControlEndpoint" }, true] };
var ar = { [ct]: r, [cu]: [Z] };
var as = { [f]: "Unrecognized S3Express bucket name format.", [cq]: f };
var at = { [ct]: r, [cu]: [ac] };
var au = { [cv]: u };
var av = { [cs]: [ar], [f]: "Expected a endpoint to be specified but no endpoint was found", [cq]: f };
var aw = { [cA]: [{ [cB]: true, [j]: z, [cC]: A, [cF]: ["*"] }, { [cB]: true, [j]: "sigv4", [cC]: A, [cD]: "{Region}" }] };
var ax = { [ct]: e, [cu]: [{ [cv]: "ForcePathStyle" }, false] };
var ay = { [cv]: "ForcePathStyle" };
var az = { [ct]: e, [cu]: [{ [cv]: "Accelerate" }, false] };
var aA = { [ct]: h, [cu]: [{ [cv]: "Region" }, "aws-global"] };
var aB = { [cA]: [{ [cB]: true, [j]: "sigv4", [cC]: B, [cD]: "us-east-1" }] };
var aC = { [ct]: r, [cu]: [aA] };
var aD = { [ct]: e, [cu]: [{ [cv]: "UseGlobalEndpoint" }, true] };
var aE = { [cx]: "https://{Bucket}.s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", [cy]: { [cA]: [{ [cB]: true, [j]: "sigv4", [cC]: B, [cD]: "{Region}" }] }, [cE]: {} };
var aF = { [cA]: [{ [cB]: true, [j]: "sigv4", [cC]: B, [cD]: "{Region}" }] };
var aG = { [ct]: e, [cu]: [{ [cv]: "UseGlobalEndpoint" }, false] };
var aH = { [ct]: e, [cu]: [{ [cv]: "UseDualStack" }, false] };
var aI = { [cx]: "https://{Bucket}.s3-fips.{Region}.{partitionResult#dnsSuffix}", [cy]: aF, [cE]: {} };
var aJ = { [ct]: e, [cu]: [{ [cv]: "UseFIPS" }, false] };
var aK = { [cx]: "https://{Bucket}.s3-accelerate.dualstack.{partitionResult#dnsSuffix}", [cy]: aF, [cE]: {} };
var aL = { [cx]: "https://{Bucket}.s3.dualstack.{Region}.{partitionResult#dnsSuffix}", [cy]: aF, [cE]: {} };
var aM = { [ct]: e, [cu]: [{ [ct]: i, [cu]: [aj, "isIp"] }, false] };
var aN = { [cx]: C, [cy]: aF, [cE]: {} };
var aO = { [cx]: q, [cy]: aF, [cE]: {} };
var aP = { [n]: aO, [cq]: n };
var aQ = { [cx]: D, [cy]: aF, [cE]: {} };
var aR = { [cx]: "https://{Bucket}.s3.{Region}.{partitionResult#dnsSuffix}", [cy]: aF, [cE]: {} };
var aS = { [f]: "Invalid region: region was not a valid DNS name.", [cq]: f };
var aT = { [cv]: G };
var aU = { [cv]: H };
var aV = { [ct]: i, [cu]: [aT, "service"] };
var aW = { [cv]: L };
var aX = { [cs]: [Y], [f]: "S3 Object Lambda does not support Dual-stack", [cq]: f };
var aY = { [cs]: [W], [f]: "S3 Object Lambda does not support S3 Accelerate", [cq]: f };
var aZ = { [cs]: [{ [ct]: d, [cu]: [{ [cv]: "DisableAccessPoints" }] }, { [ct]: e, [cu]: [{ [cv]: "DisableAccessPoints" }, true] }], [f]: "Access points are not supported for this operation", [cq]: f };
var ba = { [cs]: [{ [ct]: d, [cu]: [{ [cv]: "UseArnRegion" }] }, { [ct]: e, [cu]: [{ [cv]: "UseArnRegion" }, false] }, { [ct]: r, [cu]: [{ [ct]: h, [cu]: [{ [ct]: i, [cu]: [aT, "region"] }, "{Region}"] }] }], [f]: "Invalid configuration: region from ARN `{bucketArn#region}` does not match client region `{Region}` and UseArnRegion is `false`", [cq]: f };
var bb = { [ct]: i, [cu]: [{ [cv]: "bucketPartition" }, j] };
var bc = { [ct]: i, [cu]: [aT, "accountId"] };
var bd = { [cA]: [{ [cB]: true, [j]: "sigv4", [cC]: J, [cD]: "{bucketArn#region}" }] };
var be = { [f]: "Invalid ARN: The access point name may only contain a-z, A-Z, 0-9 and `-`. Found: `{accessPointName}`", [cq]: f };
var bf = { [f]: "Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: `{bucketArn#accountId}`", [cq]: f };
var bg = { [f]: "Invalid region in ARN: `{bucketArn#region}` (invalid DNS name)", [cq]: f };
var bh = { [f]: "Client was configured for partition `{partitionResult#name}` but ARN (`{Bucket}`) has `{bucketPartition#name}`", [cq]: f };
var bi = { [f]: "Invalid ARN: The ARN may only contain a single resource component after `accesspoint`.", [cq]: f };
var bj = { [f]: "Invalid ARN: Expected a resource of the format `accesspoint:<accesspoint name>` but no name was provided", [cq]: f };
var bk = { [cA]: [{ [cB]: true, [j]: "sigv4", [cC]: B, [cD]: "{bucketArn#region}" }] };
var bl = { [cA]: [{ [cB]: true, [j]: z, [cC]: A, [cF]: ["*"] }, { [cB]: true, [j]: "sigv4", [cC]: A, [cD]: "{bucketArn#region}" }] };
var bm = { [ct]: F, [cu]: [ad] };
var bn = { [cx]: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cy]: aF, [cE]: {} };
var bo = { [cx]: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cy]: aF, [cE]: {} };
var bp = { [cx]: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cy]: aF, [cE]: {} };
var bq = { [cx]: Q, [cy]: aF, [cE]: {} };
var br = { [cx]: "https://s3.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cy]: aF, [cE]: {} };
var bs = { [cv]: "UseObjectLambdaEndpoint" };
var bt = { [cA]: [{ [cB]: true, [j]: "sigv4", [cC]: J, [cD]: "{Region}" }] };
var bu = { [cx]: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", [cy]: aF, [cE]: {} };
var bv = { [cx]: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}", [cy]: aF, [cE]: {} };
var bw = { [cx]: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}", [cy]: aF, [cE]: {} };
var bx = { [cx]: t, [cy]: aF, [cE]: {} };
var by = { [cx]: "https://s3.{Region}.{partitionResult#dnsSuffix}", [cy]: aF, [cE]: {} };
var bz = [{ [cv]: "Region" }];
var bA = [{ [cv]: "Endpoint" }];
var bB = [ad];
var bC = [Y];
var bD = [W];
var bE = [Z, ah];
var bF = [{ [ct]: d, [cu]: [{ [cv]: "DisableS3ExpressSessionAuth" }] }, { [ct]: e, [cu]: [{ [cv]: "DisableS3ExpressSessionAuth" }, true] }];
var bG = [ak];
var bH = [an];
var bI = [aa];
var bJ = [X];
var bK = [{ [ct]: k, [cu]: [ad, 6, 14, true], [cw]: "s3expressAvailabilityZoneId" }, { [ct]: k, [cu]: [ad, 14, 16, true], [cw]: "s3expressAvailabilityZoneDelim" }, { [ct]: h, [cu]: [{ [cv]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bL = [{ [cs]: [X], [n]: { [cx]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}", [cy]: al, [cE]: {} }, [cq]: n }, { [n]: { [cx]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}", [cy]: al, [cE]: {} }, [cq]: n }];
var bM = [{ [ct]: k, [cu]: [ad, 6, 15, true], [cw]: "s3expressAvailabilityZoneId" }, { [ct]: k, [cu]: [ad, 15, 17, true], [cw]: "s3expressAvailabilityZoneDelim" }, { [ct]: h, [cu]: [{ [cv]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bN = [{ [ct]: k, [cu]: [ad, 6, 19, true], [cw]: "s3expressAvailabilityZoneId" }, { [ct]: k, [cu]: [ad, 19, 21, true], [cw]: "s3expressAvailabilityZoneDelim" }, { [ct]: h, [cu]: [{ [cv]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bO = [{ [ct]: k, [cu]: [ad, 6, 20, true], [cw]: "s3expressAvailabilityZoneId" }, { [ct]: k, [cu]: [ad, 20, 22, true], [cw]: "s3expressAvailabilityZoneDelim" }, { [ct]: h, [cu]: [{ [cv]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bP = [{ [ct]: k, [cu]: [ad, 6, 26, true], [cw]: "s3expressAvailabilityZoneId" }, { [ct]: k, [cu]: [ad, 26, 28, true], [cw]: "s3expressAvailabilityZoneDelim" }, { [ct]: h, [cu]: [{ [cv]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bQ = [{ [cs]: [X], [n]: { [cx]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}", [cy]: { [cz]: "S3Express", [cA]: [{ [cB]: true, [j]: "sigv4-s3express", [cC]: "s3express", [cD]: "{Region}" }] }, [cE]: {} }, [cq]: n }, { [n]: { [cx]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}", [cy]: { [cz]: "S3Express", [cA]: [{ [cB]: true, [j]: "sigv4-s3express", [cC]: "s3express", [cD]: "{Region}" }] }, [cE]: {} }, [cq]: n }];
var bR = [ad, 0, 7, true];
var bS = [{ [ct]: k, [cu]: [ad, 7, 15, true], [cw]: "s3expressAvailabilityZoneId" }, { [ct]: k, [cu]: [ad, 15, 17, true], [cw]: "s3expressAvailabilityZoneDelim" }, { [ct]: h, [cu]: [{ [cv]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bT = [{ [ct]: k, [cu]: [ad, 7, 16, true], [cw]: "s3expressAvailabilityZoneId" }, { [ct]: k, [cu]: [ad, 16, 18, true], [cw]: "s3expressAvailabilityZoneDelim" }, { [ct]: h, [cu]: [{ [cv]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bU = [{ [ct]: k, [cu]: [ad, 7, 20, true], [cw]: "s3expressAvailabilityZoneId" }, { [ct]: k, [cu]: [ad, 20, 22, true], [cw]: "s3expressAvailabilityZoneDelim" }, { [ct]: h, [cu]: [{ [cv]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bV = [{ [ct]: k, [cu]: [ad, 7, 21, true], [cw]: "s3expressAvailabilityZoneId" }, { [ct]: k, [cu]: [ad, 21, 23, true], [cw]: "s3expressAvailabilityZoneDelim" }, { [ct]: h, [cu]: [{ [cv]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bW = [{ [ct]: k, [cu]: [ad, 7, 27, true], [cw]: "s3expressAvailabilityZoneId" }, { [ct]: k, [cu]: [ad, 27, 29, true], [cw]: "s3expressAvailabilityZoneDelim" }, { [ct]: h, [cu]: [{ [cv]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bX = [ac];
var bY = [{ [ct]: y, [cu]: [{ [cv]: x }, false] }];
var bZ = [{ [ct]: h, [cu]: [{ [cv]: v }, "beta"] }];
var ca = ["*"];
var cb = [{ [ct]: y, [cu]: [{ [cv]: "Region" }, false] }];
var cc = [{ [ct]: h, [cu]: [{ [cv]: "Region" }, "us-east-1"] }];
var cd = [{ [ct]: h, [cu]: [aU, K] }];
var ce = [{ [ct]: i, [cu]: [aT, "resourceId[1]"], [cw]: L }, { [ct]: r, [cu]: [{ [ct]: h, [cu]: [aW, I] }] }];
var cf = [aT, "resourceId[1]"];
var cg = [{ [ct]: r, [cu]: [{ [ct]: h, [cu]: [{ [ct]: i, [cu]: [aT, "region"] }, I] }] }];
var ch = [{ [ct]: r, [cu]: [{ [ct]: d, [cu]: [{ [ct]: i, [cu]: [aT, "resourceId[2]"] }] }] }];
var ci = [aT, "resourceId[2]"];
var cj = [{ [ct]: g, [cu]: [{ [ct]: i, [cu]: [aT, "region"] }], [cw]: "bucketPartition" }];
var ck = [{ [ct]: h, [cu]: [bb, { [ct]: i, [cu]: [{ [cv]: "partitionResult" }, j] }] }];
var cl = [{ [ct]: y, [cu]: [{ [ct]: i, [cu]: [aT, "region"] }, true] }];
var cm = [{ [ct]: y, [cu]: [bc, false] }];
var cn = [{ [ct]: y, [cu]: [aW, false] }];
var co = [{ [ct]: y, [cu]: [{ [cv]: "Region" }, true] }];
var _data = { version: "1.0", parameters: { Bucket: T, Region: T, UseFIPS: U, UseDualStack: U, Endpoint: T, ForcePathStyle: U, Accelerate: U, UseGlobalEndpoint: U, UseObjectLambdaEndpoint: V, Key: T, Prefix: T, CopySource: T, DisableAccessPoints: V, DisableMultiRegionAccessPoints: U, UseArnRegion: V, UseS3ExpressControlEndpoint: V, DisableS3ExpressSessionAuth: V }, [cr]: [{ [cs]: [{ [ct]: d, [cu]: bz }], [cr]: [{ [cs]: [W, X], error: "Accelerate cannot be used with FIPS", [cq]: f }, { [cs]: [Y, Z], error: "Cannot set dual-stack in combination with a custom endpoint.", [cq]: f }, { [cs]: [Z, X], error: "A custom endpoint cannot be combined with FIPS", [cq]: f }, { [cs]: [Z, W], error: "A custom endpoint cannot be combined with S3 Accelerate", [cq]: f }, { [cs]: [X, aa, ab], error: "Partition does not support FIPS", [cq]: f }, { [cs]: [ac, { [ct]: k, [cu]: [ad, 0, a, c], [cw]: l }, { [ct]: h, [cu]: [{ [cv]: l }, "--x-s3"] }], [cr]: [ae, af, ag, { [cs]: [ap, aq], [cr]: [{ [cs]: bI, [cr]: [{ [cs]: [ak, ar], [cr]: [{ [cs]: bJ, endpoint: { [cx]: "https://s3express-control-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cy]: al, [cE]: am }, [cq]: n }, { endpoint: { [cx]: "https://s3express-control.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cy]: al, [cE]: am }, [cq]: n }], [cq]: o }], [cq]: o }], [cq]: o }, { [cs]: bH, [cr]: [{ [cs]: bI, [cr]: [{ [cs]: bF, [cr]: [{ [cs]: bK, [cr]: bL, [cq]: o }, { [cs]: bM, [cr]: bL, [cq]: o }, { [cs]: bN, [cr]: bL, [cq]: o }, { [cs]: bO, [cr]: bL, [cq]: o }, { [cs]: bP, [cr]: bL, [cq]: o }, as], [cq]: o }, { [cs]: bK, [cr]: bQ, [cq]: o }, { [cs]: bM, [cr]: bQ, [cq]: o }, { [cs]: bN, [cr]: bQ, [cq]: o }, { [cs]: bO, [cr]: bQ, [cq]: o }, { [cs]: bP, [cr]: bQ, [cq]: o }, as], [cq]: o }], [cq]: o }, ao], [cq]: o }, { [cs]: [ac, { [ct]: k, [cu]: bR, [cw]: s }, { [ct]: h, [cu]: [{ [cv]: s }, "--xa-s3"] }], [cr]: [ae, af, ag, { [cs]: bH, [cr]: [{ [cs]: bI, [cr]: [{ [cs]: bF, [cr]: [{ [cs]: bS, [cr]: bL, [cq]: o }, { [cs]: bT, [cr]: bL, [cq]: o }, { [cs]: bU, [cr]: bL, [cq]: o }, { [cs]: bV, [cr]: bL, [cq]: o }, { [cs]: bW, [cr]: bL, [cq]: o }, as], [cq]: o }, { [cs]: bS, [cr]: bQ, [cq]: o }, { [cs]: bT, [cr]: bQ, [cq]: o }, { [cs]: bU, [cr]: bQ, [cq]: o }, { [cs]: bV, [cr]: bQ, [cq]: o }, { [cs]: bW, [cr]: bQ, [cq]: o }, as], [cq]: o }], [cq]: o }, ao], [cq]: o }, { [cs]: [at, ap, aq], [cr]: [{ [cs]: bI, [cr]: [{ [cs]: bE, endpoint: { [cx]: t, [cy]: al, [cE]: am }, [cq]: n }, { [cs]: bJ, endpoint: { [cx]: "https://s3express-control-fips.{Region}.{partitionResult#dnsSuffix}", [cy]: al, [cE]: am }, [cq]: n }, { endpoint: { [cx]: "https://s3express-control.{Region}.{partitionResult#dnsSuffix}", [cy]: al, [cE]: am }, [cq]: n }], [cq]: o }], [cq]: o }, { [cs]: [ac, { [ct]: k, [cu]: [ad, 49, 50, c], [cw]: u }, { [ct]: k, [cu]: [ad, 8, 12, c], [cw]: v }, { [ct]: k, [cu]: bR, [cw]: w }, { [ct]: k, [cu]: [ad, 32, 49, c], [cw]: x }, { [ct]: g, [cu]: bz, [cw]: "regionPartition" }, { [ct]: h, [cu]: [{ [cv]: w }, "--op-s3"] }], [cr]: [{ [cs]: bY, [cr]: [{ [cs]: [{ [ct]: h, [cu]: [au, "e"] }], [cr]: [{ [cs]: bZ, [cr]: [av, { [cs]: bE, endpoint: { [cx]: "https://{Bucket}.ec2.{url#authority}", [cy]: aw, [cE]: am }, [cq]: n }], [cq]: o }, { endpoint: { [cx]: "https://{Bucket}.ec2.s3-outposts.{Region}.{regionPartition#dnsSuffix}", [cy]: aw, [cE]: am }, [cq]: n }], [cq]: o }, { [cs]: [{ [ct]: h, [cu]: [au, "o"] }], [cr]: [{ [cs]: bZ, [cr]: [av, { [cs]: bE, endpoint: { [cx]: "https://{Bucket}.op-{outpostId}.{url#authority}", [cy]: aw, [cE]: am }, [cq]: n }], [cq]: o }, { endpoint: { [cx]: "https://{Bucket}.op-{outpostId}.s3-outposts.{Region}.{regionPartition#dnsSuffix}", [cy]: aw, [cE]: am }, [cq]: n }], [cq]: o }, { error: 'Unrecognized hardware type: "Expected hardware type o or e but got {hardwareType}"', [cq]: f }], [cq]: o }, { error: "Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`.", [cq]: f }], [cq]: o }, { [cs]: bX, [cr]: [{ [cs]: [Z, { [ct]: r, [cu]: [{ [ct]: d, [cu]: [{ [ct]: m, [cu]: bA }] }] }], error: "Custom endpoint `{Endpoint}` was not a valid URI", [cq]: f }, { [cs]: [ax, an], [cr]: [{ [cs]: bI, [cr]: [{ [cs]: cb, [cr]: [{ [cs]: [W, ab], error: "S3 Accelerate cannot be used in this region", [cq]: f }, { [cs]: [Y, X, az, ar, aA], endpoint: { [cx]: "https://{Bucket}.s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [Y, X, az, ar, aC, aD], [cr]: [{ endpoint: aE, [cq]: n }], [cq]: o }, { [cs]: [Y, X, az, ar, aC, aG], endpoint: aE, [cq]: n }, { [cs]: [aH, X, az, ar, aA], endpoint: { [cx]: "https://{Bucket}.s3-fips.us-east-1.{partitionResult#dnsSuffix}", [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aH, X, az, ar, aC, aD], [cr]: [{ endpoint: aI, [cq]: n }], [cq]: o }, { [cs]: [aH, X, az, ar, aC, aG], endpoint: aI, [cq]: n }, { [cs]: [Y, aJ, W, ar, aA], endpoint: { [cx]: "https://{Bucket}.s3-accelerate.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [Y, aJ, W, ar, aC, aD], [cr]: [{ endpoint: aK, [cq]: n }], [cq]: o }, { [cs]: [Y, aJ, W, ar, aC, aG], endpoint: aK, [cq]: n }, { [cs]: [Y, aJ, az, ar, aA], endpoint: { [cx]: "https://{Bucket}.s3.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [Y, aJ, az, ar, aC, aD], [cr]: [{ endpoint: aL, [cq]: n }], [cq]: o }, { [cs]: [Y, aJ, az, ar, aC, aG], endpoint: aL, [cq]: n }, { [cs]: [aH, aJ, az, Z, ah, ai, aA], endpoint: { [cx]: C, [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aH, aJ, az, Z, ah, aM, aA], endpoint: { [cx]: q, [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aH, aJ, az, Z, ah, ai, aC, aD], [cr]: [{ [cs]: cc, endpoint: aN, [cq]: n }, { endpoint: aN, [cq]: n }], [cq]: o }, { [cs]: [aH, aJ, az, Z, ah, aM, aC, aD], [cr]: [{ [cs]: cc, endpoint: aO, [cq]: n }, aP], [cq]: o }, { [cs]: [aH, aJ, az, Z, ah, ai, aC, aG], endpoint: aN, [cq]: n }, { [cs]: [aH, aJ, az, Z, ah, aM, aC, aG], endpoint: aO, [cq]: n }, { [cs]: [aH, aJ, W, ar, aA], endpoint: { [cx]: D, [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aH, aJ, W, ar, aC, aD], [cr]: [{ [cs]: cc, endpoint: aQ, [cq]: n }, { endpoint: aQ, [cq]: n }], [cq]: o }, { [cs]: [aH, aJ, W, ar, aC, aG], endpoint: aQ, [cq]: n }, { [cs]: [aH, aJ, az, ar, aA], endpoint: { [cx]: E, [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aH, aJ, az, ar, aC, aD], [cr]: [{ [cs]: cc, endpoint: { [cx]: E, [cy]: aF, [cE]: am }, [cq]: n }, { endpoint: aR, [cq]: n }], [cq]: o }, { [cs]: [aH, aJ, az, ar, aC, aG], endpoint: aR, [cq]: n }], [cq]: o }, aS], [cq]: o }], [cq]: o }, { [cs]: [Z, ah, { [ct]: h, [cu]: [{ [ct]: i, [cu]: [aj, "scheme"] }, "http"] }, { [ct]: p, [cu]: [ad, c] }, ax, aJ, aH, az], [cr]: [{ [cs]: bI, [cr]: [{ [cs]: cb, [cr]: [aP], [cq]: o }, aS], [cq]: o }], [cq]: o }, { [cs]: [ax, { [ct]: F, [cu]: bB, [cw]: G }], [cr]: [{ [cs]: [{ [ct]: i, [cu]: [aT, "resourceId[0]"], [cw]: H }, { [ct]: r, [cu]: [{ [ct]: h, [cu]: [aU, I] }] }], [cr]: [{ [cs]: [{ [ct]: h, [cu]: [aV, J] }], [cr]: [{ [cs]: cd, [cr]: [{ [cs]: ce, [cr]: [aX, aY, { [cs]: cg, [cr]: [aZ, { [cs]: ch, [cr]: [ba, { [cs]: cj, [cr]: [{ [cs]: bI, [cr]: [{ [cs]: ck, [cr]: [{ [cs]: cl, [cr]: [{ [cs]: [{ [ct]: h, [cu]: [bc, I] }], error: "Invalid ARN: Missing account id", [cq]: f }, { [cs]: cm, [cr]: [{ [cs]: cn, [cr]: [{ [cs]: bE, endpoint: { [cx]: M, [cy]: bd, [cE]: am }, [cq]: n }, { [cs]: bJ, endpoint: { [cx]: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cy]: bd, [cE]: am }, [cq]: n }, { endpoint: { [cx]: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cy]: bd, [cE]: am }, [cq]: n }], [cq]: o }, be], [cq]: o }, bf], [cq]: o }, bg], [cq]: o }, bh], [cq]: o }], [cq]: o }], [cq]: o }, bi], [cq]: o }, { error: "Invalid ARN: bucket ARN is missing a region", [cq]: f }], [cq]: o }, bj], [cq]: o }, { error: "Invalid ARN: Object Lambda ARNs only support `accesspoint` arn types, but found: `{arnType}`", [cq]: f }], [cq]: o }, { [cs]: cd, [cr]: [{ [cs]: ce, [cr]: [{ [cs]: cg, [cr]: [{ [cs]: cd, [cr]: [{ [cs]: cg, [cr]: [aZ, { [cs]: ch, [cr]: [ba, { [cs]: cj, [cr]: [{ [cs]: bI, [cr]: [{ [cs]: [{ [ct]: h, [cu]: [bb, "{partitionResult#name}"] }], [cr]: [{ [cs]: cl, [cr]: [{ [cs]: [{ [ct]: h, [cu]: [aV, B] }], [cr]: [{ [cs]: cm, [cr]: [{ [cs]: cn, [cr]: [{ [cs]: bD, error: "Access Points do not support S3 Accelerate", [cq]: f }, { [cs]: [X, Y], endpoint: { [cx]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cy]: bk, [cE]: am }, [cq]: n }, { [cs]: [X, aH], endpoint: { [cx]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cy]: bk, [cE]: am }, [cq]: n }, { [cs]: [aJ, Y], endpoint: { [cx]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cy]: bk, [cE]: am }, [cq]: n }, { [cs]: [aJ, aH, Z, ah], endpoint: { [cx]: M, [cy]: bk, [cE]: am }, [cq]: n }, { [cs]: [aJ, aH], endpoint: { [cx]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cy]: bk, [cE]: am }, [cq]: n }], [cq]: o }, be], [cq]: o }, bf], [cq]: o }, { error: "Invalid ARN: The ARN was not for the S3 service, found: {bucketArn#service}", [cq]: f }], [cq]: o }, bg], [cq]: o }, bh], [cq]: o }], [cq]: o }], [cq]: o }, bi], [cq]: o }], [cq]: o }], [cq]: o }, { [cs]: [{ [ct]: y, [cu]: [aW, c] }], [cr]: [{ [cs]: bC, error: "S3 MRAP does not support dual-stack", [cq]: f }, { [cs]: bJ, error: "S3 MRAP does not support FIPS", [cq]: f }, { [cs]: bD, error: "S3 MRAP does not support S3 Accelerate", [cq]: f }, { [cs]: [{ [ct]: e, [cu]: [{ [cv]: "DisableMultiRegionAccessPoints" }, c] }], error: "Invalid configuration: Multi-Region Access Point ARNs are disabled.", [cq]: f }, { [cs]: [{ [ct]: g, [cu]: bz, [cw]: N }], [cr]: [{ [cs]: [{ [ct]: h, [cu]: [{ [ct]: i, [cu]: [{ [cv]: N }, j] }, { [ct]: i, [cu]: [aT, "partition"] }] }], [cr]: [{ endpoint: { [cx]: "https://{accessPointName}.accesspoint.s3-global.{mrapPartition#dnsSuffix}", [cy]: { [cA]: [{ [cB]: c, name: z, [cC]: B, [cF]: ca }] }, [cE]: am }, [cq]: n }], [cq]: o }, { error: "Client was configured for partition `{mrapPartition#name}` but bucket referred to partition `{bucketArn#partition}`", [cq]: f }], [cq]: o }], [cq]: o }, { error: "Invalid Access Point Name", [cq]: f }], [cq]: o }, bj], [cq]: o }, { [cs]: [{ [ct]: h, [cu]: [aV, A] }], [cr]: [{ [cs]: bC, error: "S3 Outposts does not support Dual-stack", [cq]: f }, { [cs]: bJ, error: "S3 Outposts does not support FIPS", [cq]: f }, { [cs]: bD, error: "S3 Outposts does not support S3 Accelerate", [cq]: f }, { [cs]: [{ [ct]: d, [cu]: [{ [ct]: i, [cu]: [aT, "resourceId[4]"] }] }], error: "Invalid Arn: Outpost Access Point ARN contains sub resources", [cq]: f }, { [cs]: [{ [ct]: i, [cu]: cf, [cw]: x }], [cr]: [{ [cs]: bY, [cr]: [ba, { [cs]: cj, [cr]: [{ [cs]: bI, [cr]: [{ [cs]: ck, [cr]: [{ [cs]: cl, [cr]: [{ [cs]: cm, [cr]: [{ [cs]: [{ [ct]: i, [cu]: ci, [cw]: O }], [cr]: [{ [cs]: [{ [ct]: i, [cu]: [aT, "resourceId[3]"], [cw]: L }], [cr]: [{ [cs]: [{ [ct]: h, [cu]: [{ [cv]: O }, K] }], [cr]: [{ [cs]: bE, endpoint: { [cx]: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.{url#authority}", [cy]: bl, [cE]: am }, [cq]: n }, { endpoint: { [cx]: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.s3-outposts.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cy]: bl, [cE]: am }, [cq]: n }], [cq]: o }, { error: "Expected an outpost type `accesspoint`, found {outpostType}", [cq]: f }], [cq]: o }, { error: "Invalid ARN: expected an access point name", [cq]: f }], [cq]: o }, { error: "Invalid ARN: Expected a 4-component resource", [cq]: f }], [cq]: o }, bf], [cq]: o }, bg], [cq]: o }, bh], [cq]: o }], [cq]: o }], [cq]: o }, { error: "Invalid ARN: The outpost Id may only contain a-z, A-Z, 0-9 and `-`. Found: `{outpostId}`", [cq]: f }], [cq]: o }, { error: "Invalid ARN: The Outpost Id was not set", [cq]: f }], [cq]: o }, { error: "Invalid ARN: Unrecognized format: {Bucket} (type: {arnType})", [cq]: f }], [cq]: o }, { error: "Invalid ARN: No ARN type specified", [cq]: f }], [cq]: o }, { [cs]: [{ [ct]: k, [cu]: [ad, 0, 4, b], [cw]: P }, { [ct]: h, [cu]: [{ [cv]: P }, "arn:"] }, { [ct]: r, [cu]: [{ [ct]: d, [cu]: [bm] }] }], error: "Invalid ARN: `{Bucket}` was not a valid ARN", [cq]: f }, { [cs]: [{ [ct]: e, [cu]: [ay, c] }, bm], error: "Path-style addressing cannot be used with ARN buckets", [cq]: f }, { [cs]: bG, [cr]: [{ [cs]: bI, [cr]: [{ [cs]: [az], [cr]: [{ [cs]: [Y, ar, X, aA], endpoint: { [cx]: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [Y, ar, X, aC, aD], [cr]: [{ endpoint: bn, [cq]: n }], [cq]: o }, { [cs]: [Y, ar, X, aC, aG], endpoint: bn, [cq]: n }, { [cs]: [aH, ar, X, aA], endpoint: { [cx]: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aH, ar, X, aC, aD], [cr]: [{ endpoint: bo, [cq]: n }], [cq]: o }, { [cs]: [aH, ar, X, aC, aG], endpoint: bo, [cq]: n }, { [cs]: [Y, ar, aJ, aA], endpoint: { [cx]: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [Y, ar, aJ, aC, aD], [cr]: [{ endpoint: bp, [cq]: n }], [cq]: o }, { [cs]: [Y, ar, aJ, aC, aG], endpoint: bp, [cq]: n }, { [cs]: [aH, Z, ah, aJ, aA], endpoint: { [cx]: Q, [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aH, Z, ah, aJ, aC, aD], [cr]: [{ [cs]: cc, endpoint: bq, [cq]: n }, { endpoint: bq, [cq]: n }], [cq]: o }, { [cs]: [aH, Z, ah, aJ, aC, aG], endpoint: bq, [cq]: n }, { [cs]: [aH, ar, aJ, aA], endpoint: { [cx]: R, [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aH, ar, aJ, aC, aD], [cr]: [{ [cs]: cc, endpoint: { [cx]: R, [cy]: aF, [cE]: am }, [cq]: n }, { endpoint: br, [cq]: n }], [cq]: o }, { [cs]: [aH, ar, aJ, aC, aG], endpoint: br, [cq]: n }], [cq]: o }, { error: "Path-style addressing cannot be used with S3 Accelerate", [cq]: f }], [cq]: o }], [cq]: o }], [cq]: o }, { [cs]: [{ [ct]: d, [cu]: [bs] }, { [ct]: e, [cu]: [bs, c] }], [cr]: [{ [cs]: bI, [cr]: [{ [cs]: co, [cr]: [aX, aY, { [cs]: bE, endpoint: { [cx]: t, [cy]: bt, [cE]: am }, [cq]: n }, { [cs]: bJ, endpoint: { [cx]: "https://s3-object-lambda-fips.{Region}.{partitionResult#dnsSuffix}", [cy]: bt, [cE]: am }, [cq]: n }, { endpoint: { [cx]: "https://s3-object-lambda.{Region}.{partitionResult#dnsSuffix}", [cy]: bt, [cE]: am }, [cq]: n }], [cq]: o }, aS], [cq]: o }], [cq]: o }, { [cs]: [at], [cr]: [{ [cs]: bI, [cr]: [{ [cs]: co, [cr]: [{ [cs]: [X, Y, ar, aA], endpoint: { [cx]: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [X, Y, ar, aC, aD], [cr]: [{ endpoint: bu, [cq]: n }], [cq]: o }, { [cs]: [X, Y, ar, aC, aG], endpoint: bu, [cq]: n }, { [cs]: [X, aH, ar, aA], endpoint: { [cx]: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}", [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [X, aH, ar, aC, aD], [cr]: [{ endpoint: bv, [cq]: n }], [cq]: o }, { [cs]: [X, aH, ar, aC, aG], endpoint: bv, [cq]: n }, { [cs]: [aJ, Y, ar, aA], endpoint: { [cx]: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aJ, Y, ar, aC, aD], [cr]: [{ endpoint: bw, [cq]: n }], [cq]: o }, { [cs]: [aJ, Y, ar, aC, aG], endpoint: bw, [cq]: n }, { [cs]: [aJ, aH, Z, ah, aA], endpoint: { [cx]: t, [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aJ, aH, Z, ah, aC, aD], [cr]: [{ [cs]: cc, endpoint: bx, [cq]: n }, { endpoint: bx, [cq]: n }], [cq]: o }, { [cs]: [aJ, aH, Z, ah, aC, aG], endpoint: bx, [cq]: n }, { [cs]: [aJ, aH, ar, aA], endpoint: { [cx]: S, [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aJ, aH, ar, aC, aD], [cr]: [{ [cs]: cc, endpoint: { [cx]: S, [cy]: aF, [cE]: am }, [cq]: n }, { endpoint: by, [cq]: n }], [cq]: o }, { [cs]: [aJ, aH, ar, aC, aG], endpoint: by, [cq]: n }], [cq]: o }, aS], [cq]: o }], [cq]: o }], [cq]: o }, { error: "A region must be set when sending requests to S3.", [cq]: f }] };
var ruleSet = _data;

// node_modules/@aws-sdk/client-s3/dist-es/endpoint/endpointResolver.js
var cache = new EndpointCache({
  size: 50,
  params: [
    "Accelerate",
    "Bucket",
    "DisableAccessPoints",
    "DisableMultiRegionAccessPoints",
    "DisableS3ExpressSessionAuth",
    "Endpoint",
    "ForcePathStyle",
    "Region",
    "UseArnRegion",
    "UseDualStack",
    "UseFIPS",
    "UseGlobalEndpoint",
    "UseObjectLambdaEndpoint",
    "UseS3ExpressControlEndpoint"
  ]
});
var defaultEndpointResolver = (endpointParams, context = {}) => {
  return cache.get(endpointParams, () => resolveEndpoint(ruleSet, {
    endpointParams,
    logger: context.logger
  }));
};
customEndpointFunctions.aws = awsEndpointFunctions;

// node_modules/@aws-sdk/client-s3/dist-es/auth/httpAuthSchemeProvider.js
var createEndpointRuleSetHttpAuthSchemeParametersProvider = (defaultHttpAuthSchemeParametersProvider) => async (config, context, input) => {
  if (!input) {
    throw new Error(`Could not find \`input\` for \`defaultEndpointRuleSetHttpAuthSchemeParametersProvider\``);
  }
  const defaultParameters = await defaultHttpAuthSchemeParametersProvider(config, context, input);
  const instructionsFn = getSmithyContext(context)?.commandInstance?.constructor?.getEndpointParameterInstructions;
  if (!instructionsFn) {
    throw new Error(`getEndpointParameterInstructions() is not defined on \`${context.commandName}\``);
  }
  const endpointParameters = await resolveParams(input, { getEndpointParameterInstructions: instructionsFn }, config);
  return Object.assign(defaultParameters, endpointParameters);
};
var _defaultS3HttpAuthSchemeParametersProvider = async (config, context, input) => {
  return {
    operation: getSmithyContext(context).operation,
    region: await normalizeProvider(config.region)() || (() => {
      throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
    })()
  };
};
var defaultS3HttpAuthSchemeParametersProvider = createEndpointRuleSetHttpAuthSchemeParametersProvider(_defaultS3HttpAuthSchemeParametersProvider);
function createAwsAuthSigv4HttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "s3",
      region: authParameters.region
    },
    propertiesExtractor: (config, context) => ({
      signingProperties: {
        config,
        context
      }
    })
  };
}
function createAwsAuthSigv4aHttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4a",
    signingProperties: {
      name: "s3",
      region: authParameters.region
    },
    propertiesExtractor: (config, context) => ({
      signingProperties: {
        config,
        context
      }
    })
  };
}
var createEndpointRuleSetHttpAuthSchemeProvider = (defaultEndpointResolver2, defaultHttpAuthSchemeResolver, createHttpAuthOptionFunctions) => {
  const endpointRuleSetHttpAuthSchemeProvider = (authParameters) => {
    const endpoint = defaultEndpointResolver2(authParameters);
    const authSchemes = endpoint.properties?.authSchemes;
    if (!authSchemes) {
      return defaultHttpAuthSchemeResolver(authParameters);
    }
    const options = [];
    for (const scheme of authSchemes) {
      const { name: resolvedName, properties = {}, ...rest } = scheme;
      const name = resolvedName.toLowerCase();
      if (resolvedName !== name) {
        console.warn(`HttpAuthScheme has been normalized with lowercasing: \`${resolvedName}\` to \`${name}\``);
      }
      let schemeId;
      if (name === "sigv4a") {
        schemeId = "aws.auth#sigv4a";
        const sigv4Present = authSchemes.find((s2) => {
          const name2 = s2.name.toLowerCase();
          return name2 !== "sigv4a" && name2.startsWith("sigv4");
        });
        if (!signatureV4CrtContainer.CrtSignerV4 && sigv4Present) {
          continue;
        }
      } else if (name.startsWith("sigv4")) {
        schemeId = "aws.auth#sigv4";
      } else {
        throw new Error(`Unknown HttpAuthScheme found in \`@smithy.rules#endpointRuleSet\`: \`${name}\``);
      }
      const createOption = createHttpAuthOptionFunctions[schemeId];
      if (!createOption) {
        throw new Error(`Could not find HttpAuthOption create function for \`${schemeId}\``);
      }
      const option = createOption(authParameters);
      option.schemeId = schemeId;
      option.signingProperties = { ...option.signingProperties || {}, ...rest, ...properties };
      options.push(option);
    }
    return options;
  };
  return endpointRuleSetHttpAuthSchemeProvider;
};
var _defaultS3HttpAuthSchemeProvider = (authParameters) => {
  const options = [];
  switch (authParameters.operation) {
    default: {
      options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
      options.push(createAwsAuthSigv4aHttpAuthOption(authParameters));
    }
  }
  return options;
};
var defaultS3HttpAuthSchemeProvider = createEndpointRuleSetHttpAuthSchemeProvider(defaultEndpointResolver, _defaultS3HttpAuthSchemeProvider, {
  "aws.auth#sigv4": createAwsAuthSigv4HttpAuthOption,
  "aws.auth#sigv4a": createAwsAuthSigv4aHttpAuthOption
});
var resolveHttpAuthSchemeConfig = (config) => {
  const config_0 = resolveAwsSdkSigV4Config(config);
  const config_1 = resolveAwsSdkSigV4AConfig(config_0);
  return Object.assign(config_1, {
    authSchemePreference: normalizeProvider(config.authSchemePreference ?? [])
  });
};

// node_modules/@aws-sdk/client-s3/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters = (options) => {
  return Object.assign(options, {
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    forcePathStyle: options.forcePathStyle ?? false,
    useAccelerateEndpoint: options.useAccelerateEndpoint ?? false,
    useGlobalEndpoint: options.useGlobalEndpoint ?? false,
    disableMultiregionAccessPoints: options.disableMultiregionAccessPoints ?? false,
    defaultSigningName: "s3"
  });
};
var commonParams = {
  ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
  UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
  DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
  Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
  DisableS3ExpressSessionAuth: { type: "clientContextParams", name: "disableS3ExpressSessionAuth" },
  UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
};

// node_modules/@aws-sdk/client-s3/dist-es/models/S3ServiceException.js
var S3ServiceException = class _S3ServiceException extends ServiceException {
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, _S3ServiceException.prototype);
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/models/models_0.js
var NoSuchUpload = class _NoSuchUpload extends S3ServiceException {
  name = "NoSuchUpload";
  $fault = "client";
  constructor(opts) {
    super({
      name: "NoSuchUpload",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _NoSuchUpload.prototype);
  }
};
var ObjectNotInActiveTierError = class _ObjectNotInActiveTierError extends S3ServiceException {
  name = "ObjectNotInActiveTierError";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ObjectNotInActiveTierError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ObjectNotInActiveTierError.prototype);
  }
};
var BucketAlreadyExists = class _BucketAlreadyExists extends S3ServiceException {
  name = "BucketAlreadyExists";
  $fault = "client";
  constructor(opts) {
    super({
      name: "BucketAlreadyExists",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _BucketAlreadyExists.prototype);
  }
};
var BucketAlreadyOwnedByYou = class _BucketAlreadyOwnedByYou extends S3ServiceException {
  name = "BucketAlreadyOwnedByYou";
  $fault = "client";
  constructor(opts) {
    super({
      name: "BucketAlreadyOwnedByYou",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _BucketAlreadyOwnedByYou.prototype);
  }
};
var NoSuchBucket = class _NoSuchBucket extends S3ServiceException {
  name = "NoSuchBucket";
  $fault = "client";
  constructor(opts) {
    super({
      name: "NoSuchBucket",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _NoSuchBucket.prototype);
  }
};
var AnalyticsFilter;
(function(AnalyticsFilter2) {
  AnalyticsFilter2.visit = (value, visitor) => {
    if (value.Prefix !== void 0)
      return visitor.Prefix(value.Prefix);
    if (value.Tag !== void 0)
      return visitor.Tag(value.Tag);
    if (value.And !== void 0)
      return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(AnalyticsFilter || (AnalyticsFilter = {}));
var MetricsFilter;
(function(MetricsFilter2) {
  MetricsFilter2.visit = (value, visitor) => {
    if (value.Prefix !== void 0)
      return visitor.Prefix(value.Prefix);
    if (value.Tag !== void 0)
      return visitor.Tag(value.Tag);
    if (value.AccessPointArn !== void 0)
      return visitor.AccessPointArn(value.AccessPointArn);
    if (value.And !== void 0)
      return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(MetricsFilter || (MetricsFilter = {}));
var InvalidObjectState = class _InvalidObjectState extends S3ServiceException {
  name = "InvalidObjectState";
  $fault = "client";
  StorageClass;
  AccessTier;
  constructor(opts) {
    super({
      name: "InvalidObjectState",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidObjectState.prototype);
    this.StorageClass = opts.StorageClass;
    this.AccessTier = opts.AccessTier;
  }
};
var NoSuchKey = class _NoSuchKey extends S3ServiceException {
  name = "NoSuchKey";
  $fault = "client";
  constructor(opts) {
    super({
      name: "NoSuchKey",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _NoSuchKey.prototype);
  }
};
var NotFound = class _NotFound extends S3ServiceException {
  name = "NotFound";
  $fault = "client";
  constructor(opts) {
    super({
      name: "NotFound",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _NotFound.prototype);
  }
};
var SessionCredentialsFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.SecretAccessKey && { SecretAccessKey: SENSITIVE_STRING },
  ...obj.SessionToken && { SessionToken: SENSITIVE_STRING }
});
var CreateSessionOutputFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING },
  ...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING },
  ...obj.Credentials && { Credentials: SessionCredentialsFilterSensitiveLog(obj.Credentials) }
});
var CreateSessionRequestFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING },
  ...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }
});
var GetObjectOutputFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }
});
var GetObjectRequestFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }
});

// node_modules/@aws-sdk/client-s3/dist-es/models/models_1.js
var EncryptionTypeMismatch = class _EncryptionTypeMismatch extends S3ServiceException {
  name = "EncryptionTypeMismatch";
  $fault = "client";
  constructor(opts) {
    super({
      name: "EncryptionTypeMismatch",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _EncryptionTypeMismatch.prototype);
  }
};
var InvalidRequest = class _InvalidRequest extends S3ServiceException {
  name = "InvalidRequest";
  $fault = "client";
  constructor(opts) {
    super({
      name: "InvalidRequest",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidRequest.prototype);
  }
};
var InvalidWriteOffset = class _InvalidWriteOffset extends S3ServiceException {
  name = "InvalidWriteOffset";
  $fault = "client";
  constructor(opts) {
    super({
      name: "InvalidWriteOffset",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidWriteOffset.prototype);
  }
};
var TooManyParts = class _TooManyParts extends S3ServiceException {
  name = "TooManyParts";
  $fault = "client";
  constructor(opts) {
    super({
      name: "TooManyParts",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _TooManyParts.prototype);
  }
};
var ObjectAlreadyInActiveTierError = class _ObjectAlreadyInActiveTierError extends S3ServiceException {
  name = "ObjectAlreadyInActiveTierError";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ObjectAlreadyInActiveTierError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ObjectAlreadyInActiveTierError.prototype);
  }
};
var SelectObjectContentEventStream;
(function(SelectObjectContentEventStream2) {
  SelectObjectContentEventStream2.visit = (value, visitor) => {
    if (value.Records !== void 0)
      return visitor.Records(value.Records);
    if (value.Stats !== void 0)
      return visitor.Stats(value.Stats);
    if (value.Progress !== void 0)
      return visitor.Progress(value.Progress);
    if (value.Cont !== void 0)
      return visitor.Cont(value.Cont);
    if (value.End !== void 0)
      return visitor.End(value.End);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(SelectObjectContentEventStream || (SelectObjectContentEventStream = {}));
var PutObjectOutputFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING },
  ...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }
});
var PutObjectRequestFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING },
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING },
  ...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }
});

// node_modules/@aws-sdk/client-s3/dist-es/protocols/Aws_restXml.js
var se_CreateSessionCommand = async (input, context) => {
  const b2 = requestBuilder(input, context);
  const headers = map({}, isSerializableHeaderValue, {
    [_xacsm]: input[_SM],
    [_xasse]: input[_SSE],
    [_xasseakki]: input[_SSEKMSKI],
    [_xassec]: input[_SSEKMSEC],
    [_xassebke]: [() => isSerializableHeaderValue(input[_BKE]), () => input[_BKE].toString()]
  });
  b2.bp("/");
  b2.p("Bucket", () => input.Bucket, "{Bucket}", false);
  const query = map({
    [_s]: [, ""]
  });
  let body;
  b2.m("GET").h(headers).q(query).b(body);
  return b2.build();
};
var se_GetObjectCommand = async (input, context) => {
  const b2 = requestBuilder(input, context);
  const headers = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM],
    [_ims]: [() => isSerializableHeaderValue(input[_IMSf]), () => dateToUtcString(input[_IMSf]).toString()],
    [_inm]: input[_INM],
    [_ius]: [() => isSerializableHeaderValue(input[_IUS]), () => dateToUtcString(input[_IUS]).toString()],
    [_ra]: input[_R],
    [_xasseca]: input[_SSECA],
    [_xasseck]: input[_SSECK],
    [_xasseckm]: input[_SSECKMD],
    [_xarp]: input[_RP],
    [_xaebo]: input[_EBO],
    [_xacm]: input[_CM]
  });
  b2.bp("/{Key+}");
  b2.p("Bucket", () => input.Bucket, "{Bucket}", false);
  b2.p("Key", () => input.Key, "{Key+}", true);
  const query = map({
    [_xi]: [, "GetObject"],
    [_rcc]: [, input[_RCC]],
    [_rcd]: [, input[_RCD]],
    [_rce]: [, input[_RCE]],
    [_rcl]: [, input[_RCL]],
    [_rct]: [, input[_RCT]],
    [_re]: [() => input.ResponseExpires !== void 0, () => dateToUtcString(input[_RE]).toString()],
    [_vI]: [, input[_VI]],
    [_pN]: [() => input.PartNumber !== void 0, () => input[_PN].toString()]
  });
  let body;
  b2.m("GET").h(headers).q(query).b(body);
  return b2.build();
};
var se_PutObjectCommand = async (input, context) => {
  const b2 = requestBuilder(input, context);
  const headers = map({}, isSerializableHeaderValue, {
    ...input.Metadata !== void 0 && Object.keys(input.Metadata).reduce((acc, suffix) => {
      acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata[suffix];
      return acc;
    }, {}),
    [_ct]: input[_CTo] || "application/octet-stream",
    [_xaa]: input[_ACL],
    [_cc]: input[_CC],
    [_cd]: input[_CD],
    [_ce]: input[_CE],
    [_cl]: input[_CL],
    [_cl_]: [() => isSerializableHeaderValue(input[_CLo]), () => input[_CLo].toString()],
    [_cm]: input[_CMD],
    [_xasca]: input[_CA],
    [_xacc]: input[_CCRC],
    [_xacc_]: input[_CCRCC],
    [_xacc__]: input[_CCRCNVME],
    [_xacs]: input[_CSHA],
    [_xacs_]: input[_CSHAh],
    [_e]: [() => isSerializableHeaderValue(input[_E]), () => dateToUtcString(input[_E]).toString()],
    [_im]: input[_IM],
    [_inm]: input[_INM],
    [_xagfc]: input[_GFC],
    [_xagr]: input[_GR],
    [_xagra]: input[_GRACP],
    [_xagwa]: input[_GWACP],
    [_xawob]: [() => isSerializableHeaderValue(input[_WOB]), () => input[_WOB].toString()],
    [_xasse]: input[_SSE],
    [_xasc]: input[_SC],
    [_xawrl]: input[_WRL],
    [_xasseca]: input[_SSECA],
    [_xasseck]: input[_SSECK],
    [_xasseckm]: input[_SSECKMD],
    [_xasseakki]: input[_SSEKMSKI],
    [_xassec]: input[_SSEKMSEC],
    [_xassebke]: [() => isSerializableHeaderValue(input[_BKE]), () => input[_BKE].toString()],
    [_xarp]: input[_RP],
    [_xat]: input[_T],
    [_xaolm]: input[_OLM],
    [_xaolrud]: [() => isSerializableHeaderValue(input[_OLRUD]), () => serializeDateTime(input[_OLRUD]).toString()],
    [_xaollh]: input[_OLLHS],
    [_xaebo]: input[_EBO]
  });
  b2.bp("/{Key+}");
  b2.p("Bucket", () => input.Bucket, "{Bucket}", false);
  b2.p("Key", () => input.Key, "{Key+}", true);
  const query = map({
    [_xi]: [, "PutObject"]
  });
  let body;
  let contents;
  if (input.Body !== void 0) {
    contents = input.Body;
    body = contents;
  }
  b2.m("PUT").h(headers).q(query).b(body);
  return b2.build();
};
var de_CreateSessionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata(output),
    [_SSE]: [, output.headers[_xasse]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_SSEKMSEC]: [, output.headers[_xassec]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => parseBoolean(output.headers[_xassebke])]
  });
  const data = expectNonNull(expectObject(await parseXmlBody(output.body, context)), "body");
  if (data[_C] != null) {
    contents[_C] = de_SessionCredentials(data[_C], context);
  }
  return contents;
};
var de_GetObjectCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata(output),
    [_DM]: [() => void 0 !== output.headers[_xadm], () => parseBoolean(output.headers[_xadm])],
    [_AR]: [, output.headers[_ar]],
    [_Exp]: [, output.headers[_xae]],
    [_Re]: [, output.headers[_xar]],
    [_LM]: [() => void 0 !== output.headers[_lm], () => expectNonNull(parseRfc7231DateTime(output.headers[_lm]))],
    [_CLo]: [() => void 0 !== output.headers[_cl_], () => strictParseLong(output.headers[_cl_])],
    [_ETa]: [, output.headers[_eta]],
    [_CCRC]: [, output.headers[_xacc]],
    [_CCRCC]: [, output.headers[_xacc_]],
    [_CCRCNVME]: [, output.headers[_xacc__]],
    [_CSHA]: [, output.headers[_xacs]],
    [_CSHAh]: [, output.headers[_xacs_]],
    [_CT]: [, output.headers[_xact]],
    [_MM]: [() => void 0 !== output.headers[_xamm], () => strictParseInt32(output.headers[_xamm])],
    [_VI]: [, output.headers[_xavi]],
    [_CC]: [, output.headers[_cc]],
    [_CD]: [, output.headers[_cd]],
    [_CE]: [, output.headers[_ce]],
    [_CL]: [, output.headers[_cl]],
    [_CR]: [, output.headers[_cr]],
    [_CTo]: [, output.headers[_ct]],
    [_E]: [() => void 0 !== output.headers[_e], () => expectNonNull(parseRfc7231DateTime(output.headers[_e]))],
    [_ES]: [, output.headers[_ex]],
    [_WRL]: [, output.headers[_xawrl]],
    [_SSE]: [, output.headers[_xasse]],
    [_SSECA]: [, output.headers[_xasseca]],
    [_SSECKMD]: [, output.headers[_xasseckm]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => parseBoolean(output.headers[_xassebke])],
    [_SC]: [, output.headers[_xasc]],
    [_RC]: [, output.headers[_xarc]],
    [_RS]: [, output.headers[_xars]],
    [_PC]: [() => void 0 !== output.headers[_xampc], () => strictParseInt32(output.headers[_xampc])],
    [_TC]: [() => void 0 !== output.headers[_xatc], () => strictParseInt32(output.headers[_xatc])],
    [_OLM]: [, output.headers[_xaolm]],
    [_OLRUD]: [
      () => void 0 !== output.headers[_xaolrud],
      () => expectNonNull(parseRfc3339DateTimeWithOffset(output.headers[_xaolrud]))
    ],
    [_OLLHS]: [, output.headers[_xaollh]],
    Metadata: [
      ,
      Object.keys(output.headers).filter((header) => header.startsWith("x-amz-meta-")).reduce((acc, header) => {
        acc[header.substring(11)] = output.headers[header];
        return acc;
      }, {})
    ]
  });
  const data = output.body;
  context.sdkStreamMixin(data);
  contents.Body = data;
  return contents;
};
var de_PutObjectCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata(output),
    [_Exp]: [, output.headers[_xae]],
    [_ETa]: [, output.headers[_eta]],
    [_CCRC]: [, output.headers[_xacc]],
    [_CCRCC]: [, output.headers[_xacc_]],
    [_CCRCNVME]: [, output.headers[_xacc__]],
    [_CSHA]: [, output.headers[_xacs]],
    [_CSHAh]: [, output.headers[_xacs_]],
    [_CT]: [, output.headers[_xact]],
    [_SSE]: [, output.headers[_xasse]],
    [_VI]: [, output.headers[_xavi]],
    [_SSECA]: [, output.headers[_xasseca]],
    [_SSECKMD]: [, output.headers[_xasseckm]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_SSEKMSEC]: [, output.headers[_xassec]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => parseBoolean(output.headers[_xassebke])],
    [_Si]: [() => void 0 !== output.headers[_xaos], () => strictParseLong(output.headers[_xaos])],
    [_RC]: [, output.headers[_xarc]]
  });
  await collectBody(output.body, context);
  return contents;
};
var de_CommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseXmlErrorBody(output.body, context)
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchUpload":
    case "com.amazonaws.s3#NoSuchUpload":
      throw await de_NoSuchUploadRes(parsedOutput, context);
    case "ObjectNotInActiveTierError":
    case "com.amazonaws.s3#ObjectNotInActiveTierError":
      throw await de_ObjectNotInActiveTierErrorRes(parsedOutput, context);
    case "BucketAlreadyExists":
    case "com.amazonaws.s3#BucketAlreadyExists":
      throw await de_BucketAlreadyExistsRes(parsedOutput, context);
    case "BucketAlreadyOwnedByYou":
    case "com.amazonaws.s3#BucketAlreadyOwnedByYou":
      throw await de_BucketAlreadyOwnedByYouRes(parsedOutput, context);
    case "NoSuchBucket":
    case "com.amazonaws.s3#NoSuchBucket":
      throw await de_NoSuchBucketRes(parsedOutput, context);
    case "InvalidObjectState":
    case "com.amazonaws.s3#InvalidObjectState":
      throw await de_InvalidObjectStateRes(parsedOutput, context);
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      throw await de_NoSuchKeyRes(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.s3#NotFound":
      throw await de_NotFoundRes(parsedOutput, context);
    case "EncryptionTypeMismatch":
    case "com.amazonaws.s3#EncryptionTypeMismatch":
      throw await de_EncryptionTypeMismatchRes(parsedOutput, context);
    case "InvalidRequest":
    case "com.amazonaws.s3#InvalidRequest":
      throw await de_InvalidRequestRes(parsedOutput, context);
    case "InvalidWriteOffset":
    case "com.amazonaws.s3#InvalidWriteOffset":
      throw await de_InvalidWriteOffsetRes(parsedOutput, context);
    case "TooManyParts":
    case "com.amazonaws.s3#TooManyParts":
      throw await de_TooManyPartsRes(parsedOutput, context);
    case "ObjectAlreadyInActiveTierError":
    case "com.amazonaws.s3#ObjectAlreadyInActiveTierError":
      throw await de_ObjectAlreadyInActiveTierErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode
      });
  }
};
var throwDefaultError = withBaseException(S3ServiceException);
var de_BucketAlreadyExistsRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new BucketAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_BucketAlreadyOwnedByYouRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new BucketAlreadyOwnedByYou({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_EncryptionTypeMismatchRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new EncryptionTypeMismatch({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidObjectStateRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  if (data[_AT] != null) {
    contents[_AT] = expectString(data[_AT]);
  }
  if (data[_SC] != null) {
    contents[_SC] = expectString(data[_SC]);
  }
  const exception = new InvalidObjectState({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidRequestRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new InvalidRequest({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidWriteOffsetRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new InvalidWriteOffset({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_NoSuchBucketRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NoSuchBucket({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_NoSuchKeyRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NoSuchKey({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_NoSuchUploadRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NoSuchUpload({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_NotFoundRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_ObjectAlreadyInActiveTierErrorRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new ObjectAlreadyInActiveTierError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_ObjectNotInActiveTierErrorRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new ObjectNotInActiveTierError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_TooManyPartsRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new TooManyParts({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_SessionCredentials = (output, context) => {
  const contents = {};
  if (output[_AKI] != null) {
    contents[_AKI] = expectString(output[_AKI]);
  }
  if (output[_SAK] != null) {
    contents[_SAK] = expectString(output[_SAK]);
  }
  if (output[_ST] != null) {
    contents[_ST] = expectString(output[_ST]);
  }
  if (output[_Exp] != null) {
    contents[_Exp] = expectNonNull(parseRfc3339DateTimeWithOffset(output[_Exp]));
  }
  return contents;
};
var deserializeMetadata = (output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
});
var _ACL = "ACL";
var _AKI = "AccessKeyId";
var _AR = "AcceptRanges";
var _AT = "AccessTier";
var _BKE = "BucketKeyEnabled";
var _C = "Credentials";
var _CA = "ChecksumAlgorithm";
var _CC = "CacheControl";
var _CCRC = "ChecksumCRC32";
var _CCRCC = "ChecksumCRC32C";
var _CCRCNVME = "ChecksumCRC64NVME";
var _CD = "ContentDisposition";
var _CE = "ContentEncoding";
var _CL = "ContentLanguage";
var _CLo = "ContentLength";
var _CM = "ChecksumMode";
var _CMD = "ContentMD5";
var _CR = "ContentRange";
var _CSHA = "ChecksumSHA1";
var _CSHAh = "ChecksumSHA256";
var _CT = "ChecksumType";
var _CTo = "ContentType";
var _DM = "DeleteMarker";
var _E = "Expires";
var _EBO = "ExpectedBucketOwner";
var _ES = "ExpiresString";
var _ETa = "ETag";
var _Exp = "Expiration";
var _GFC = "GrantFullControl";
var _GR = "GrantRead";
var _GRACP = "GrantReadACP";
var _GWACP = "GrantWriteACP";
var _IM = "IfMatch";
var _IMSf = "IfModifiedSince";
var _INM = "IfNoneMatch";
var _IUS = "IfUnmodifiedSince";
var _LM = "LastModified";
var _MM = "MissingMeta";
var _OLLHS = "ObjectLockLegalHoldStatus";
var _OLM = "ObjectLockMode";
var _OLRUD = "ObjectLockRetainUntilDate";
var _PC = "PartsCount";
var _PN = "PartNumber";
var _R = "Range";
var _RC = "RequestCharged";
var _RCC = "ResponseCacheControl";
var _RCD = "ResponseContentDisposition";
var _RCE = "ResponseContentEncoding";
var _RCL = "ResponseContentLanguage";
var _RCT = "ResponseContentType";
var _RE = "ResponseExpires";
var _RP = "RequestPayer";
var _RS = "ReplicationStatus";
var _Re = "Restore";
var _SAK = "SecretAccessKey";
var _SC = "StorageClass";
var _SM = "SessionMode";
var _SSE = "ServerSideEncryption";
var _SSECA = "SSECustomerAlgorithm";
var _SSECK = "SSECustomerKey";
var _SSECKMD = "SSECustomerKeyMD5";
var _SSEKMSEC = "SSEKMSEncryptionContext";
var _SSEKMSKI = "SSEKMSKeyId";
var _ST = "SessionToken";
var _Si = "Size";
var _T = "Tagging";
var _TC = "TagCount";
var _VI = "VersionId";
var _WOB = "WriteOffsetBytes";
var _WRL = "WebsiteRedirectLocation";
var _ar = "accept-ranges";
var _cc = "cache-control";
var _cd = "content-disposition";
var _ce = "content-encoding";
var _cl = "content-language";
var _cl_ = "content-length";
var _cm = "content-md5";
var _cr = "content-range";
var _ct = "content-type";
var _e = "expires";
var _eta = "etag";
var _ex = "expiresstring";
var _im = "if-match";
var _ims = "if-modified-since";
var _inm = "if-none-match";
var _ius = "if-unmodified-since";
var _lm = "last-modified";
var _pN = "partNumber";
var _ra = "range";
var _rcc = "response-cache-control";
var _rcd = "response-content-disposition";
var _rce = "response-content-encoding";
var _rcl = "response-content-language";
var _rct = "response-content-type";
var _re = "response-expires";
var _s = "session";
var _vI = "versionId";
var _xaa = "x-amz-acl";
var _xacc = "x-amz-checksum-crc32";
var _xacc_ = "x-amz-checksum-crc32c";
var _xacc__ = "x-amz-checksum-crc64nvme";
var _xacm = "x-amz-checksum-mode";
var _xacs = "x-amz-checksum-sha1";
var _xacs_ = "x-amz-checksum-sha256";
var _xacsm = "x-amz-create-session-mode";
var _xact = "x-amz-checksum-type";
var _xadm = "x-amz-delete-marker";
var _xae = "x-amz-expiration";
var _xaebo = "x-amz-expected-bucket-owner";
var _xagfc = "x-amz-grant-full-control";
var _xagr = "x-amz-grant-read";
var _xagra = "x-amz-grant-read-acp";
var _xagwa = "x-amz-grant-write-acp";
var _xamm = "x-amz-missing-meta";
var _xampc = "x-amz-mp-parts-count";
var _xaollh = "x-amz-object-lock-legal-hold";
var _xaolm = "x-amz-object-lock-mode";
var _xaolrud = "x-amz-object-lock-retain-until-date";
var _xaos = "x-amz-object-size";
var _xar = "x-amz-restore";
var _xarc = "x-amz-request-charged";
var _xarp = "x-amz-request-payer";
var _xars = "x-amz-replication-status";
var _xasc = "x-amz-storage-class";
var _xasca = "x-amz-sdk-checksum-algorithm";
var _xasse = "x-amz-server-side-encryption";
var _xasseakki = "x-amz-server-side-encryption-aws-kms-key-id";
var _xassebke = "x-amz-server-side-encryption-bucket-key-enabled";
var _xassec = "x-amz-server-side-encryption-context";
var _xasseca = "x-amz-server-side-encryption-customer-algorithm";
var _xasseck = "x-amz-server-side-encryption-customer-key";
var _xasseckm = "x-amz-server-side-encryption-customer-key-md5";
var _xat = "x-amz-tagging";
var _xatc = "x-amz-tagging-count";
var _xavi = "x-amz-version-id";
var _xawob = "x-amz-write-offset-bytes";
var _xawrl = "x-amz-website-redirect-location";
var _xi = "x-id";

// node_modules/@aws-sdk/client-s3/dist-es/commands/CreateSessionCommand.js
var CreateSessionCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  DisableS3ExpressSessionAuth: { type: "staticContextParams", value: true },
  Bucket: { type: "contextParams", name: "Bucket" }
}).m(function(Command2, cs2, config, o2) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
    getThrow200ExceptionsPlugin(config)
  ];
}).s("AmazonS3", "CreateSession", {}).n("S3Client", "CreateSessionCommand").f(CreateSessionRequestFilterSensitiveLog, CreateSessionOutputFilterSensitiveLog).ser(se_CreateSessionCommand).de(de_CreateSessionCommand).build() {
};

// node_modules/@aws-sdk/client-s3/package.json
var package_default = {
  name: "@aws-sdk/client-s3",
  description: "AWS SDK for JavaScript S3 Client for Node.js, Browser and React Native",
  version: "3.812.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "node ../../scripts/compilation/inline client-s3",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo s3",
    test: "yarn g:vitest run",
    "test:browser": "node ./test/browser-build/esbuild && yarn g:vitest run -c vitest.config.browser.ts",
    "test:browser:watch": "node ./test/browser-build/esbuild && yarn g:vitest watch -c vitest.config.browser.ts",
    "test:e2e": "yarn g:vitest run -c vitest.config.e2e.ts && yarn test:browser",
    "test:e2e:watch": "yarn g:vitest watch -c vitest.config.e2e.ts",
    "test:integration": "yarn g:vitest run -c vitest.config.integ.ts",
    "test:integration:watch": "yarn g:vitest watch -c vitest.config.integ.ts",
    "test:watch": "yarn g:vitest watch"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha1-browser": "5.2.0",
    "@aws-crypto/sha256-browser": "5.2.0",
    "@aws-crypto/sha256-js": "5.2.0",
    "@aws-sdk/core": "3.812.0",
    "@aws-sdk/credential-provider-node": "3.812.0",
    "@aws-sdk/middleware-bucket-endpoint": "3.808.0",
    "@aws-sdk/middleware-expect-continue": "3.804.0",
    "@aws-sdk/middleware-flexible-checksums": "3.812.0",
    "@aws-sdk/middleware-host-header": "3.804.0",
    "@aws-sdk/middleware-location-constraint": "3.804.0",
    "@aws-sdk/middleware-logger": "3.804.0",
    "@aws-sdk/middleware-recursion-detection": "3.804.0",
    "@aws-sdk/middleware-sdk-s3": "3.812.0",
    "@aws-sdk/middleware-ssec": "3.804.0",
    "@aws-sdk/middleware-user-agent": "3.812.0",
    "@aws-sdk/region-config-resolver": "3.808.0",
    "@aws-sdk/signature-v4-multi-region": "3.812.0",
    "@aws-sdk/types": "3.804.0",
    "@aws-sdk/util-endpoints": "3.808.0",
    "@aws-sdk/util-user-agent-browser": "3.804.0",
    "@aws-sdk/util-user-agent-node": "3.812.0",
    "@aws-sdk/xml-builder": "3.804.0",
    "@smithy/config-resolver": "^4.1.2",
    "@smithy/core": "^3.3.3",
    "@smithy/eventstream-serde-browser": "^4.0.2",
    "@smithy/eventstream-serde-config-resolver": "^4.1.0",
    "@smithy/eventstream-serde-node": "^4.0.2",
    "@smithy/fetch-http-handler": "^5.0.2",
    "@smithy/hash-blob-browser": "^4.0.2",
    "@smithy/hash-node": "^4.0.2",
    "@smithy/hash-stream-node": "^4.0.2",
    "@smithy/invalid-dependency": "^4.0.2",
    "@smithy/md5-js": "^4.0.2",
    "@smithy/middleware-content-length": "^4.0.2",
    "@smithy/middleware-endpoint": "^4.1.6",
    "@smithy/middleware-retry": "^4.1.7",
    "@smithy/middleware-serde": "^4.0.5",
    "@smithy/middleware-stack": "^4.0.2",
    "@smithy/node-config-provider": "^4.1.1",
    "@smithy/node-http-handler": "^4.0.4",
    "@smithy/protocol-http": "^5.1.0",
    "@smithy/smithy-client": "^4.2.6",
    "@smithy/types": "^4.2.0",
    "@smithy/url-parser": "^4.0.2",
    "@smithy/util-base64": "^4.0.0",
    "@smithy/util-body-length-browser": "^4.0.0",
    "@smithy/util-body-length-node": "^4.0.0",
    "@smithy/util-defaults-mode-browser": "^4.0.14",
    "@smithy/util-defaults-mode-node": "^4.0.14",
    "@smithy/util-endpoints": "^3.0.4",
    "@smithy/util-middleware": "^4.0.2",
    "@smithy/util-retry": "^4.0.3",
    "@smithy/util-stream": "^4.2.0",
    "@smithy/util-utf8": "^4.0.0",
    "@smithy/util-waiter": "^4.0.3",
    tslib: "^2.6.2"
  },
  devDependencies: {
    "@aws-sdk/signature-v4-crt": "3.812.0",
    "@tsconfig/node18": "18.2.4",
    "@types/node": "^18.19.69",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typescript: "~5.8.3"
  },
  engines: {
    node: ">=18.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  files: [
    "dist-*/**"
  ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-s3",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-s3"
  }
};

// node_modules/@aws-sdk/credential-provider-node/dist-es/remoteProvider.js
var ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
var remoteProvider = async (init) => {
  const { ENV_CMDS_FULL_URI, ENV_CMDS_RELATIVE_URI, fromContainerMetadata, fromInstanceMetadata } = await import("./dist-es-W2RP3GAP.js");
  if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
    init.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
    const { fromHttp } = await import("./dist-es-SLW4H2E3.js");
    return chain(fromHttp(init), fromContainerMetadata(init));
  }
  if (process.env[ENV_IMDS_DISABLED] && process.env[ENV_IMDS_DISABLED] !== "false") {
    return async () => {
      throw new CredentialsProviderError("EC2 Instance Metadata Service access disabled", { logger: init.logger });
    };
  }
  init.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata");
  return fromInstanceMetadata(init);
};

// node_modules/@aws-sdk/credential-provider-node/dist-es/defaultProvider.js
var multipleCredentialSourceWarningEmitted = false;
var defaultProvider = (init = {}) => memoize(chain(async () => {
  const profile = init.profile ?? process.env[ENV_PROFILE];
  if (profile) {
    const envStaticCredentialsAreSet = process.env[ENV_KEY] && process.env[ENV_SECRET];
    if (envStaticCredentialsAreSet) {
      if (!multipleCredentialSourceWarningEmitted) {
        const warnFn = init.logger?.warn && init.logger?.constructor?.name !== "NoOpLogger" ? init.logger.warn : console.warn;
        warnFn(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`);
        multipleCredentialSourceWarningEmitted = true;
      }
    }
    throw new CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", {
      logger: init.logger,
      tryNextLink: true
    });
  }
  init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv");
  return fromEnv(init)();
}, async () => {
  init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
  const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
  if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
    throw new CredentialsProviderError("Skipping SSO provider in default chain (inputs do not include SSO fields).", { logger: init.logger });
  }
  const { fromSSO } = await import("./dist-es-MDN5LBAS.js");
  return fromSSO(init)();
}, async () => {
  init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
  const { fromIni } = await import("./dist-es-MHB7XI5J.js");
  return fromIni(init)();
}, async () => {
  init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
  const { fromProcess } = await import("./dist-es-TFJIOGRZ.js");
  return fromProcess(init)();
}, async () => {
  init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
  const { fromTokenFile } = await import("./dist-es-7XDKVRHK.js");
  return fromTokenFile(init)();
}, async () => {
  init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider");
  return (await remoteProvider(init))();
}, async () => {
  throw new CredentialsProviderError("Could not load credentials from any providers", {
    tryNextLink: false,
    logger: init.logger
  });
}), credentialsTreatedAsExpired, credentialsWillNeedRefresh);
var credentialsWillNeedRefresh = (credentials) => credentials?.expiration !== void 0;
var credentialsTreatedAsExpired = (credentials) => credentials?.expiration !== void 0 && credentials.expiration.getTime() - Date.now() < 3e5;

// node_modules/@aws-sdk/middleware-bucket-endpoint/dist-es/NodeUseArnRegionConfigOptions.js
var NODE_USE_ARN_REGION_ENV_NAME = "AWS_S3_USE_ARN_REGION";
var NODE_USE_ARN_REGION_INI_NAME = "s3_use_arn_region";
var NODE_USE_ARN_REGION_CONFIG_OPTIONS = {
  environmentVariableSelector: (env) => booleanSelector(env, NODE_USE_ARN_REGION_ENV_NAME, SelectorType.ENV),
  configFileSelector: (profile) => booleanSelector(profile, NODE_USE_ARN_REGION_INI_NAME, SelectorType.CONFIG),
  default: false
};

// node_modules/@smithy/eventstream-codec/dist-es/Int64.js
var Int64 = class _Int64 {
  constructor(bytes) {
    this.bytes = bytes;
    if (bytes.byteLength !== 8) {
      throw new Error("Int64 buffers must be exactly 8 bytes");
    }
  }
  static fromNumber(number) {
    if (number > 9223372036854776e3 || number < -9223372036854776e3) {
      throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
    }
    const bytes = new Uint8Array(8);
    for (let i2 = 7, remaining = Math.abs(Math.round(number)); i2 > -1 && remaining > 0; i2--, remaining /= 256) {
      bytes[i2] = remaining;
    }
    if (number < 0) {
      negate(bytes);
    }
    return new _Int64(bytes);
  }
  valueOf() {
    const bytes = this.bytes.slice(0);
    const negative = bytes[0] & 128;
    if (negative) {
      negate(bytes);
    }
    return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
};
function negate(bytes) {
  for (let i2 = 0; i2 < 8; i2++) {
    bytes[i2] ^= 255;
  }
  for (let i2 = 7; i2 > -1; i2--) {
    bytes[i2]++;
    if (bytes[i2] !== 0)
      break;
  }
}

// node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js
var HeaderMarshaller = class {
  constructor(toUtf82, fromUtf84) {
    this.toUtf8 = toUtf82;
    this.fromUtf8 = fromUtf84;
  }
  format(headers) {
    const chunks = [];
    for (const headerName of Object.keys(headers)) {
      const bytes = this.fromUtf8(headerName);
      chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
    }
    const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
    let position = 0;
    for (const chunk of chunks) {
      out.set(chunk, position);
      position += chunk.byteLength;
    }
    return out;
  }
  formatHeaderValue(header) {
    switch (header.type) {
      case "boolean":
        return Uint8Array.from([header.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, header.value]);
      case "short":
        const shortView = new DataView(new ArrayBuffer(3));
        shortView.setUint8(0, 3);
        shortView.setInt16(1, header.value, false);
        return new Uint8Array(shortView.buffer);
      case "integer":
        const intView = new DataView(new ArrayBuffer(5));
        intView.setUint8(0, 4);
        intView.setInt32(1, header.value, false);
        return new Uint8Array(intView.buffer);
      case "long":
        const longBytes = new Uint8Array(9);
        longBytes[0] = 5;
        longBytes.set(header.value.bytes, 1);
        return longBytes;
      case "binary":
        const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
        binView.setUint8(0, 6);
        binView.setUint16(1, header.value.byteLength, false);
        const binBytes = new Uint8Array(binView.buffer);
        binBytes.set(header.value, 3);
        return binBytes;
      case "string":
        const utf8Bytes = this.fromUtf8(header.value);
        const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
        strView.setUint8(0, 7);
        strView.setUint16(1, utf8Bytes.byteLength, false);
        const strBytes = new Uint8Array(strView.buffer);
        strBytes.set(utf8Bytes, 3);
        return strBytes;
      case "timestamp":
        const tsBytes = new Uint8Array(9);
        tsBytes[0] = 8;
        tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
        return tsBytes;
      case "uuid":
        if (!UUID_PATTERN.test(header.value)) {
          throw new Error(`Invalid UUID received: ${header.value}`);
        }
        const uuidBytes = new Uint8Array(17);
        uuidBytes[0] = 9;
        uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
        return uuidBytes;
    }
  }
  parse(headers) {
    const out = {};
    let position = 0;
    while (position < headers.byteLength) {
      const nameLength = headers.getUint8(position++);
      const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
      position += nameLength;
      switch (headers.getUint8(position++)) {
        case 0:
          out[name] = {
            type: BOOLEAN_TAG,
            value: true
          };
          break;
        case 1:
          out[name] = {
            type: BOOLEAN_TAG,
            value: false
          };
          break;
        case 2:
          out[name] = {
            type: BYTE_TAG,
            value: headers.getInt8(position++)
          };
          break;
        case 3:
          out[name] = {
            type: SHORT_TAG,
            value: headers.getInt16(position, false)
          };
          position += 2;
          break;
        case 4:
          out[name] = {
            type: INT_TAG,
            value: headers.getInt32(position, false)
          };
          position += 4;
          break;
        case 5:
          out[name] = {
            type: LONG_TAG,
            value: new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
          };
          position += 8;
          break;
        case 6:
          const binaryLength = headers.getUint16(position, false);
          position += 2;
          out[name] = {
            type: BINARY_TAG,
            value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
          };
          position += binaryLength;
          break;
        case 7:
          const stringLength = headers.getUint16(position, false);
          position += 2;
          out[name] = {
            type: STRING_TAG,
            value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
          };
          position += stringLength;
          break;
        case 8:
          out[name] = {
            type: TIMESTAMP_TAG,
            value: new Date(new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
          };
          position += 8;
          break;
        case 9:
          const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
          position += 16;
          out[name] = {
            type: UUID_TAG,
            value: `${toHex(uuidBytes.subarray(0, 4))}-${toHex(uuidBytes.subarray(4, 6))}-${toHex(uuidBytes.subarray(6, 8))}-${toHex(uuidBytes.subarray(8, 10))}-${toHex(uuidBytes.subarray(10))}`
          };
          break;
        default:
          throw new Error(`Unrecognized header type tag`);
      }
    }
    return out;
  }
};
var HEADER_VALUE_TYPE;
(function(HEADER_VALUE_TYPE2) {
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolTrue"] = 0] = "boolTrue";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolFalse"] = 1] = "boolFalse";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byte"] = 2] = "byte";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["short"] = 3] = "short";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["integer"] = 4] = "integer";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["long"] = 5] = "long";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byteArray"] = 6] = "byteArray";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["string"] = 7] = "string";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["timestamp"] = 8] = "timestamp";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
var BOOLEAN_TAG = "boolean";
var BYTE_TAG = "byte";
var SHORT_TAG = "short";
var INT_TAG = "integer";
var LONG_TAG = "long";
var BINARY_TAG = "binary";
var STRING_TAG = "string";
var TIMESTAMP_TAG = "timestamp";
var UUID_TAG = "uuid";
var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;

// node_modules/@smithy/eventstream-codec/dist-es/splitMessage.js
var PRELUDE_MEMBER_LENGTH = 4;
var PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
var CHECKSUM_LENGTH = 4;
var MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
function splitMessage({ byteLength, byteOffset, buffer }) {
  if (byteLength < MINIMUM_MESSAGE_LENGTH) {
    throw new Error("Provided message too short to accommodate event stream message overhead");
  }
  const view = new DataView(buffer, byteOffset, byteLength);
  const messageLength = view.getUint32(0, false);
  if (byteLength !== messageLength) {
    throw new Error("Reported message length does not match received message length");
  }
  const headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
  const expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
  const expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);
  const checksummer = new Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
  if (expectedPreludeChecksum !== checksummer.digest()) {
    throw new Error(`The prelude checksum specified in the message (${expectedPreludeChecksum}) does not match the calculated CRC32 checksum (${checksummer.digest()})`);
  }
  checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
  if (expectedMessageChecksum !== checksummer.digest()) {
    throw new Error(`The message checksum (${checksummer.digest()}) did not match the expected value of ${expectedMessageChecksum}`);
  }
  return {
    headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
    body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH))
  };
}

// node_modules/@smithy/eventstream-codec/dist-es/EventStreamCodec.js
var EventStreamCodec = class {
  constructor(toUtf82, fromUtf84) {
    this.headerMarshaller = new HeaderMarshaller(toUtf82, fromUtf84);
    this.messageBuffer = [];
    this.isEndOfStream = false;
  }
  feed(message) {
    this.messageBuffer.push(this.decode(message));
  }
  endOfStream() {
    this.isEndOfStream = true;
  }
  getMessage() {
    const message = this.messageBuffer.pop();
    const isEndOfStream = this.isEndOfStream;
    return {
      getMessage() {
        return message;
      },
      isEndOfStream() {
        return isEndOfStream;
      }
    };
  }
  getAvailableMessages() {
    const messages = this.messageBuffer;
    this.messageBuffer = [];
    const isEndOfStream = this.isEndOfStream;
    return {
      getMessages() {
        return messages;
      },
      isEndOfStream() {
        return isEndOfStream;
      }
    };
  }
  encode({ headers: rawHeaders, body }) {
    const headers = this.headerMarshaller.format(rawHeaders);
    const length = headers.byteLength + body.byteLength + 16;
    const out = new Uint8Array(length);
    const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    const checksum = new Crc32();
    view.setUint32(0, length, false);
    view.setUint32(4, headers.byteLength, false);
    view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
    out.set(headers, 12);
    out.set(body, headers.byteLength + 12);
    view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
    return out;
  }
  decode(message) {
    const { headers, body } = splitMessage(message);
    return { headers: this.headerMarshaller.parse(headers), body };
  }
  formatHeaders(rawHeaders) {
    return this.headerMarshaller.format(rawHeaders);
  }
};

// node_modules/@smithy/eventstream-codec/dist-es/MessageDecoderStream.js
var MessageDecoderStream = class {
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const bytes of this.options.inputStream) {
      const decoded = this.options.decoder.decode(bytes);
      yield decoded;
    }
  }
};

// node_modules/@smithy/eventstream-codec/dist-es/MessageEncoderStream.js
var MessageEncoderStream = class {
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const msg of this.options.messageStream) {
      const encoded = this.options.encoder.encode(msg);
      yield encoded;
    }
    if (this.options.includeEndFrame) {
      yield new Uint8Array(0);
    }
  }
};

// node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageDecoderStream.js
var SmithyMessageDecoderStream = class {
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const message of this.options.messageStream) {
      const deserialized = await this.options.deserializer(message);
      if (deserialized === void 0)
        continue;
      yield deserialized;
    }
  }
};

// node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageEncoderStream.js
var SmithyMessageEncoderStream = class {
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const chunk of this.options.inputStream) {
      const payloadBuf = this.options.serializer(chunk);
      yield payloadBuf;
    }
  }
};

// node_modules/@smithy/eventstream-serde-universal/dist-es/getChunkedStream.js
function getChunkedStream(source) {
  let currentMessageTotalLength = 0;
  let currentMessagePendingLength = 0;
  let currentMessage = null;
  let messageLengthBuffer = null;
  const allocateMessage = (size) => {
    if (typeof size !== "number") {
      throw new Error("Attempted to allocate an event message where size was not a number: " + size);
    }
    currentMessageTotalLength = size;
    currentMessagePendingLength = 4;
    currentMessage = new Uint8Array(size);
    const currentMessageView = new DataView(currentMessage.buffer);
    currentMessageView.setUint32(0, size, false);
  };
  const iterator = async function* () {
    const sourceIterator = source[Symbol.asyncIterator]();
    while (true) {
      const { value, done } = await sourceIterator.next();
      if (done) {
        if (!currentMessageTotalLength) {
          return;
        } else if (currentMessageTotalLength === currentMessagePendingLength) {
          yield currentMessage;
        } else {
          throw new Error("Truncated event message received.");
        }
        return;
      }
      const chunkLength = value.length;
      let currentOffset = 0;
      while (currentOffset < chunkLength) {
        if (!currentMessage) {
          const bytesRemaining = chunkLength - currentOffset;
          if (!messageLengthBuffer) {
            messageLengthBuffer = new Uint8Array(4);
          }
          const numBytesForTotal = Math.min(4 - currentMessagePendingLength, bytesRemaining);
          messageLengthBuffer.set(value.slice(currentOffset, currentOffset + numBytesForTotal), currentMessagePendingLength);
          currentMessagePendingLength += numBytesForTotal;
          currentOffset += numBytesForTotal;
          if (currentMessagePendingLength < 4) {
            break;
          }
          allocateMessage(new DataView(messageLengthBuffer.buffer).getUint32(0, false));
          messageLengthBuffer = null;
        }
        const numBytesToWrite = Math.min(currentMessageTotalLength - currentMessagePendingLength, chunkLength - currentOffset);
        currentMessage.set(value.slice(currentOffset, currentOffset + numBytesToWrite), currentMessagePendingLength);
        currentMessagePendingLength += numBytesToWrite;
        currentOffset += numBytesToWrite;
        if (currentMessageTotalLength && currentMessageTotalLength === currentMessagePendingLength) {
          yield currentMessage;
          currentMessage = null;
          currentMessageTotalLength = 0;
          currentMessagePendingLength = 0;
        }
      }
    }
  };
  return {
    [Symbol.asyncIterator]: iterator
  };
}

// node_modules/@smithy/eventstream-serde-universal/dist-es/getUnmarshalledStream.js
function getMessageUnmarshaller(deserializer, toUtf82) {
  return async function(message) {
    const { value: messageType } = message.headers[":message-type"];
    if (messageType === "error") {
      const unmodeledError = new Error(message.headers[":error-message"].value || "UnknownError");
      unmodeledError.name = message.headers[":error-code"].value;
      throw unmodeledError;
    } else if (messageType === "exception") {
      const code = message.headers[":exception-type"].value;
      const exception = { [code]: message };
      const deserializedException = await deserializer(exception);
      if (deserializedException.$unknown) {
        const error = new Error(toUtf82(message.body));
        error.name = code;
        throw error;
      }
      throw deserializedException[code];
    } else if (messageType === "event") {
      const event = {
        [message.headers[":event-type"].value]: message
      };
      const deserialized = await deserializer(event);
      if (deserialized.$unknown)
        return;
      return deserialized;
    } else {
      throw Error(`Unrecognizable event type: ${message.headers[":event-type"].value}`);
    }
  };
}

// node_modules/@smithy/eventstream-serde-universal/dist-es/EventStreamMarshaller.js
var EventStreamMarshaller = class {
  constructor({ utf8Encoder, utf8Decoder }) {
    this.eventStreamCodec = new EventStreamCodec(utf8Encoder, utf8Decoder);
    this.utfEncoder = utf8Encoder;
  }
  deserialize(body, deserializer) {
    const inputStream = getChunkedStream(body);
    return new SmithyMessageDecoderStream({
      messageStream: new MessageDecoderStream({ inputStream, decoder: this.eventStreamCodec }),
      deserializer: getMessageUnmarshaller(deserializer, this.utfEncoder)
    });
  }
  serialize(inputStream, serializer) {
    return new MessageEncoderStream({
      messageStream: new SmithyMessageEncoderStream({ inputStream, serializer }),
      encoder: this.eventStreamCodec,
      includeEndFrame: true
    });
  }
};

// node_modules/@smithy/eventstream-serde-node/dist-es/EventStreamMarshaller.js
import { Readable } from "stream";

// node_modules/@smithy/eventstream-serde-node/dist-es/utils.js
async function* readabletoIterable(readStream) {
  let streamEnded = false;
  let generationEnded = false;
  const records = new Array();
  readStream.on("error", (err) => {
    if (!streamEnded) {
      streamEnded = true;
    }
    if (err) {
      throw err;
    }
  });
  readStream.on("data", (data) => {
    records.push(data);
  });
  readStream.on("end", () => {
    streamEnded = true;
  });
  while (!generationEnded) {
    const value = await new Promise((resolve) => setTimeout(() => resolve(records.shift()), 0));
    if (value) {
      yield value;
    }
    generationEnded = streamEnded && records.length === 0;
  }
}

// node_modules/@smithy/eventstream-serde-node/dist-es/EventStreamMarshaller.js
var EventStreamMarshaller2 = class {
  constructor({ utf8Encoder, utf8Decoder }) {
    this.universalMarshaller = new EventStreamMarshaller({
      utf8Decoder,
      utf8Encoder
    });
  }
  deserialize(body, deserializer) {
    const bodyIterable = typeof body[Symbol.asyncIterator] === "function" ? body : readabletoIterable(body);
    return this.universalMarshaller.deserialize(bodyIterable, deserializer);
  }
  serialize(input, serializer) {
    return Readable.from(this.universalMarshaller.serialize(input, serializer));
  }
};

// node_modules/@smithy/eventstream-serde-node/dist-es/provider.js
var eventStreamSerdeProvider = (options) => new EventStreamMarshaller2(options);

// node_modules/@smithy/hash-stream-node/dist-es/HashCalculator.js
import { Writable } from "stream";
var HashCalculator = class extends Writable {
  constructor(hash, options) {
    super(options);
    this.hash = hash;
  }
  _write(chunk, encoding, callback) {
    try {
      this.hash.update(toUint8Array(chunk));
    } catch (err) {
      return callback(err);
    }
    callback();
  }
};

// node_modules/@smithy/hash-stream-node/dist-es/readableStreamHasher.js
var readableStreamHasher = (hashCtor, readableStream) => {
  if (readableStream.readableFlowing !== null) {
    throw new Error("Unable to calculate hash for flowing readable stream");
  }
  const hash = new hashCtor();
  const hashCalculator = new HashCalculator(hash);
  readableStream.pipe(hashCalculator);
  return new Promise((resolve, reject) => {
    readableStream.on("error", (err) => {
      hashCalculator.end();
      reject(err);
    });
    hashCalculator.on("error", reject);
    hashCalculator.on("finish", () => {
      hash.digest().then(resolve).catch(reject);
    });
  });
};

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.shared.js
var getRuntimeConfig = (config) => {
  return {
    apiVersion: "2006-03-01",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    getAwsChunkedEncodingStream: config?.getAwsChunkedEncodingStream ?? getAwsChunkedEncodingStream,
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultS3HttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new AwsSdkSigV4Signer()
      },
      {
        schemeId: "aws.auth#sigv4a",
        identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4a"),
        signer: new AwsSdkSigV4ASigner()
      }
    ],
    logger: config?.logger ?? new NoOpLogger(),
    sdkStreamMixin: config?.sdkStreamMixin ?? sdkStreamMixin,
    serviceId: config?.serviceId ?? "S3",
    signerConstructor: config?.signerConstructor ?? SignatureV4MultiRegion,
    signingEscapePath: config?.signingEscapePath ?? false,
    urlParser: config?.urlParser ?? parseUrl,
    useArnRegion: config?.useArnRegion ?? false,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8
  };
};

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.js
var getRuntimeConfig2 = (config) => {
  emitWarningIfUnsupportedVersion2(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
  const clientSharedValues = getRuntimeConfig(config);
  emitWarningIfUnsupportedVersion(process.version);
  const loaderConfig = { profile: config?.profile, logger: clientSharedValues.logger };
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    authSchemePreference: config?.authSchemePreference ?? loadConfig(NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config?.credentialDefaultProvider ?? defaultProvider,
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
    disableS3ExpressSessionAuth: config?.disableS3ExpressSessionAuth ?? loadConfig(NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS, loaderConfig),
    eventStreamSerdeProvider: config?.eventStreamSerdeProvider ?? eventStreamSerdeProvider,
    maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
    md5: config?.md5 ?? Hash.bind(null, "md5"),
    region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, { ...NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
    requestChecksumCalculation: config?.requestChecksumCalculation ?? loadConfig(NODE_REQUEST_CHECKSUM_CALCULATION_CONFIG_OPTIONS, loaderConfig),
    requestHandler: NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
    responseChecksumValidation: config?.responseChecksumValidation ?? loadConfig(NODE_RESPONSE_CHECKSUM_VALIDATION_CONFIG_OPTIONS, loaderConfig),
    retryMode: config?.retryMode ?? loadConfig({
      ...NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE
    }, config),
    sha1: config?.sha1 ?? Hash.bind(null, "sha1"),
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    sigv4aSigningRegionSet: config?.sigv4aSigningRegionSet ?? loadConfig(NODE_SIGV4A_CONFIG_OPTIONS, loaderConfig),
    streamCollector: config?.streamCollector ?? streamCollector,
    streamHasher: config?.streamHasher ?? readableStreamHasher,
    useArnRegion: config?.useArnRegion ?? loadConfig(NODE_USE_ARN_REGION_CONFIG_OPTIONS, loaderConfig),
    useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
    useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
    userAgentAppId: config?.userAgentAppId ?? loadConfig(NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
  };
};

// node_modules/@aws-sdk/client-s3/dist-es/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration = (runtimeConfig) => {
  const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
  let _credentials = runtimeConfig.credentials;
  return {
    setHttpAuthScheme(httpAuthScheme) {
      const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
      if (index === -1) {
        _httpAuthSchemes.push(httpAuthScheme);
      } else {
        _httpAuthSchemes.splice(index, 1, httpAuthScheme);
      }
    },
    httpAuthSchemes() {
      return _httpAuthSchemes;
    },
    setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider() {
      return _httpAuthSchemeProvider;
    },
    setCredentials(credentials) {
      _credentials = credentials;
    },
    credentials() {
      return _credentials;
    }
  };
};
var resolveHttpAuthRuntimeConfig = (config) => {
  return {
    httpAuthSchemes: config.httpAuthSchemes(),
    httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
    credentials: config.credentials()
  };
};

// node_modules/@aws-sdk/client-s3/dist-es/runtimeExtensions.js
var resolveRuntimeExtensions = (runtimeConfig, extensions) => {
  const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig), getDefaultExtensionConfiguration(runtimeConfig), getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
  extensions.forEach((extension) => extension.configure(extensionConfiguration));
  return Object.assign(runtimeConfig, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
};

// node_modules/@aws-sdk/client-s3/dist-es/S3Client.js
var S3Client = class extends Client {
  config;
  constructor(...[configuration]) {
    const _config_0 = getRuntimeConfig2(configuration || {});
    super(_config_0);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveFlexibleChecksumsConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveRegionConfig(_config_4);
    const _config_6 = resolveHostHeaderConfig(_config_5);
    const _config_7 = resolveEndpointConfig(_config_6);
    const _config_8 = resolveEventStreamSerdeConfig(_config_7);
    const _config_9 = resolveHttpAuthSchemeConfig(_config_8);
    const _config_10 = resolveS3Config(_config_9, { session: [() => this, CreateSessionCommand] });
    const _config_11 = resolveRuntimeExtensions(_config_10, configuration?.extensions || []);
    this.config = _config_11;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
      httpAuthSchemeParametersProvider: defaultS3HttpAuthSchemeParametersProvider,
      identityProviderConfigProvider: async (config) => new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config.credentials,
        "aws.auth#sigv4a": config.credentials
      })
    }));
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
    this.middlewareStack.use(getValidateBucketNamePlugin(this.config));
    this.middlewareStack.use(getAddExpectContinuePlugin(this.config));
    this.middlewareStack.use(getRegionRedirectMiddlewarePlugin(this.config));
    this.middlewareStack.use(getS3ExpressPlugin(this.config));
    this.middlewareStack.use(getS3ExpressHttpSigningPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};

// node_modules/@aws-sdk/middleware-ssec/dist-es/index.js
function ssecMiddleware(options) {
  return (next) => async (args) => {
    const input = { ...args.input };
    const properties = [
      {
        target: "SSECustomerKey",
        hash: "SSECustomerKeyMD5"
      },
      {
        target: "CopySourceSSECustomerKey",
        hash: "CopySourceSSECustomerKeyMD5"
      }
    ];
    for (const prop of properties) {
      const value = input[prop.target];
      if (value) {
        let valueForHash;
        if (typeof value === "string") {
          if (isValidBase64EncodedSSECustomerKey(value, options)) {
            valueForHash = options.base64Decoder(value);
          } else {
            valueForHash = options.utf8Decoder(value);
            input[prop.target] = options.base64Encoder(valueForHash);
          }
        } else {
          valueForHash = ArrayBuffer.isView(value) ? new Uint8Array(value.buffer, value.byteOffset, value.byteLength) : new Uint8Array(value);
          input[prop.target] = options.base64Encoder(valueForHash);
        }
        const hash = new options.md5();
        hash.update(valueForHash);
        input[prop.hash] = options.base64Encoder(await hash.digest());
      }
    }
    return next({
      ...args,
      input
    });
  };
}
var ssecMiddlewareOptions = {
  name: "ssecMiddleware",
  step: "initialize",
  tags: ["SSE"],
  override: true
};
var getSsecPlugin = (config) => ({
  applyToStack: (clientStack) => {
    clientStack.add(ssecMiddleware(config), ssecMiddlewareOptions);
  }
});
function isValidBase64EncodedSSECustomerKey(str, options) {
  const base64Regex = /^(?:[A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
  if (!base64Regex.test(str))
    return false;
  try {
    const decodedBytes = options.base64Decoder(str);
    return decodedBytes.length === 32;
  } catch {
    return false;
  }
}

// node_modules/@aws-sdk/client-s3/dist-es/commands/GetObjectCommand.js
var GetObjectCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  Bucket: { type: "contextParams", name: "Bucket" },
  Key: { type: "contextParams", name: "Key" }
}).m(function(Command2, cs2, config, o2) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
    getFlexibleChecksumsPlugin(config, {
      requestChecksumRequired: false,
      requestValidationModeMember: "ChecksumMode",
      responseAlgorithms: ["CRC64NVME", "CRC32", "CRC32C", "SHA256", "SHA1"]
    }),
    getSsecPlugin(config),
    getS3ExpiresMiddlewarePlugin(config)
  ];
}).s("AmazonS3", "GetObject", {}).n("S3Client", "GetObjectCommand").f(GetObjectRequestFilterSensitiveLog, GetObjectOutputFilterSensitiveLog).ser(se_GetObjectCommand).de(de_GetObjectCommand).build() {
};

// node_modules/@aws-sdk/client-s3/dist-es/commands/PutObjectCommand.js
var PutObjectCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  Bucket: { type: "contextParams", name: "Bucket" },
  Key: { type: "contextParams", name: "Key" }
}).m(function(Command2, cs2, config, o2) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
    getFlexibleChecksumsPlugin(config, {
      requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
      requestChecksumRequired: false
    }),
    getCheckContentLengthHeaderPlugin(config),
    getThrow200ExceptionsPlugin(config),
    getSsecPlugin(config)
  ];
}).s("AmazonS3", "PutObject", {}).n("S3Client", "PutObjectCommand").f(PutObjectRequestFilterSensitiveLog, PutObjectOutputFilterSensitiveLog).ser(se_PutObjectCommand).de(de_PutObjectCommand).build() {
};

// src/config/s3Config.ts
var miRegion = "us-east-2";
var bucketName = "trujillo-y-asociadospdf";
var accessKeyId = process.env.AWS_ACCESS_KEY_ID;
var secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
if (!accessKeyId || !secretAccessKey) {
  throw new Error("Las credenciales AWS no est\xE1n definidas.");
}
var s3Client = new S3Client({
  region: miRegion,
  credentials: {
    accessKeyId,
    secretAccessKey
  }
});
var paramsS3 = {
  Bucket: bucketName,
  // ACL: 'public-read' as const ,
  Key: String,
  ContentType: String,
  Body: null
};
var createUrl = (fileName, folder) => {
  return "https://" + bucketName + ".s3." + miRegion + ".amazonaws.com/" + folder + "/" + fileName;
};

// src/models/controlFileModel.ts
var ControlFileModel = class {
  static async uploadPdf(file, archiveName, folder) {
    const params = {
      ...paramsS3,
      Key: `${folder}/${archiveName}`,
      Body: file.buffer,
      ContentType: "application/pdf"
    };
    try {
      const response = await s3Client.send(new PutObjectCommand(params));
      const url = createUrl(archiveName, folder ?? "");
      return { response, url };
    } catch (error) {
      console.error("Error uploading PDF:", error);
      throw new Error("Failed to upload PDF");
    }
  }
  static async getById(id) {
    const result = await connection.query("SELECT * FROM contract WHERE id = $1", [id]);
    return result.rows[0] || null;
  }
  static async updateSignedStatus(id, signed) {
    await connection.query("UPDATE contract SET asigned = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2", [signed, id]);
  }
};

// src/models/emailLlinkModel.ts
import brevo from "@getbrevo/brevo";
var EmailLinkModel = class {
  static async sendEmail(emails, pdfBuffer, fileName, linkFirma) {
    try {
      const apiInstance = new brevo.TransactionalEmailsApi();
      const apiKey = process.env.BREVO_EMAIL_KEY;
      if (!apiKey) throw new Error("Falta la variable de entorno BREVO_EMAIL_KEY");
      apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);
      const sendSmtpEmail = new brevo.SendSmtpEmail();
      sendSmtpEmail.subject = "Notificaci\xF3n de contrato";
      sendSmtpEmail.to = emails;
      sendSmtpEmail.htmlContent = `
        <h1>Cordial saludo, ${emails[0].name}</h1>
        <p>Muy buen dia, en el presente correo se envia el documento de autorizacion con el cual a partir del momento nuestra compa\xF1ia se encargara de su todo su tramite </p>
        <p>Adjuntamos el Link de la firma</p>
        <a href="${linkFirma}">${linkFirma}</a>
        <h3>Si tiene alguna duda, no dude en contactarnos.</h3>
        <p>Atentamente,<br>Grupo Trujillo y Asociados</p>
      `;
      sendSmtpEmail.sender = {
        name: "Trujillo y Asociados",
        email: "Asesorias@grupotrujilloyasociados.com"
      };
      const base64PDF = pdfBuffer.toString("base64");
      sendSmtpEmail.attachment = [
        {
          content: base64PDF,
          name: fileName.endsWith(".pdf") ? fileName : `${fileName}.pdf`
        }
      ];
      const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
      return result;
    } catch (error) {
      console.error("Error en EmailModel:", error);
      throw error;
    }
  }
};

// src/models/employeeModel.ts
var EmployeeModel = class {
  // Obtener todos los empleados
  static async getAllEmployees() {
    try {
      const { rows } = await connection.query("SELECT * FROM employee");
      return rows;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error al obtener empleados:", error.message);
      } else {
        console.error("Error desconocido al obtener empleados.");
      }
      throw new Error("No se pudieron obtener los empleados");
    }
  }
  // Obtener un empleado por su ID
  static async getEmployeeById(id) {
    try {
      const { rows } = await connection.query("SELECT * FROM employee WHERE id = $1", [id]);
      if (rows.length === 0) {
        throw new AppError(
          `No se encontro el empleado`,
          "ID_NOT_REGISTRED",
          400
        );
      }
      return rows[0];
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al obtener el empleado con id ${id}:`, error.message);
        throw new AppError(
          error.message,
          "UNKNOWN_ERROR",
          500
        );
      } else {
        console.error(`Error desconocido al obtener el empleado con id ${id}`);
      }
      throw new Error(`No se pudo obtener el empleado con id ${id}`);
    }
  }
  // Crear un nuevo empleado
  static async createEmployee(name, document, phone) {
    try {
      const thereIsEmployee = await connection.query("SELECT * FROM employee WHERE document = $1", [document]);
      if (thereIsEmployee.rows.length > 0) {
        throw new AppError(
          `Este empleado ya existe`,
          "ID_FOUND",
          404
        );
      }
      const { rows } = await connection.query(
        "INSERT INTO employee (name, document, phone) VALUES ($1, $2, $3) RETURNING *",
        [name, document, phone]
      );
      return rows[0];
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      } else if (error instanceof Error) {
        throw new AppError(
          ` ${error.message}`,
          "UKNOWN_ERROR",
          500
        );
      } else {
        throw new AppError(
          "Ocurri\xF3 un error desconocido al actualizar el empleado",
          "UNKNOWN_ERROR",
          500
        );
      }
    }
  }
  static async updateEmployee(id, name, document, phone) {
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
          `No se encontr\xF3 ning\xFAn empleado para actualizar`,
          "ID_NOT_FOUND",
          404
        );
      }
      return rows[0];
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      } else if (error instanceof Error) {
        throw new AppError(
          `Error al actualizar el empleado: ${error.message}`,
          "UPDATE_EMPLOYEE_ERROR",
          500
        );
      } else {
        throw new AppError(
          "Ocurri\xF3 un error desconocido al actualizar el empleado",
          "UNKNOWN_ERROR",
          500
        );
      }
    }
  }
  // Eliminar un empleado
  static async deleteEmployee(id) {
    try {
      const { rowCount } = await connection.query(
        "DELETE FROM employee WHERE id = $1 RETURNING *",
        [id]
      );
      if (!rowCount || rowCount === 0) {
        throw new AppError(
          `No se encontr\xF3 ning\xFAn empleado`,
          "ID_NOT_FOUND",
          404
        );
      }
      return true;
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      } else if (error instanceof Error) {
        throw new AppError(
          error.message,
          "DELETE_EMPLOYEE_ERROR",
          500
        );
      } else {
        throw new AppError(
          "Ocurri\xF3 un error desconocido al eliminar el empleado",
          "UNKNOWN_ERROR",
          500
        );
      }
    }
  }
  static async getByDocument(document) {
    try {
      const { rows } = await connection.query(
        `select * from employee where document = $1`,
        [document]
      );
      if (rows.length === 0) {
        throw new AppError(
          `No se encontro un empleado con la cedula ${document}`,
          "ID_NOT_REGISTRED",
          400
        );
      }
      return rows[0];
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(
          error.message,
          error.code,
          error.statusCode
        );
      } else if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Unknown error occurred");
      }
    }
  }
};

// src/models/infoContractModel.ts
var InfoContractModel = class {
  static async getAllInfoContracts() {
    try {
      const { rows } = await connection.query("SELECT * FROM info_contract");
      return rows;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error al obtener los contratos:", error.message);
      } else {
        console.error("Error desconocido al obtener los contratos.");
      }
      throw new Error("No se pudieron obtener los contratos");
    }
  }
  static async getInfoContractById(id) {
    try {
      const { rows } = await connection.query("SELECT * FROM info_contract WHERE id = $1", [id]);
      if (rows.length === 0) {
        throw new AppError(
          `No se encontro nigun registro de este recurso`,
          "ID_NOT_REGISTRED",
          400
        );
      }
      return rows[0] || null;
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(
          error.message,
          error.code,
          error.statusCode
        );
      } else {
        console.error(`Error desconocido al obtener el contrato con id ${id}`);
      }
      throw new Error(`No se pudo obtener el contrato con id ${id}`);
    }
  }
  static async createInfoContract(infoContract) {
    const {
      id_type_pay,
      id_type_contract,
      num_radicado,
      total_payment,
      porcentage_honorario,
      id_customer,
      id_accused
    } = infoContract;
    try {
      const check = await connection.query(
        "SELECT 1 FROM info_contract WHERE num_radicado = $1",
        [num_radicado]
      );
      if ((check.rowCount ?? 0) > 0) {
        throw new AppError(
          `el Numero de radicado ${num_radicado} ya esta registrado`,
          "DUPLICATE_RADICADO",
          400
        );
      }
      const { rows } = await connection.query(
        `INSERT INTO info_contract (id_customer, id_accused, id_type_pay, id_type_contract, num_radicado, total_payment, porcentage_honorario)
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [id_customer, id_accused, id_type_pay, id_type_contract, num_radicado, total_payment, porcentage_honorario]
      );
      return rows[0];
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(error.message, error.code, error.statusCode);
      } else {
        throw new Error(error.message);
      }
    }
  }
};

// src/services/PdfSignerService.ts
import { PDFDocument } from "pdf-lib";
function streamToBuffer(stream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("end", () => resolve(Buffer.concat(chunks)));
    stream.on("error", reject);
  });
}
var PdfSignerService = class {
  static async signPdf({ key, signatureBase64 }) {
    const getCmd = new GetObjectCommand({
      Bucket: bucketName,
      Key: key
    });
    const pdfStream = await s3Client.send(getCmd);
    const pdfBuffer = await streamToBuffer(pdfStream.Body);
    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const signatureImage = await pdfDoc.embedPng(signatureBase64);
    const pngDims = signatureImage.scale(0.3);
    const pages = pdfDoc.getPages();
    if (pages.length > 2) {
      pages[2].drawImage(signatureImage, {
        x: 10,
        y: 170,
        width: 150,
        height: 50
      });
    }
    if (pages.length > 3) {
      pages[3].drawImage(signatureImage, {
        x: 10,
        y: 130,
        width: 150,
        height: 50
      });
    }
    const signedPdf = await pdfDoc.save();
    const putCmd = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: signedPdf,
      ContentType: "application/pdf"
    });
    await s3Client.send(putCmd);
    return { ok: true };
  }
};

// src/controllers/controlFileController.ts
var ControlFileController = class {
  static async uploadFile(req, res) {
    try {
      const file = req.file;
      if (!file) {
        throw new AppError(
          "Error del Navegador, El archivo no se cargo correctamente",
          "NO_CHARGE _RESOURCE",
          400
        );
      }
      const {
        folderSave,
        data,
        customer,
        accused,
        info_contract,
        contract
      } = req.body;
      let idAccused = null;
      const dataParsed = JSON.parse(data);
      const folder = JSON.parse(folderSave);
      const customerParsed = JSON.parse(customer);
      const infoConParse = JSON.parse(info_contract);
      const contractParse = JSON.parse(contract);
      const accusedParsed = JSON.parse(accused);
      try {
        await ContractModel.ifExist(dataParsed.num_contract);
      } catch (error) {
        const status = error instanceof AppError ? error.statusCode : 500;
        const code = error instanceof AppError ? error.code : "INTERNAL_ERROR";
        const message = error instanceof AppError ? error.message : "Error interno al verificar contrato";
        res.status(status).json({
          error: {
            message,
            code,
            statusCode: status
          }
        });
        return;
      }
      const idCustomer = await CustomerModel.findByCcAndCreate(customerParsed);
      if (accusedParsed.name != null) {
        idAccused = await AccusedModel.findByCcAndCreate(accusedParsed);
      }
      const employee = await EmployeeModel.getByDocument(dataParsed.executive);
      const infoContractFinal = {
        ...infoConParse,
        id_customer: idCustomer,
        id_accused: idAccused
      };
      const resContract = await InfoContractModel.createInfoContract(infoContractFinal);
      console.log(resContract);
      if (!resContract) {
        res.status(500).json({ message: "No se pudo crear el contrato (resContract es null)" });
        return;
      }
      const { url } = await ControlFileModel.uploadPdf(file, dataParsed.fileName, folder);
      const createContract = {
        id_info_contract: resContract.id,
        id_employee: employee.id,
        ...contractParse,
        path: url
      };
      const contractCreated = await ContractModel.create(createContract);
      const linkToSigned = `http://localhost:5173/contratos/signed/${contractCreated.id || "error"}`;
      const email = [{
        link: url,
        name: dataParsed.client_name ? dataParsed.client_name : dataParsed.demandados[0].name,
        email: dataParsed.email
      }];
      const { response, body } = await EmailLinkModel.sendEmail(
        email,
        file.buffer,
        file.originalname,
        linkToSigned
      );
      res.json({
        success: true,
        email: "Email enviado correctamente",
        file: "archivo generado correctamente",
        status: response.statusCode,
        body,
        url,
        contractCreated,
        linkToSigned
      });
    } catch (error) {
      console.error(error);
      if (error instanceof AppError) {
        res.status(400).json({
          error: {
            message: error.message || "Error En el servidor",
            statusCode: error.statusCode,
            code: error.code || 500
          }
        });
        return;
      }
      res.status(400).json({
        error: {
          code: error.code || 500,
          message: error.message || "Error En el servidor"
        }
      });
    }
  }
  static async upLoadFileWithoutEmail(req, res) {
    try {
      const file = req.file;
      if (!file) {
        res.status(400).json({ message: "No file uploaded" });
        return;
      }
      const {
        folderSave,
        data,
        customer,
        accused,
        info_contract,
        contract
      } = req.body;
      let idAccused = null;
      const dataParsed = JSON.parse(data);
      const folder = JSON.parse(folderSave);
      const customerParsed = JSON.parse(customer);
      const infoConParse = JSON.parse(info_contract);
      const contractParse = JSON.parse(contract);
      const accusedParsed = JSON.parse(accused);
      if (dataParsed.num_contract) {
        try {
          await ContractModel.ifExist(dataParsed.num_contract);
        } catch (error) {
          const status = error instanceof AppError ? error.statusCode : 500;
          const code = error instanceof AppError ? error.code : "INTERNAL_ERROR";
          const message = error instanceof AppError ? error.message : "Error interno al verificar contrato";
          res.status(status).json({
            error: {
              message,
              code,
              statusCode: status
            }
          });
          return;
        }
      }
      const idCustomer = await CustomerModel.findByCcAndCreate(customerParsed);
      if (accusedParsed.name != null) {
        idAccused = await AccusedModel.findByCcAndCreate(accusedParsed);
      }
      const employee = await EmployeeModel.getByDocument(dataParsed.executive);
      const infoContractFinal = {
        ...infoConParse,
        id_customer: idCustomer,
        id_accused: idAccused
      };
      const resContract = await InfoContractModel.createInfoContract(infoContractFinal);
      if (!resContract) {
        res.status(500).json({ message: "No se pudo crear el contrato (resContract es null)" });
        return;
      }
      const { url } = await ControlFileModel.uploadPdf(file, dataParsed.fileName, folder);
      const createContract = {
        id_info_contract: resContract.id,
        id_employee: employee.id,
        ...contractParse,
        path: url
      };
      const contractCreated = await ContractModel.create(createContract);
      const linkToSigned = `http://localhost:5173/contratos/signed/${contractCreated.id || "error"}`;
      res.json({
        success: true,
        file: "archivo generado correctamente",
        url,
        contractCreated,
        linkToSigned
      });
    } catch (error) {
      console.error(error);
      if (error instanceof AppError) {
        res.status(error.statusCode).json({
          error: {
            message: error.message || "Error En el servidor",
            statusCode: error.statusCode,
            code: error.code || 500
          }
        });
        return;
      }
    }
  }
  static async signContract(req, res) {
    try {
      const { id } = req.params;
      const { signature } = req.body;
      if (!signature) {
        throw new AppError(
          `Error al mandar la firma`,
          "EXISTING_RESOURCE",
          400
        );
      }
      const contract = await ContractModel.getById(id);
      if (!contract) {
        throw new AppError(
          `Contrato no encontrado`,
          "EXISTING_RESOURCE",
          400
        );
      }
      const path = contract.path;
      if (!path) {
        throw new AppError(
          `El contrato no cuenta con un archivo gaurdado, revisa la base de datos`,
          "EXISTING_RESOURCE",
          400
        );
      }
      const key = path.split(".com/")[1];
      if (!key) {
        throw new AppError(
          `No se encontro la ubicacion del archivo`,
          "EXISTING_RESOURCE",
          400
        );
      }
      await PdfSignerService.signPdf({ key, signatureBase64: signature });
      await ControlFileModel.updateSignedStatus(id, true);
      res.json({ message: "Contrato firmado con \xE9xito" });
    } catch (error) {
      if (error instanceof AppError) {
        console.error("AppError:", error.message);
        res.status(error.statusCode).json({ message: error.message, code: error.code });
        return;
      }
      res.status(500).json({ message: "Error interno al firmar contrato" });
      return;
    }
  }
};

// src/middleware/uploadMemory.ts
import multer from "multer";
var storage = multer.memoryStorage();
var upload = multer({ storage });

// src/routes/controlFileRouter.ts
var controlFileRouter = Router3();
controlFileRouter.post("/upload", upload.single("file"), ControlFileController.uploadFile);
controlFileRouter.post("/upload-without-email", upload.single("file"), ControlFileController.upLoadFileWithoutEmail);
controlFileRouter.post("/send-sings/:id", ControlFileController.signContract);

// src/routes/customerRouter.ts
import { Router as Router4 } from "express";

// src/controllers/customerController.ts
var CustomerController = class {
  static async getAll(req, res) {
    const customers = await CustomerService.getAll();
    res.status(200).json(customers);
  }
  static async getByName(req, res) {
    const customer = await CustomerService.getByName(req.params.name);
    if (!customer) {
      res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(customer);
  }
  static async getByCc(req, res) {
    const customer = await CustomerService.getByCc(req.params.cc);
    if (!customer) {
      res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(customer);
  }
  static async create(req, res) {
    const customer = req.body;
    const id = await CustomerService.create(customer);
    res.status(201).json({ message: "Customer created", data: id });
  }
  //     static async updatePartialCustomer(req:Request, res:Response) {
  //             const data = req.body;
  //             data.id = parseInt(req.params.id);
  //             const affectedRows = await CustomerService.updatePartialCustomer(data);
  //             if (affectedRows === 0) {
  //                  res.status(404).json({ message: 'Customer not found' });
  //             }
  //              res.status(200).json({ message: 'Customer updated', id: data.id });
  //     }
};

// src/routes/customerRouter.ts
var customerRouter = Router4();
customerRouter.get("/", CustomerController.getAll);
customerRouter.get("/by-cc/:cc", CustomerController.getByCc);
customerRouter.get("/by-name/:name", CustomerController.getByName);
customerRouter.post("/", CustomerController.create);

// src/routes/emailLinkRoute.ts
import express from "express";
var EmailLinkRoute = express.Router();

// src/routes/employeeRouter.ts
import { Router as Router5 } from "express";

// src/services/employeeService.ts
var EmployeeService = class {
  static async getAllEmployees() {
    try {
      return await EmployeeModel.getAllEmployees();
    } catch (error) {
      console.error("Service Error in getAllEmployees:", error);
      throw error;
    }
  }
  static async getEmployeeById(id) {
    try {
      return await EmployeeModel.getEmployeeById(id);
    } catch (error) {
      console.error("Service Error in getEmployeeById:", error);
      throw error;
    }
  }
  static async createEmployee(name, document, phone) {
    try {
      return await EmployeeModel.createEmployee(name, document, phone);
    } catch (error) {
      console.error("Service Error in createEmployee:", error);
      throw error;
    }
  }
  static async updateEmployee(id, name, document, phone) {
    try {
      return await EmployeeModel.updateEmployee(id, name, document, phone);
    } catch (error) {
      throw error;
    }
  }
  static async deleteEmployee(id) {
    try {
      return await EmployeeModel.deleteEmployee(id);
    } catch (error) {
      console.error("Service Error in deleteEmployee:", error);
      throw error;
    }
  }
};

// src/controllers/employeeController.ts
var EmployeeController = class {
  static async getAllEmployees(req, res) {
    const employees = await EmployeeService.getAllEmployees();
    res.status(200).json(employees);
  }
  static async getEmployeeById(req, res) {
    const { id } = req.params;
    const employee = await EmployeeService.getEmployeeById(id);
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ message: "Empleado no encontrado" });
    }
  }
  static async createEmployee(req, res) {
    try {
      const { name, document, phone } = req.body;
      const newEmployee = await EmployeeService.createEmployee(name, document, phone);
      res.status(201).json({ message: "Empleado Creado" });
    } catch (error) {
      const status = error instanceof AppError ? error.statusCode : 500;
      const message = error instanceof AppError ? error.message : error instanceof Error ? `Error al actualizar el empleado: ${error.message}` : "Error desconocido al actualizar el empleado";
      res.status(status).json({ message });
    }
  }
  static async updateEmployee(req, res) {
    const { id } = req.params;
    const { name, document, phone } = req.body;
    if (!id || !name || !document || !phone) {
      throw new AppError("Faltan datos necesarios para actualizar el empleado.", "MISSING_FIELDS", 400);
    }
    try {
      const updatedEmployee = await EmployeeService.updateEmployee(id, name, document, phone);
      if (!updatedEmployee) {
        throw new AppError(`Empleado con id ${id} no encontrado.`, "EMPLOYEE_NOT_FOUND", 404);
      }
      res.status(200).json({
        data: updatedEmployee,
        message: "Actualizaci\xF3n lograda con \xE9xito"
      });
    } catch (error) {
      const status = error instanceof AppError ? error.statusCode : 500;
      const message = error instanceof AppError ? error.message : error instanceof Error ? `Error al actualizar el empleado: ${error.message}` : "Error desconocido al actualizar el empleado";
      res.status(status).json({ message });
    }
  }
  static async deleteEmployee(req, res) {
    const { id } = req.params;
    try {
      const isDeleted = await EmployeeService.deleteEmployee(id);
      if (!isDeleted) {
        throw new AppError(`Empleado no encontrado.`, "EMPLOYEE_NOT_FOUND", 404);
      }
      res.status(200).json({ message: "Empleado eliminado correctamente" });
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ message: error.message, code: error.code });
      } else if (error instanceof Error) {
        res.status(500).json({ message: `Error al eliminar el empleado: ${error.message}` });
      } else {
        res.status(500).json({ message: "Error desconocido al eliminar el empleado" });
      }
    }
  }
};

// src/routes/employeeRouter.ts
var employeeRouter = Router5();
employeeRouter.get("/", EmployeeController.getAllEmployees);
employeeRouter.get("/:id", EmployeeController.getEmployeeById);
employeeRouter.post("/create", EmployeeController.createEmployee);
employeeRouter.delete("/:id", EmployeeController.deleteEmployee);
employeeRouter.put("/update/:id", EmployeeController.updateEmployee);

// src/routes/infoContractRouter.ts
import { Router as Router6 } from "express";

// src/services/infoContractService.ts
var InfoContractService = class {
  static async getAllInfoContracts() {
    try {
      return InfoContractModel.getAllInfoContracts();
    } catch (error) {
      console.error("Service Error in getAllEmployees:", error);
      throw error;
    }
  }
  static async getInfoContractById(id) {
    try {
    } catch (error) {
      console.error("Service Error in getAllEmployees:", error);
      throw error;
    }
    return InfoContractModel.getInfoContractById(id);
  }
  static async createInfoContract(infoContract) {
    try {
      return InfoContractModel.createInfoContract(infoContract);
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(error.message, error.code, error.statusCode);
      } else {
        throw new Error("Error desconocido al crear info_contract");
      }
    }
  }
};

// src/controllers/infoContractController.ts
var InfoContractController = class {
  static async getAllInfoContracts(req, res) {
    const contracts = await InfoContractService.getAllInfoContracts();
    res.json(contracts);
  }
  static async getInfoContractById(req, res) {
    const { id } = req.params;
    const contract = await InfoContractService.getInfoContractById(id);
    res.json(contract);
  }
  static async createInfoContract(req, res) {
    const { InfoContract } = req.body;
    const contract = await InfoContractService.createInfoContract(InfoContract);
    res.status(201).json(contract);
  }
};

// src/routes/infoContractRouter.ts
var InfoContractRouter = Router6();
InfoContractRouter.get("/", InfoContractController.getAllInfoContracts);
InfoContractRouter.get("/:id", InfoContractController.getInfoContractById);
InfoContractRouter.post("/", InfoContractController.createInfoContract);

// src/routes/userRouter.ts
import { Router as Router7 } from "express";

// src/config/jwt.ts
import jwt from "jsonwebtoken";
var SECRET_KEY = process.env.SECRET_KEY_JWT || "mi_clave_secreta";
function createAccesToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      SECRET_KEY,
      { expiresIn: "1d" },
      (err, token) => {
        if (err || !token) {
          reject(err || new Error("Token no generado"));
        } else {
          resolve(token);
        }
      }
    );
  });
}

// src/models/userModel.ts
import bcrypt from "bcrypt";
var UserModel = class {
  static async create(user) {
    try {
      const { rows } = await connection.query(
        `
                select * from users where email = $1 `,
        [user.email]
      );
      if (rows.length != 0) {
        throw new AppError(
          "El email ya existe",
          "DUPLICATE_KEY",
          400
        );
      }
      const hashedPassword = await bcrypt.hash(
        user.password_hash,
        10
      );
      const userCreeated = await connection.query(
        `INSERT INTO users (email,password_hash,roles)
                    VALUES ($1, $2, $3)
                RETURNING *`,
        [user.email, hashedPassword, user.roles]
      );
      return userCreeated.rows[0];
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(
          error.message,
          error.code,
          error.statusCode
        );
      } else {
        throw new AppError(error.message);
      }
    }
  }
  static async login(user) {
    try {
      const { rows } = await connection.query(
        `
                select * from users where email = $1 `,
        [user.email]
      );
      if (rows.length === 0) {
        throw new AppError(
          "El Email no existe",
          "NOT_FOUND",
          400
        );
      }
      const hashedPassword = rows[0].password_hash;
      const texPlaiPassword = user.password_hash;
      const isvalid = bcrypt.compareSync(texPlaiPassword, hashedPassword);
      if (!isvalid) {
        throw new AppError(
          "Contrase\xF1a incorrecta",
          "INCORRECT_PASSWORD",
          400
        );
      }
      return rows[0];
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(
          error.message,
          error.code,
          error.statusCode
        );
      } else {
        throw new AppError(error.message);
      }
    }
  }
  static async findByEmail(email) {
    try {
      const { rows } = await connection.query(
        `
                select * from users where email = $1 `,
        [email]
      );
      if (rows.length === 0) {
        throw new AppError(
          "El Email no existe",
          "NOT_FOUND",
          400
        );
      }
      return rows[0];
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(
          error.message,
          error.code,
          error.statusCode
        );
      } else {
        throw new AppError(error.message);
      }
    }
  }
};

// src/controllers/userController.ts
import jwt2 from "jsonwebtoken";
var UserController = class {
  static async create(req, res) {
    try {
      const user = req.body;
      const createdUser = await UserModel.create(user);
      res.status(200).json(
        { message: "Usuario creado", email: createdUser.email }
      );
      return;
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ message: error.message, code: error.code });
        return;
      }
      res.status(500).json({ message: "Error interno al firmar contrato" });
      return;
    }
  }
  static async login(req, res) {
    try {
      const user = req.body;
      const userLogin = await UserModel.login(user);
      const { password_hash: _, ...userToken } = userLogin;
      const token = await createAccesToken(userToken);
      res.cookie("token", token, {
        httpOnly: false,
        sameSite: "none",
        maxAge: 60 * 60 * 1e3,
        secure: true
        // 1 hora
      });
      res.status(200).json(userToken);
      return;
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({
          message: error.message,
          code: error.code,
          statusCode: error.statusCode
        });
        return;
      }
      res.status(500).json({ message: "Error interno al firmar contrato" });
      return;
    }
  }
  static async logout(req, res) {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "strict"
    });
    res.status(200).json({ message: "Sesi\xF3n cerrada" });
  }
  static async verifyToken(req, res) {
    try {
      const SECRET_KEY_JWT = process.env.SECRET_KEY_JWT;
      if (!SECRET_KEY_JWT) {
        throw new Error("La variable de entorno SECRET_KEY_JWT no est\xE1 definida");
      }
      const { token } = req.cookies;
      if (!token) {
        res.status(400).json({ message: "Unautorized" });
        return;
      }
      jwt2.verify(
        token,
        SECRET_KEY_JWT,
        async (err, user) => {
          if (err) {
            res.status(400).json({ message: "Unautorized" });
            return;
          }
          const userFoud = await UserModel.findByEmail(user.email);
          if (!userFoud) {
            res.status(400).json({ message: "Unautorized" });
            return;
          }
          res.status(200).json({
            email: userFoud.email,
            roles: userFoud.roles
          });
          return;
        }
      );
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(
          error.message,
          error.code,
          error.statusCode
        );
      } else {
        throw new AppError(error.message);
      }
    }
  }
};

// src/routes/userRouter.ts
var UserRouter = Router7();
UserRouter.post("/", UserController.create);
UserRouter.post("/login", UserController.login);
UserRouter.post("/logout", UserController.logout);
UserRouter.get("/verify-token", UserController.verifyToken);

// src/app.ts
var corsOptions = {
  origin: "http://localhost:5173",
  credentials: true
};
dotenv2.config();
var app = express2();
app.disable("x-powered-by");
app.use(express2.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/customer", customerRouter);
app.use("/accused", accusedRouter);
app.use("/employee", employeeRouter);
app.use("/infoContract", InfoContractRouter);
app.use("/contract", contractRouter);
app.use("/send-email", EmailLinkRoute);
app.use("/control-files", controlFileRouter);
app.use("/user", UserRouter);
var PORT = process.env.PORT ?? 1234;
app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map